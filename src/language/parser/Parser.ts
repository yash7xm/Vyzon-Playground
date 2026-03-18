import { NodeWithLocation, SourceLocation, VyzonError } from "../errors";
import { Token, Tokenizer } from "./Tokenizer";

class Parser {
    private _string: string;
    private _tokenizer: Tokenizer;
    private _lookahead: any;
    private _lastToken: Token | null;

    constructor() {
        this._string = "";
        this._tokenizer = new Tokenizer();
        this._lookahead = null;
        this._lastToken = null;
    }

    parse(string: string): any {
        this._string = string;
        this._tokenizer.init(this._string);

        this._lookahead = this._tokenizer.getNextToken();

        return this.Program();
    }

    Program(): any {
        return this._withLoc(
            {
            type: "Program",
            body: this.StatementList(),
            },
            this._lookahead,
            this._lastToken
        );
    }

    StatementList(stopLookAhead: string | null = null) {
        const statementList: any[] = [];
        while (
            this._lookahead != null &&
            this._lookahead.type !== stopLookAhead
        ) {
            statementList.push(this.Statement());
        }

        return statementList;
    }

    Statement() {
        if (this._lookahead == null) {
            throw new VyzonError("SyntaxError", "Unexpected end of input");
        }

        switch (this._lookahead.type) {
            case "{":
                return this.BlockStatement();
            case ";":
                return this.EmptyStatement();
            case "let":
                return this.VariableStatement();
            case "if":
                return this.IfStatement();
            case "def":
                return this.FucntionDeclaration();
            case "return":
                return this.ReturnStatement();
            case "class":
                return this.ClassDeclaration();
            case "while":
            case "do":
            case "for":
                return this.IterationStatement();
            case "module":
                return this.ModuleStatement();
            case "import":
                return this.ImportStatement();
            default:
                return this.ExpressionStatement();
        }
    }

    ImportStatement() {
        const start = this._lookahead;
        this._eat("import");
        const name = this.Identifier();

        return this._withLoc({
            type: "ImportStatement",
            name,
        }, start, name);
    }

    ModuleStatement() {
        const start = this._lookahead;
        this._eat("module");
        const name = this.Identifier();
        const body = this.BlockStatement();

        return this._withLoc({
            type: "ModuleDeclaration",
            name,
            body,
        }, start, body);
    }

    BlockStatement() {
        const start = this._lookahead;
        this._eat("{");
        const body =
            this._lookahead?.type !== "}" ? this.StatementList("}") : [];
        const end = this._eat("}");
        return this._withLoc({
            type: "BlockStatement",
            body,
        }, start, end);
    }

    EmptyStatement() {
        const start = this._lookahead;
        const end = this._eat(";");
        return this._withLoc({
            type: "EmptyStatement",
        }, start, end);
    }

    VariableStatement() {
        const start = this._lookahead;
        const variableStatement = this.VariableStatementInit();
        const end = this._eat(";");

        return this._withLoc(variableStatement, start, end);
    }

    VariableStatementInit() {
        const start = this._lookahead;
        this._eat("let");
        const declarations = this.VariableDeclarationList();

        return this._withLoc({
            type: "VariableStatement",
            declarations,
        }, start, declarations[declarations.length - 1] ?? start);
    }

    VariableDeclarationList() {
        const declarations: any[] = [];

        do {
            declarations.push(this.VariableDeclaration());
        } while (this._lookahead.type === "," && this._eat(","));

        return declarations;
    }

    VariableDeclaration() {
        const start = this._lookahead;
        const id = this.Identifier();

        const init =
            this._lookahead?.type !== ";" && this._lookahead?.type !== ","
                ? this.VariableInitilizer()
                : null;

        return this._withLoc({
            type: "VariableDeclaration",
            id,
            init,
        }, start, init ?? id);
    }

    VariableInitilizer() {
        this._eat("SIMPLE_ASSIGN");
        return this.AssignmentExpression();
    }

    IfStatement(): any {
        const start = this._lookahead;
        this._eat("if");
        this._eat("(");
        const test = this.Expression();
        this._eat(")");
        const consequent = this.Statement();

        let alternate = null;

        alternate =
            this._lookahead != null ? this._CheckElifOrElseStatement() : null;

        return this._withLoc({
            type: "IfStatement",
            test,
            consequent,
            alternate,
        }, start, alternate ?? consequent);
    }

    _CheckElifOrElseStatement() {
        switch (this._lookahead?.type) {
            case "elif":
                return this.ElifStatement();
            case "else":
                return this.ElseStatement();
            default:
                return null;
        }
    }

    ElifStatement(): any {
        const start = this._lookahead;
        this._eat("elif");
        this._eat("(");
        const test = this.Expression();
        this._eat(")");
        const consequent = this.Statement();

        let alternate = null;
        alternate =
            this._lookahead != null ? this._CheckElifOrElseStatement() : null;

        return this._withLoc({
            type: "IfStatement",
            test,
            consequent,
            alternate,
        }, start, alternate ?? consequent);
    }

    ElseStatement(): any {
        this._eat("else");
        return this.Statement();
    }

    IterationStatement() {
        switch (this._lookahead?.type) {
            case "while":
                return this.WhileStatement();
            case "do":
                return this.DoWhileStatement();
            case "for":
                return this.ForStatement();
            default:
                return null;
        }
    }

    WhileStatement(): any {
        const start = this._lookahead;
        this._eat("while");
        this._eat("(");
        let test = this.Expression();
        this._eat(")");
        let body = this.Statement();

        return this._withLoc({
            type: "WhileStatement",
            test,
            body,
        }, start, body);
    }

    DoWhileStatement(): any {
        const start = this._lookahead;
        this._eat("do");
        let body = this.Statement();
        this._eat("while");
        this._eat("(");
        let test = this.Expression();
        this._eat(")");
        const end = this._eat(";");

        return this._withLoc({
            type: "DoWhileStatement",
            body,
            test,
        }, start, end);
    }

    ForStatement(): any {
        const start = this._lookahead;
        this._eat("for");
        this._eat("(");

        let init =
            this._lookahead.type !== ";" ? this.InitForStatement() : null;
        this._eat(";");

        let test = this._lookahead?.type !== ";" ? this.Expression() : null;
        this._eat(";");

        let update = this._lookahead?.type !== ")" ? this.Expression() : null;
        this._eat(")");

        let body = this.Statement();

        return this._withLoc({
            type: "ForStatement",
            init,
            test,
            update,
            body,
        }, start, body);
    }

    InitForStatement() {
        if (this._lookahead.type === "let") {
            return this.VariableStatementInit();
        }
        return this.Expression();
    }

    FucntionDeclaration() {
        const start = this._lookahead;
        this._eat("def");
        const name = this.Identifier();

        this._eat("(");
        const params =
            this._lookahead.type !== ")" ? this.FormalParameterList() : [];
        this._eat(")");

        const body = this.BlockStatement();

        return this._withLoc({
            type: "FunctionDeclaration",
            name,
            params,
            body,
        }, start, body);
    }

    FormalParameterList() {
        let params: any[] = [];
        do {
            params.push(this.Identifier());
        } while (this._lookahead.type === "," && this._eat(","));

        return params;
    }

    ReturnStatement() {
        const start = this._lookahead;
        this._eat("return");
        let argument = this._lookahead?.type !== ";" ? this.Expression() : null;
        const end = this._eat(";");
        return this._withLoc({
            type: "ReturnStatement",
            argument,
        }, start, argument ?? end);
    }

    ClassDeclaration() {
        const start = this._lookahead;
        this._eat("class");
        const id = this.Identifier();

        const superClass =
            this._lookahead.type === "extends" ? this.ClassExtends() : null;

        const body = this.BlockStatement();

        return this._withLoc({
            type: "ClassDeclaration",
            id,
            superClass,
            body,
        }, start, body);
    }

    ClassExtends() {
        this._eat("extends");
        return this.Identifier();
    }

    ExpressionStatement() {
        const start = this._lookahead;
        const expression = this.Expression();
        const end = this._eat(";");
        return this._withLoc({
            type: "ExpressionStatement",
            expression,
        }, start, end);
    }

    Expression() {
        return this.AssignmentExpression();
    }

    AssignmentExpression(): any {
        let left = this.ConditionalExpression();

        while (this._lookahead && this._isAssignmentOperator(this._lookahead.type)) {
            const operator = this.AssignmentOperator().value;
            const right = this.AssignmentExpression();

            return {
                type: "AssignmentExpression",
                operator,
                left: this._checkValidAssignmentTarget(left),
                right,
            };
        }

        return left;
    }

    ConditionalExpression(): any {
        let test = this.LogicalORExpression();
        if (this._lookahead?.type === "?") this._eat("?");
        else return test;
        let consequent = this.Expression();
        this._eat(":");
        let alternate = this.Expression();

        return this._withLoc({
            type: "ConditionalExpression",
            test,
            consequent,
            alternate,
        }, test, alternate);
    }

    LogicalORExpression() {
        let left = this.LogicalANDExpression();

        while (this._lookahead?.type === "LOGICAL_OR") {
            const operator = this._eat("LOGICAL_OR").value;
            const right = this.LogicalANDExpression();

            return this._withLoc({
                type: "LogicalORExpression",
                operator,
                left,
                right,
            }, left, right);
        }

        return left;
    }

    LogicalANDExpression() {
        let left = this.EqualityExpression();

        while (this._lookahead?.type === "LOGICAL_AND") {
            const operator = this._eat("LOGICAL_AND").value;
            const right = this.EqualityExpression();

            return this._withLoc({
                type: "LogicalANDExpression",
                operator,
                left,
                right,
            }, left, right);
        }

        return left;
    }

    EqualityExpression() {
        let left = this.RelationalExpression();

        while (this._lookahead?.type === "EQUALITY_OPERATOR") {
            const operator = this._eat("EQUALITY_OPERATOR").value;
            const right = this.RelationalExpression();

            return this._withLoc({
                type: "BinaryExpression",
                operator,
                left,
                right,
            }, left, right);
        }

        return left;
    }

    RelationalExpression() {
        let left = this.AdditiveExpression();

        while (this._lookahead?.type == "RELATIONAL_OPERATOR") {
            const operator = this._eat("RELATIONAL_OPERATOR").value;
            const right = this.AdditiveExpression();

            return this._withLoc({
                type: "BinaryExpression",
                operator,
                left,
                right,
            }, left, right);
        }

        return left;
    }

    AdditiveExpression() {
        let left = this.ModuloExpreesion();

        while (this._lookahead?.type === "ADDITIVE_OPERATOR") {
            const operator = this._eat("ADDITIVE_OPERATOR").value;
            const right = this.ModuloExpreesion();
            left = {
                type: "BinaryExpression",
                operator,
                left,
                right,
            };
            left = this._withLoc(left, left.left, right);
        }

        return left;
    }

    ModuloExpreesion() {
        let left = this.MultipicativeExpression();

        while (this._lookahead?.type === "MODULO_OPERATOR") {
            const operator = this._eat("MODULO_OPERATOR").value;
            const right = this.MultipicativeExpression();
            left = {
                type: "BinaryExpression",
                operator,
                left,
                right,
            };
            left = this._withLoc(left, left.left, right);
        }

        return left;
    }

    MultipicativeExpression() {
        let left = this.UnaryExpression();

        while (this._lookahead?.type === "MULTIPLICATIVE_OPERATOR") {
            const operator = this._eat("MULTIPLICATIVE_OPERATOR").value;
            const right = this.UnaryExpression();
            left = {
                type: "BinaryExpression",
                operator,
                left,
                right,
            };
            left = this._withLoc(left, left.left, right);
        }

        return left;
    }

    UnaryExpression(): any {
        let operator;
        switch (this._lookahead?.type) {
            case "ADDITIVE_OPERATOR":
                operator = this._eat("ADDITIVE_OPERATOR").value;
                break;
            case "LOGICAL_NOT":
                operator = this._eat("LOGICAL_NOT").value;
                break;
        }

        if (operator != null) {
            return {
                type: "UnaryExpression",
                operator,
                argument: this.UnaryExpression(),
            };
        }

        return this.LeftHandSideExpression();
    }

    LeftHandSideExpression() {
        return this.CallMemberExpression();
    }

    CallMemberExpression(): any {
        if (this._lookahead?.type === "super") {
            return this._CallExpression(this.Super());
        }

        const member = this.MemberExpression();

        if (this._lookahead?.type === "(") {
            return this._CallExpression(member);
        }

        return member;
    }

    _CallExpression(calle: any) {
        let callExpression: any = {
            type: "CallExpression",
            calle,
            arguments: this.Arguments(),
        };
        callExpression = this._withLoc(
            callExpression,
            calle,
            callExpression.arguments[callExpression.arguments.length - 1] ??
                this._lastToken
        );

        if (this._lookahead?.type === "(") {
            callExpression = this._CallExpression(callExpression);
        }

        return callExpression;
    }

    Arguments() {
        this._eat("(");
        const argumentList =
            this._lookahead?.type !== ")" ? this.ArgumentsList() : [];
        this._eat(")");

        return argumentList;
    }

    ArgumentsList() {
        const argumentList: any[] = [];
        do {
            argumentList.push(this.AssignmentExpression());
        } while (this._lookahead?.type === "," && this._eat(","));

        return argumentList;
    }

    MemberExpression(): any {
        let object = this.PrimaryExpression();

        while (this._lookahead?.type === "." || this._lookahead?.type === "[") {
            if (this._lookahead?.type === ".") {
                this._eat(".");
                const property = this.Identifier();
                object = {
                    type: "MemberExpression",
                    computed: false,
                    object,
                    property,
                };
                object = this._withLoc(object, object.object, property);
            } else {
                this._eat("[");
                const property = this.Expression();
                this._eat("]");
                object = {
                    type: "MemberExpression",
                    computed: true,
                    object,
                    property,
                };
                object = this._withLoc(object, object.object, property);
            }
        }

        return object;
    }

    PrimaryExpression() {
        if (this._lookahead && this._isLiteral(this._lookahead.type)) {
            return this.Literal();
        }
        switch (this._lookahead?.type) {
            case "IDENTIFIER":
                return this.Identifier();
            case "(":
                return this.ParethesizedExpression();
            case "this":
                return this.ThisExpression();
            case "new":
                return this.NewExpression();
            default:
                throw new VyzonError(
                    "SyntaxError",
                    "Unexpected primary expression",
                    this._lookahead?.loc
                );
        }
    }

    ThisExpression() {
        this._eat("this");
        return {
            type: "ThisExpression",
            loc: this._lastToken?.loc,
        };
    }

    Super() {
        this._eat("super");
        return {
            type: "Super",
            loc: this._lastToken?.loc,
        };
    }

    NewExpression() {
        const start = this._lookahead;
        this._eat("new");
        return this._withLoc({
            type: "NewExpression",
            callee: this.MemberExpression(),
            arguments: this.Arguments(),
        }, start, this._lastToken);
    }

    ParethesizedExpression() {
        this._eat("(");
        const expression = this.Expression();
        this._eat(")");
        return expression;
    }

    _isAssignmentOperator(node: any): any {
        return node === "SIMPLE_ASSIGN" || node === "COMPLEX_ASSIGN";
    }

    AssignmentOperator() {
        if (this._lookahead?.type === "SIMPLE_ASSIGN") {
            return this._eat("SIMPLE_ASSIGN");
        }
        return this._eat("COMPLEX_ASSIGN");
    }

    _checkValidAssignmentTarget(node: any): any {
        if (node.type === "Identifier" || node.type === "MemberExpression") {
            return node;
        }

        throw new VyzonError(
            "SyntaxError",
            "Invalid left-hand side in assignment expression",
            node?.loc
        );
    }

    Identifier() {
        const token = this._eat("IDENTIFIER");
        const name = token.value;
        return {
            type: "Identifier",
            name,
            loc: token.loc,
        };
    }

    _isLiteral(tokenType: any): any {
        return (
            tokenType === "NUMBER" ||
            tokenType === "STRING" ||
            tokenType === "true" ||
            tokenType === "false" ||
            tokenType === "null"
        );
    }

    Literal() {
        switch (this._lookahead?.type) {
            case "NUMBER":
                return this.NumericLiteral();
            case "STRING":
                return this.StringLiteral();
            case "true":
                return this.BooleanLiteral(true);
            case "false":
                return this.BooleanLiteral(false);
            case "null":
                return this.NullLiteral();
        }
        throw new VyzonError(
            "SyntaxError",
            "Unexpected literal production",
            this._lookahead?.loc
        );
    }

    NumericLiteral() {
        const token = this._eat("NUMBER");
        return {
            type: "NumericLiteral",
            value: Number(token.value),
            loc: token.loc,
        };
    }

    StringLiteral() {
        const token = this._eat("STRING");
        return {
            type: "StringLiteral",
            value: token.value.slice(1, -1),
            loc: token.loc,
        };
    }

    BooleanLiteral(value: any): any {
        this._eat(value ? "true" : "false");
        return {
            type: "BooleanLiteral",
            value,
            loc: this._lastToken?.loc,
        };
    }

    NullLiteral() {
        this._eat("null");
        return {
            type: "NullLiteral",
            value: null,
            loc: this._lastToken?.loc,
        };
    }

    _eat(tokenType: any): Token {
        const token = this._lookahead;

        if (token == null) {
            throw new VyzonError(
                "SyntaxError",
                `Unexpected end of input, expected "${tokenType}"`
            );
        }

        if (token.type !== tokenType) {
            throw new VyzonError(
                "SyntaxError",
                `Unexpected token "${token.value}", expected "${tokenType}"`,
                token.loc
            );
        }

        this._lastToken = token;
        this._lookahead = this._tokenizer.getNextToken();

        return token;
    }

    private _withLoc<T extends NodeWithLocation>(
        node: T,
        start: Token | NodeWithLocation | null | undefined,
        end: Token | NodeWithLocation | null | undefined
    ): T {
        const startLoc = this._extractLoc(start);
        const endLoc = this._extractLoc(end) ?? startLoc;

        if (startLoc && endLoc) {
            node.loc = {
                start: startLoc.start,
                end: endLoc.end,
            };
        }

        return node;
    }

    private _extractLoc(
        value: Token | NodeWithLocation | null | undefined
    ): SourceLocation | undefined {
        return value?.loc;
    }
}

export { Parser };
