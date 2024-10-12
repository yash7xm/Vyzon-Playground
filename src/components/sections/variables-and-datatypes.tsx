import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import Code from "../utils/code";
import { Separator } from "../ui/separator";

const VariablesAndDataTypesContent = () => {
    return (
        <div className="p-6">
            {/* Variable Declarations Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Variable Declarations in Vyzon
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                In Vyzon, variables are declared using the <Code code="let" />{" "}
                keyword. This keyword provides a way to define variables that
                can hold values of different data types. By default, when you
                declare a variable using <Code code="let" />, it is initialized
                with a value of <Code code="0" />. Here are some examples of
                variable declarations in Vyzon:
            </div>
            <Separator className="mb-6" />

            {/* Variable Declaration Examples */}
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    className="mt-2 shadow-lg rounded-lg"
                >
                    {`let a; // Variable 'a' is declared and initialized with the default value of 0
let b = 1; // Variable 'b' is declared and initialized with the value 1
let c = 'Hello, World!'; // Variable 'c' is initialized with a string`}
                </SyntaxHighlighter>
                <p className="mt-4">
                    In this example, the variable <Code code="a" /> is declared
                    without an explicit value, resulting in a default
                    initialization of <Code code="0" />. The variable{" "}
                    <Code code="b" /> is initialized with the value{" "}
                    <Code code="1" />, and <Code code="c" /> holds a string
                    value <Code code="'Hello, World!'" />.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Data Types Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Data Types in Vyzon
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                Vyzon supports various data types, allowing you to represent a
                wide range of values. The primary data types include:
            </div>
            <Separator className="mb-6" />

            {/* Data Types Examples */}
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    className="mt-2 shadow-lg rounded-lg"
                >
                    {`let a = 'Hello, World!'; // String
let b = 10; // Number
let c = 10 + (10 * 3) + a; // Arithmetic operation with string concatenation
let d = "Ok!"; // Another String
let e = null; // Null value
let f = true; // Boolean true
let g = false; // Boolean false`}
                </SyntaxHighlighter>
                <p className="mt-4">
                    In this example, various data types are demonstrated:
                    <ul className="list-disc list-inside">
                        <li>
                            <strong>String:</strong> <Code code="a" /> is
                            initialized with a string value.
                        </li>
                        <li>
                            <strong>Number:</strong> <Code code="b" /> is
                            assigned a numeric value.
                        </li>
                        <li>
                            <strong>Arithmetic Operations:</strong>{" "}
                            <Code code="c" /> demonstrates an arithmetic
                            operation combined with string concatenation.
                        </li>
                        <li>
                            <strong>Null:</strong> <Code code="e" /> is
                            explicitly set to <Code code="null" />.
                        </li>
                        <li>
                            <strong>Boolean:</strong> <Code code="f" /> and{" "}
                            <Code code="g" /> are initialized with boolean
                            values <Code code="true" /> and{" "}
                            <Code code="false" /> respectively.
                        </li>
                    </ul>
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Summary Section */}
            <div className="text-4xl font-bold text-emeraldGreen font-montserrat mb-6 ">
                Summary
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8">
                Understanding variable declarations and data types is crucial
                for effective programming in Vyzon. By using the{" "}
                <Code code="let" /> keyword, you can create variables that hold
                different types of values, from strings and numbers to booleans
                and nulls. This flexibility allows you to manage data
                effectively, enabling you to write dynamic and responsive code.
            </div>
        </div>
    );
};

export default VariablesAndDataTypesContent;
