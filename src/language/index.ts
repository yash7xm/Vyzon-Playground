import { Parser } from "./parser/Parser";
import Interpreter from "./Interpreter";

export function runCode(code: string): any {
    const parser: Parser = new Parser();
    const interpreter: Interpreter = new Interpreter();
    const parsedExp: any = parser.parse(code).body;
    return interpreter.interpret(parsedExp);
}
