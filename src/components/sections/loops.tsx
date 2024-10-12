import Code from "../utils/code";
import { Separator } from "../ui/separator";

const LoopsContent = () => {
    return (
        <div className="p-6">
            {/* Loops Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Loops: Repeating Code in Vyzon
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                Loops are essential tools in programming, allowing you to run a
                block of code multiple times based on certain conditions. Vyzon
                supports three types of loops: <Code code="for" />,{" "}
                <Code code="while" />, and <Code code="do-while" />. Each type
                of loop has specific use cases that make them suitable for
                different scenarios, helping you control the flow of your
                program by repeating code as needed. Let's explore these loop
                types with examples.
            </div>
            <Separator className="mb-6" />

            {/* for Loop Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                The <Code code="for" /> Loop
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                The <Code code="for" /> loop is ideal when you know in advance
                how many times you need to repeat a block of code. It consists
                of three parts: initialization, condition, and iteration. This
                structure allows for precise control of how many iterations are
                performed. Here's an example:
                <pre className="bg-gray-100 p-4 rounded-md text-darkGray font-mono text-sm mt-2">
                    write("Using the for loop:");{"\n\n"}
                    for (let i=0; i &lt; 10; i += 1) &#123;{"\n"}
                    {"  "}write("Current value of i: ", i);{"\n"}
                    &#125;
                </pre>
                <p className="mt-4">
                    In this example, the loop starts with <Code code="i = 0" />,
                    and it runs as long as <Code code="i < 10" />. After each
                    iteration, <Code code="i" /> is incremented by 1. This loop
                    executes the code block 10 times, printing the current value
                    of <Code code="i" /> with each iteration.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* while Loop Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                The <Code code="while" /> Loop
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                The <Code code="while" /> loop executes a block of code as long
                as a specified condition remains true. Unlike the{" "}
                <Code code="for" /> loop, the number of iterations is not
                predetermined. Instead, it continues until the condition becomes
                false. Here's an example:
                <pre className="bg-gray-100 p-4 rounded-md text-darkGray font-mono text-sm mt-2">
                    write("Using the while loop:");{"\n\n"}
                    let j = 0;{"\n"}
                    while (j &lt; 5) &#123;{"\n"}
                    {"  "}write("Current value of j: ", j);{"\n"}
                    {"  "}j = j + 1;{"\n"}
                    &#125;
                </pre>
                <p className="mt-4">
                    In this example, the loop runs as long as <Code code="j" />{" "}
                    is less than 5. The variable <Code code="j" /> starts at 0
                    and increments by 1 after each iteration, repeating the code
                    block until <Code code="j" /> reaches 5.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* do-while Loop Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                The <Code code="do-while" /> Loop
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                The <Code code="do-while" /> loop is similar to the{" "}
                <Code code="while" /> loop, but with a key difference: it always
                executes the code block at least once, regardless of whether the
                condition is true. The condition is checked after the first
                iteration. Here's an example:
                <pre className="bg-gray-100 p-4 rounded-md text-darkGray font-mono text-sm mt-2">
                    write("Using the do-while loop:");{"\n\n"}
                    let k = 0;{"\n"}
                    do &#123;{"\n"}
                    {"  "}write("Current value of k: ", k);{"\n"}
                    {"  "}k = k + 1;{"\n"}
                    &#125; while (k &lt; 5);
                </pre>
                <p className="mt-4">
                    In this example, the code inside the loop is executed first,
                    and only then is the condition <Code code="k < 5" />{" "}
                    checked. As long as this condition is true, the loop
                    continues. In this case, the loop prints the value of{" "}
                    <Code code="k" /> from 0 to 4.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Practical Use Cases Section */}
            <div className="text-4xl font-bold text-emeraldGreen font-montserrat mb-6 ">
                Practical Use Cases
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                The various types of loops in Vyzon serve different purposes and
                can be used in a wide variety of scenarios:
                <ul className="list-disc my-4">
                    <li>
                        <strong>Iterating Over Arrays or Lists</strong>: Use the{" "}
                        <Code code="for" /> loop when you need to process each
                        element in an array or list a specific number of times.
                    </li>
                    <li>
                        <strong>Waiting for Conditions</strong>: The{" "}
                        <Code code="while" /> loop is ideal when you want to
                        wait for a specific condition to be met, such as waiting
                        for user input or data availability.
                    </li>
                    <li>
                        <strong>Guaranteed Single Execution</strong>: The{" "}
                        <Code code="do-while" /> loop is useful when you need to
                        ensure that a block of code runs at least once, such as
                        in situations where initialization or pre-processing
                        must occur.
                    </li>
                </ul>
                <p className="mt-4">
                    With these loops, you can control repetitive tasks and build
                    more dynamic and efficient programs in Vyzon.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Summary Section */}
            <div className="text-4xl font-bold text-emeraldGreen font-montserrat mb-6 ">
                Summary
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8">
                Loops are an integral part of programming in Vyzon. Whether you
                need to execute a block of code a fixed number of times using a{" "}
                <Code code="for" /> loop, run a block while a condition is true
                using a <Code code="while" /> loop, or guarantee at least one
                execution with a <Code code="do-while" /> loop, Vyzon gives you
                the flexibility to manage repetitive tasks efficiently.
            </div>
        </div>
    );
};

export default LoopsContent;
