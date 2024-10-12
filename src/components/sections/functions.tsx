import Code from "../utils/code";
import { Separator } from "../ui/separator";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const FunctionsContent = () => {
    return (
        <div className="p-6">
            {/* Functions Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Functions: Reusable Code Blocks in Vyzon
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                Functions in Vyzon allow you to group code into reusable blocks,
                making your programs more modular, organized, and easier to
                maintain. You can define a function once, and then call it
                multiple times from different parts of your program. Functions
                can take inputs (parameters) and return outputs (values). Let's
                explore how to declare and use functions in Vyzon.
            </div>
            <Separator className="mb-6" />

            {/* Function Declaration Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Declaring a Function
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                In Vyzon, functions are declared using the <Code code="def" />{" "}
                keyword, followed by the function name, a list of parameters (if
                any) enclosed in parentheses, and the function body wrapped in
                curly braces. The function body contains the code that will be
                executed when the function is called. Here's an example of a
                function that takes a parameter and prints a greeting message:
                <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    className="mt-2 shadow-lg rounded-lg"
                >
                    {`def greet(name) { 
  write("Hello, " + name + "!");
}`}
                </SyntaxHighlighter>
                <p className="mt-4">
                    In this example, the function <Code code="greet" /> takes
                    one parameter <Code code="name" /> and uses it to construct
                    a greeting message. The function body contains a call to{" "}
                    <Code code="write" /> to output the message. The function
                    itself does not return a value in this case, but simply
                    executes the code within its body.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Calling a Function Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Calling a Function
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                To execute the code inside a function, you need to "call" it.
                This is done by writing the function's name followed by
                parentheses. If the function has parameters, you pass the
                corresponding arguments inside the parentheses. Here's how to
                call the <Code code="greet" /> function we declared earlier:
                <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    className="mt-2 shadow-lg rounded-lg"
                >
                    {`greet("Yash"); // Calls the greet function with "Yash" as an argument`}
                </SyntaxHighlighter>
                <p className="mt-4">
                    In this example, the function <Code code="greet" /> is
                    called with the argument <Code code="Yash" />, which is
                    passed to the <Code code="name" /> parameter. The function
                    will then execute and print the message "Hello, Yash!" to
                    the console.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Functions with Return Values Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Functions with Return Values
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                Functions in Vyzon can also return values using the{" "}
                <Code code="return" /> keyword. When a function returns a value,
                you can use that value in other parts of your program, such as
                storing it in a variable or using it in a calculation. Here's an
                example of a function that adds two numbers and returns the
                result:
                <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    className="mt-2 shadow-lg rounded-lg"
                >
                    {`def add(a, b) { 
  return a + b; 
}

let result = add(5, 3); 
write("The result is: ", result);`}
                </SyntaxHighlighter>
                <p className="mt-4">
                    In this example, the function <Code code="add" /> takes two
                    parameters, <Code code="a" /> and <Code code="b" />, adds
                    them together, and returns the result. The return value is
                    then stored in the variable <Code code="result" />, which is
                    used in the call to <Code code="write" /> to print the
                    message "The result is: 8".
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Functions with Multiple Parameters Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Functions with Multiple Parameters
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                Functions can take more than one parameter, allowing you to pass
                multiple values into the function. This is useful when you need
                to perform operations on several inputs. Here's an example of a
                function that takes two parameters and prints a personalized
                message:
                <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    className="mt-2 shadow-lg rounded-lg"
                >
                    {`def personalizedGreet(name, age) { 
  write("Hello, " + name + "! You are " + age + " years old."); 
}

personalizedGreet("Yash", 21); // Calls the function with name "Yash" and age 21`}
                </SyntaxHighlighter>
                <p className="mt-4">
                    In this example, the function{" "}
                    <Code code="personalizedGreet" /> takes two parameters:{" "}
                    <Code code="name" /> and <Code code="age" />. The function
                    prints a message using both values, resulting in "Hello,
                    Yash! You are 21 years old.".
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Practical Use Cases Section */}
            <div className="text-4xl font-bold text-emeraldGreen font-montserrat mb-6 ">
                Practical Use Cases
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                Functions are highly versatile and are used in a wide range of
                scenarios in Vyzon:
                <ul className="list-disc my-4">
                    <li>
                        <strong>Code Reusability</strong>: By defining
                        functions, you can reuse the same block of code multiple
                        times throughout your program, reducing redundancy.
                    </li>
                    <li>
                        <strong>Modularity</strong>: Functions make your code
                        more modular, breaking it into smaller, manageable
                        chunks that are easier to read, maintain, and debug.
                    </li>
                    <li>
                        <strong>Parameterization</strong>: Functions allow you
                        to pass different arguments, making the same function
                        applicable to various data sets.
                    </li>
                </ul>
            </div>
            <Separator className="mb-6" />

            {/* Summary Section */}
            <div className="text-4xl font-bold text-emeraldGreen font-montserrat mb-6 ">
                Summary
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8">
                Functions in Vyzon are powerful tools for creating reusable and
                modular code. Whether you're writing a simple function that
                prints a message, or a more complex one that returns a
                calculated result, functions help you organize and streamline
                your programs. By using parameters and return values, you can
                create flexible functions that handle a wide variety of tasks.
            </div>
        </div>
    );
};

export default FunctionsContent;
