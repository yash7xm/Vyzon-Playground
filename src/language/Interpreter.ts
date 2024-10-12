import Environment from "./Environment";
import { Parser } from "./parser/Parser";

class Interpreter {
    global: Environment;

    constructor(global: Environment = GlobalEnvironment) {
        this.global = global;
    }

    interpret(node: any): any {
        return this.StatementList(node);
    }

    StatementList(body: any[], env: Environment = this.global): any {
        let result: any;
        for (const statement of body) {
            result = this.Statement(statement, env);
        }
        return result;
    }

    Statement(node: any, env: Environment): any {
        switch (node.type) {
            case "ExpressionStatement":
                return this.ExpressionStatement(node.expression, env);
            case "VariableStatement":
                return this.VariableStatement(node.declarations, env);
            case "BlockStatement":
                return this.BlockStatement(node.body, env);
            case "IfStatement":
                return this.IfStatement(node, env);
            case "WhileStatement":
                return this.WhileStatement(node, env);
            case "DoWhileStatement":
                return this.DoWhileStatement(node, env);
            case "ForStatement":
                return this.ForStatement(node, env);
            case "FunctionDeclaration":
                return this.FunctionDeclaration(node, env);
            case "ReturnStatement":
                return this.ReturnStatement(node, env);
            case "ClassDeclaration":
                return this.ClassDeclaration(node, env);
            case "ModuleDeclaration":
                return this.ModuleDeclaration(node, env);
            case "ImportStatement":
                return this.ImportStatement(node);
        }
    }

    ImportStatement(node: any): void {
        const parser = new Parser();
        const fs = require("fs");
        const path = require("path");

        const moduleName = node.name.name;

        const searchDirectories = [
            path.join(__dirname, "modules"),
            process.cwd(),
        ];

        let fullPath: string | null = null;

        for (const dir of searchDirectories) {
            const potentialPath = path.join(dir, `${moduleName}.vy`);
            if (fs.existsSync(potentialPath)) {
                fullPath = potentialPath;
                break;
            }
        }

        if (!fullPath) {
            console.error(`Error: Module '${moduleName}' not found.`);
            return;
        }

        try {
            const code = fs.readFileSync(fullPath, "utf-8");
            const ast = parser.parse(code);
            this.interpret(ast.body);
        } catch (readErr) {
            console.error(`Error reading ${fullPath}:`, readErr);
        }
    }

    ModuleDeclaration(node: any, env: Environment): any {
        const moduleEnv = new Environment({}, env);

        this.StatementList(node.body.body, moduleEnv);

        return env.define(node.name.name, moduleEnv);
    }

    ClassDeclaration(node: any, env: Environment): any {
        const className = node.id.name;
        const superClassName = node.superClass ? node.superClass.name : null;

        const parentEnv = superClassName ? env.lookup(superClassName) : env;

        const classEnv = new Environment({}, parentEnv);

        this.StatementList(node.body.body, classEnv);

        return env.define(className, classEnv);
    }

    FunctionDeclaration(node: any, env: Environment): any {
        let name = node.name.name;

        let functionBody = {
            name: node.name.name,
            params: node.params,
            body: node.body,
            env,
        };

        return env.define(name, functionBody);
    }

    ReturnStatement(node: any, env: Environment): any {
        return this.Expression(node.argument, env);
    }

    ForStatement(node: any, env: Environment): any {
        let result: any;
        for (
            this.Statement(node.init, env);
            this.Expression(node.test, env);
            this.Expression(node.update, env)
        ) {
            result = this.Statement(node.body, env);
        }

        return result;
    }

    DoWhileStatement(node: any, env: Environment): any {
        let result: any;
        do {
            result = this.Statement(node.body, env);
        } while (this.Expression(node.test, env));
        return result;
    }

    WhileStatement(node: any, env: Environment): any {
        let result: any;

        while (this.Expression(node.test, env)) {
            result = this.Statement(node.body, env);
        }

        return result;
    }

    IfStatement(node: any, env: Environment): any {
        const testResult = this.Expression(node.test, env);
        if (testResult) {
            return this.Statement(node.consequent, env);
        } else if (node.alternate) {
            return this.Statement(node.alternate, env);
        } else {
            return null;
        }
    }

    BlockStatement(node: any, env: Environment): any {
        const blockEnv = new Environment({}, env);
        return this.StatementList(node, blockEnv);
    }

    VariableStatement(node: any, env: Environment): any {
        return node.map((declaration: any) =>
            this.VariableDeclaration(declaration, env)
        );
    }

    VariableDeclaration(node: any, env: Environment): void {
        let id = node.id.name;
        let init = node.init !== null ? this.Expression(node.init, env) : 0;
        env.define(id, init);
    }

    ExpressionStatement(expression: any, env: Environment): any {
        return this.Expression(expression, env);
    }

    Expression(node: any, env: Environment): any {
        switch (node.type) {
            case "NumericLiteral":
                return this.NumericLiteral(node);
            case "StringLiteral":
                return this.StringLiteral(node);
            case "BooleanLiteral":
                return this.BooleanLiteral(node);
            case "NullLiteral":
                return this.NullLiteral(node);
            case "Identifier":
                return this.Identifier(node, env);
            case "LogicalORExpression":
                return this.LogicalORExpression(node, env);
            case "LogicalANDExpression":
                return this.LogicalANDExpression(node, env);
            case "UnaryExpression":
                return this.UnaryExpression(node, env);
            case "AssignmentExpression":
                return this.AssignmentExpression(node, env);
            case "ConditionalExpression":
                return this.ConditionalExpression(node, env);
            case "MemberExpression":
                return this.MemberExpression(node, env);
            case "BinaryExpression":
                return this.BinaryExpression(node, env);
            case "CallExpression":
                return this.CallExpression(node, env);
            case "NewExpression":
                return this.NewExpression(node, env);
            case "ThisExpression":
                return this.ThisExpression(env);
        }
    }

    ThisExpression(env: Environment): any {
        let instance: Environment;
        try {
            instance = env.lookup("this");
        } catch {
            instance = env;
        }
        return instance;
    }

    CallExpression(node: any, env: Environment): any {
        switch (node.calle.type) {
            case "MemberExpression":
                return this._callMemberExpression(node, env);
            case "Super":
                return this._callSuperExpression(node, env);
            default:
                return this._normalCallExpression(node, env);
        }
    }

    _callMemberExpression(node: any, env: Environment): any {
        let object = this.Expression(node.calle.object, env);
        let method = object.lookup(node.calle.property.name);

        let args = node.arguments.map((arg: any) => this.Expression(arg, env));
        let params = method.params.map((param: any) => param.name);

        const activationRecord: { [key: string]: any } = {};
        params.forEach((param: string, index: number) => {
            activationRecord[param] = args[index];
        });

        activationRecord["this"] = object;

        const activationEnv = new Environment(activationRecord, method.env);

        return this.Statement(method.body, activationEnv);
    }

    _callSuperExpression(node: any, env: Environment): any {
        const instanceEnv = env.lookup("this");

        const superEnv = instanceEnv.parent.parent;

        if (!superEnv) {
            throw new ReferenceError(`Superclass environment not found.`);
        }

        const constructor = superEnv.lookup("constructor");

        if (!constructor) {
            throw new ReferenceError(`Superclass constructor not found.`);
        }

        const args = node.arguments.map((arg: any) =>
            this.Expression(arg, env)
        );

        const params = constructor.params.map((param: any) => param.name);

        const activationRecord: { [key: string]: any } = {};
        params.forEach((param: string, index: number) => {
            activationRecord[param] = args[index];
        });

        activationRecord["this"] = instanceEnv;

        const activationEnv = new Environment(
            activationRecord,
            constructor.env
        );

        return this.Statement(constructor.body, activationEnv);
    }

    _normalCallExpression(node: any, env: Environment): any {
        if (node.calle.name === "write") {
            return this._callWriteExpression(node, env);
        }

        let fn = env.lookup(node.calle.name);
        let args = node.arguments.map((args: any) =>
            this.Expression(args, env)
        );
        let params = fn.params.map((param: any) => param.name);

        let activationRecord: { [key: string]: any } = {};
        params.forEach((param: string, index: number) => {
            activationRecord[param] = args[index];
        });

        const activationEnv = new Environment(activationRecord, fn.env);

        return this.Statement(fn.body, activationEnv);
    }

    _callWriteExpression(node: any, env: Environment): any {
        let args = node.arguments.map((args: any) =>
            this.Expression(args, env)
        );
        return console.log(...args);
    }

    NewExpression(node: any, env: Environment): any {
        let classEnv = env.lookup(node.callee.name);

        let instanceEnv = new Environment({}, classEnv);

        let constructor = classEnv.lookup("constructor");
        if (constructor) {
            let args = node.arguments.map((arg: any) =>
                this.Expression(arg, env)
            );
            let params = constructor.params.map((param: any) => param.name);

            const activationRecord: { [key: string]: any } = {};
            params.forEach((param: string, index: number) => {
                activationRecord[param] = args[index];
            });

            activationRecord["this"] = instanceEnv;

            const activationEnv = new Environment(
                activationRecord,
                constructor.env
            );

            this.Statement(constructor.body, activationEnv);
        }

        return instanceEnv;
    }

    MemberExpression(node: any, env: Environment): any {
        let object = this.Expression(node.object, env);

        if (node.computed) {
            return object.lookup(this.Expression(node.property, env));
        } else {
            return object.lookup(node.property.name);
        }
    }

    ConditionalExpression(node: any, env: Environment): any {
        return this.Expression(node.test, env)
            ? this.Expression(node.consequent, env)
            : this.Expression(node.alternate, env);
    }

    AssignmentExpression(node: any, env: Environment): any {
        if (node.operator === "=") {
            return this.SimpleAssign(node, env);
        } else {
            return this.ComplexAssign(node, env);
        }
    }

    BinaryExpression(node: any, env: Environment): any {
        switch (node.operator) {
            case "+":
            case "-":
            case "*":
            case "/":
            case "%":
                return this.MathExpression(node, env);
            case "==":
            case ">":
            case "<":
            case ">=":
            case "<=":
            case "!=":
                return this.RealationalExpression(node, env);
        }
    }

    MathExpression(node: any, env: Environment): any {
        let left = this.Expression(node.left, env);
        let right = this.Expression(node.right, env);

        switch (node.operator) {
            case "+":
                return left + right;
            case "-":
                return left - right;
            case "*":
                return left * right;
            case "/":
                return left / right;
            case "%":
                return left % right;
        }
    }

    RealationalExpression(node: any, env: Environment): any {
        let left = this.Expression(node.left, env);
        let right = this.Expression(node.right, env);

        switch (node.operator) {
            case "==":
                return left == right;
            case ">":
                return left > right;
            case ">=":
                return left >= right;
            case "<":
                return left < right;
            case "<=":
                return left <= right;
            case "!=":
                return left != right;
        }
    }

    LogicalORExpression(node: any, env: Environment): any {
        let left = this.Expression(node.left, env);
        let right = this.Expression(node.right, env);

        return left || right;
    }

    LogicalANDExpression(node: any, env: Environment): any {
        let left = this.Expression(node.left, env);
        let right = this.Expression(node.right, env);

        return left && right;
    }

    UnaryExpression(node: any, env: Environment): any {
        let argument = this.Expression(node.argument, env);
        let operator = node.operator;

        switch (operator) {
            case "!":
                return !argument;
            case "+":
                return +argument;
            case "-":
                return -argument;
        }
    }

    SimpleAssign(node: any, env: Environment): any {
        if (
            node.left.type === "MemberExpression" &&
            node.left.object.type === "ThisExpression"
        ) {
            const instanceEnv = env.lookup("this");
            const fieldName = node.left.property.name;
            const value = this.Expression(node.right, env);

            instanceEnv.define(fieldName, value);

            return value;
        }

        const varName = node.left.name;
        const value = this.Expression(node.right, env);
        env.assign(varName, value);
        return value;
    }

    ComplexAssign(node: any, env: Environment): void {
        let left = node.left.name;
        let right = this.Expression(node.right, env);
        const operator = node.operator[0];
        const leftValue = env.lookup(left);

        if (
            typeof right === "string" &&
            typeof leftValue === "string" &&
            operator !== "+"
        ) {
            throw new SyntaxError("Invalid operation");
        }

        switch (operator) {
            case "+":
                right = leftValue + right;
                break;
            case "-":
                right = leftValue - right;
                break;
            case "*":
                right = leftValue * right;
                break;
            case "/":
                right = leftValue / right;
                break;
        }

        env.assign(left, right);
        return;
    }

    Identifier(node: any, env: Environment): any {
        return env.lookup(node.name);
    }

    NumericLiteral(node: any): number {
        return node.value;
    }

    StringLiteral(node: any): string {
        return node.value;
    }

    BooleanLiteral(node: any): boolean {
        return node.value;
    }

    NullLiteral(node: any): null {
        return node.value;
    }
}

const GlobalEnvironment = new Environment({
    null: null,
    true: true,
    false: false,
});

export default Interpreter;
