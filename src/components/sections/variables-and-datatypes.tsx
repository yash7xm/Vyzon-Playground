import Code from "../utils/code";

const VariablesAndDataTypesContent = () => {
    return (
        <div className="p-6">
            {/* Variable Declarations Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 underline underline-offset-4 decoration-wavy">
                Variable Declarations
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                In Vyzon, variables are declared using the <Code code="let" />{" "}
                keyword. One of Vyzon's core principles is simplicity, and
                variable declarations reflect this. When a variable is declared
                using <Code code="let" /> without an explicit value, it is
                automatically initialized with a default value of{" "}
                <Code code="0" />. However, you can also assign specific values
                at the time of declaration, including numbers, strings, and more
                complex expressions.
                <p className="mt-4">
                    For example, consider the following declarations:
                </p>
                <pre className="bg-gray-100 p-4 rounded-md text-darkGray font-mono text-sm mt-2">
                    let a; // Variable 'a' is declared and initialized with the
                    default value of 0{"\n"}
                    let b = 1; // Variable 'b' is declared and initialized with
                    the value 1{"\n"}
                    let c = 'Hello, World!'; // Variable 'c' is a string
                    initialized with text
                </pre>
                <p className="mt-4">
                    By using <Code code="let" />, you can dynamically assign any
                    value to a variable at runtime. Vyzon does not require you
                    to specify the type of the variable explicitly, providing
                    great flexibility and reducing boilerplate code.
                </p>
            </div>

            {/* Dynamic Typing Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 underline underline-offset-4 decoration-wavy">
                Dynamic Typing
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                Vyzon supports **dynamic typing**, meaning that the data type of
                a variable is determined automatically at runtime based on the
                value assigned to it. This allows developers to focus on writing
                clean, readable code without having to explicitly declare types.
                You can freely assign different types of values to the same
                variable throughout your code, and Vyzon will handle the rest.
                <p className="mt-4">
                    For instance, the same variable can hold different types of
                    values:
                </p>
                <pre className="bg-gray-100 p-4 rounded-md text-darkGray font-mono text-sm mt-2">
                    let a = 5; // 'a' is initialized as a number{"\n"}a =
                    'Text'; // Now 'a' holds a string{"\n"}a = true; // 'a' now
                    holds a boolean value
                </pre>
                <p className="mt-4">
                    This dynamic typing system makes Vyzon incredibly versatile
                    and simplifies handling different types of data within your
                    programs. There's no need for typecasting or complex
                    declarations—just use the <Code code="let" /> keyword, and
                    you're ready to go.
                </p>
            </div>

            {/* Data Types Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 underline underline-offset-4 decoration-wavy">
                Data Types
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                Although Vyzon uses dynamic typing, it supports a wide range of
                commonly used data types, giving you the power to handle various
                types of data effectively. The most common data types in Vyzon
                include:
                <ul className="list-disc list-inside my-4">
                    <li>
                        <strong>Strings</strong>: Used to represent sequences of
                        characters, enclosed in single or double quotes.
                    </li>
                    <li>
                        <strong>Numbers</strong>: Can be integers or
                        floating-point numbers, used for calculations and
                        numeric data.
                    </li>
                    <li>
                        <strong>Booleans</strong>: Represent logical values,{" "}
                        <Code code="true" /> or <Code code="false" />.
                    </li>
                    <li>
                        <strong>Null</strong>: Represents an intentional absence
                        of any object value, used to indicate that a variable
                        holds no meaningful data.
                    </li>
                </ul>
                <p className="mt-4">
                    Here are some examples of different data types in action:
                </p>
                <pre className="bg-gray-100 p-4 rounded-md text-darkGray font-mono text-sm mt-2">
                    let a = 'Hello, World!'; // String type{"\n"}
                    let b = 10; // Number type{"\n"}
                    let c = b + (10 * 3); // Number type with a mathematical
                    expression{"\n"}
                    let d = "Ok!"; // String type{"\n"}
                    let e = null; // Null type{"\n"}
                    let f = true; // Boolean type{"\n"}
                    let g = false; // Boolean type
                </pre>
            </div>

            {/* Summary Section */}
            <div className="text-4xl font-bold text-emeraldGreen font-montserrat mb-6 underline underline-offset-4 decoration-wavy">
                Summary
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8">
                Vyzon's simple, dynamic approach to variables and data types
                makes it a flexible and developer-friendly language. By allowing
                variables to change types dynamically and offering robust
                support for common data types, Vyzon enables developers to write
                clean, efficient code with minimal effort.
            </div>
        </div>
    );
};

export default VariablesAndDataTypesContent;
