import Code from "../utils/code";
import { Separator } from "../ui/separator";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const BuiltInsConsoleOutputContent = () => {
    return (
        <div className="p-6">
            {/* Built-ins Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Built-ins: Console Output
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                Vyzon provides built-in functions to simplify common tasks. One
                of the most frequently used functions in any programming
                language is printing output to the console, and Vyzon offers the{" "}
                <Code code="write()" /> function for this purpose. Whether
                you're debugging, providing status updates, or simply outputting
                data, <Code code="write()" /> is your go-to tool in Vyzon.
            </div>
            <Separator className="mb-6" />

            {/* Console Output Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Console Output in Vyzon
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                In Vyzon, the <Code code="write()" /> function is used to output
                values, messages, or expressions to the console. It allows you
                to print strings, variables, and even combine multiple
                expressions in one statement. The function provides great
                flexibility in terms of the data it can print, and it's
                essential for both debugging and general output purposes.
                <p className="mt-4">
                    Here are some examples of how you can use the{" "}
                    <Code code="write()" />
                    function:
                </p>
                <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    className="mt-2 shadow-lg rounded-lg"
                >
                    {`let a = 'Anything';\n
write(a); // Output: Anything\n
write("abc"); // Output: abc\n
write("write anything: ", a); // Output: write anything: Anything`}
                </SyntaxHighlighter>
                <p className="mt-4">
                    The <Code code="write()" />
                    function is incredibly versatile. In the first example, we
                    print the value of a variable. In the second, a simple
                    string is printed. Finally, in the third example, you can
                    see how <Code code="write()" /> allows you to print multiple
                    values in one statement by separating them with commas. This
                    makes it easy to combine text and variables for more
                    informative output.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Dynamic Typing and Console Output */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Dynamic Typing with Console Output
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                Vyzon’s <strong>dynamic typing</strong> also applies when
                printing variables to the console. Since variables in Vyzon
                don't require explicit type declarations, the{" "}
                <Code code="write()" /> function can seamlessly handle various
                data types—from strings to numbers, booleans, and more. This
                allows developers to output any kind of data without worrying
                about type compatibility or conversions.
                <p className="mt-4">
                    For instance, you can print variables holding different
                    types of data, and Vyzon will automatically handle the
                    formatting:
                </p>
                <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    className="mt-2 shadow-lg rounded-lg"
                >
                    {`let a = 42;\n
let b = 'The answer is';\n
let c = true;\n
write(b + " " + a + " " + c); // Output: The answer is 42 true`}
                </SyntaxHighlighter>
                <p className="mt-4">
                    In this example, the string <Code code="b" />, the number{" "}
                    <Code code="a" />, and the boolean <Code code="c" /> are all
                    printed in a single line. Thanks to Vyzon's dynamic typing
                    and the flexible <Code code="write()" /> function, you can
                    effortlessly combine different types of data in your console
                    output.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Practical Use Case Section */}
            <div className="text-4xl font-bold text-emeraldGreen font-montserrat mb-6 ">
                Practical Use Cases
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                The <Code code="write()" /> function is particularly useful in a
                variety of scenarios:
                <ul className="list-disc my-4">
                    <li>
                        <strong>Debugging</strong>: Use <Code code="write()" />{" "}
                        to inspect the values of variables at different points
                        in your program.
                    </li>
                    <li>
                        <strong>Output for Users</strong>: When building scripts
                        that interact with users, <Code code="write()" /> allows
                        you to display results, messages, or prompts.
                    </li>
                    <li>
                        <strong>Logging</strong>: Developers often use console
                        output to log the state of a program, check
                        calculations, or monitor function calls.
                    </li>
                </ul>
                <p className="mt-4">
                    This flexibility in output helps developers create clear and
                    user-friendly interactions or inspect their code in real
                    time.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Summary Section */}
            <div className="text-4xl font-bold text-emeraldGreen font-montserrat mb-6 ">
                Summary
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8">
                Vyzon’s <Code code="write()" /> function makes console output
                easy and intuitive. Whether you're printing a simple string,
                combining variables and text, or handling dynamic data types,{" "}
                <Code code="write()" /> is a versatile tool for all your console
                output needs. With its dynamic typing support, developers can
                output any data type without worrying about manual type
                management, enabling clean and flexible code.
            </div>
        </div>
    );
};

export default BuiltInsConsoleOutputContent;
