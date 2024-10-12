import Code from "../utils/code";
import { Separator } from "../ui/separator";

const ModulesContent = () => {
    return (
        <div className="p-6">
            {/* Modules Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Modules: Organizing Code in Vyzon
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                Modules in Vyzon provide a structured way to organize and reuse
                code by grouping related functions or classes together. By
                encapsulating functionality into modules, developers can enhance
                code readability, maintainability, and reusability across
                different parts of an application. Let’s explore how to define
                and use modules in Vyzon.
            </div>
            <Separator className="mb-6" />

            {/* Defining a Module Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Defining a Module
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                You can define a module using the <Code code="module" /> keyword
                followed by the module name. Inside the module, you can define
                functions or classes. Here’s an example of a{" "}
                <Code code="Math" /> module that includes a function to compute
                the absolute value:
                <pre className="bg-gray-100 p-4 rounded-md text-darkGray font-mono text-sm mt-2">
                    module Math &#123;{"\n"}
                    {"  "}def Abs(x) &#123;{"\n"}
                    {"    "}if (x) &#123;{"\n"}
                    {"      "}return -x;{"\n"}
                    {"    &#125;"} else &#123;{"\n"}
                    {"      "}return x;{"\n"}
                    {"    &#125;"}
                    {"\n"}
                    {"  &#125;"}
                    {"\n"}
                    &#125;
                </pre>
                <p className="mt-4">
                    In this example, the <Code code="Math" /> module defines a
                    function called <Code code="Abs" /> that takes a number{" "}
                    <Code code="x" /> as input. If <Code code="x" /> is
                    negative, it returns its negation; otherwise, it returns{" "}
                    <Code code="x" /> itself.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Using a Function from a Module Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Using a Function from a Module
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                To use a function from a module, simply call it using the module
                name followed by the function name. Here’s how to call the{" "}
                <Code code="Abs" /> function from the <Code code="Math" />{" "}
                module:
                <pre className="bg-gray-100 p-4 rounded-md text-darkGray font-mono text-sm mt-2">
                    write(Math.Abs(-10)); // Output: 10
                </pre>
                <p className="mt-4">
                    In this example, we call the <Code code="Abs" /> function
                    from the <Code code="Math" /> module with the argument{" "}
                    <Code code="-10" />. The function returns <Code code="10" />
                    , which is then printed to the output.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Importing Modules Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Importing Modules
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                Vyzon allows you to import modules into your script using the{" "}
                <Code code="import" /> statement. This enables you to reuse code
                from external modules seamlessly. Here’s how to import and use
                the <Code code="Math" /> module:
                <pre className="bg-gray-100 p-4 rounded-md text-darkGray font-mono text-sm mt-2">
                    import Math;{"\n"}
                    write(Math.Abs(-10)); // Output: 10
                </pre>
                <p className="mt-4">
                    In this example, we import the <Code code="Math" /> module
                    and call the <Code code="Abs" /> function with the argument{" "}
                    <Code code="-10" />. The output remains the same,
                    demonstrating how modules facilitate code reuse across
                    different scripts.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Summary Section */}
            <div className="text-4xl font-bold text-emeraldGreen font-montserrat mb-6 ">
                Summary
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8">
                Modules in Vyzon play a crucial role in organizing and reusing
                code, allowing developers to encapsulate related functions and
                classes into cohesive units. By defining modules with the{" "}
                <Code code="module" /> keyword and utilizing the{" "}
                <Code code="import" /> statement, you can streamline code
                management and enhance the maintainability of your applications.
                This modular approach not only promotes code reusability but
                also improves overall application architecture, making it easier
                to manage larger codebases.
            </div>
        </div>
    );
};

export default ModulesContent;
