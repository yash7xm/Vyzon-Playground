import Code from "../utils/code";
import { Separator } from "../ui/separator";

const ConditionalsContent = () => {
    return (
        <div className="p-6">
            {/* Conditionals Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Conditionals: Decision Making in Vyzon
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                In any programming language, controlling the flow of execution
                based on conditions is essential, and Vyzon provides robust
                support for this through <Code code="if" />,{" "}
                <Code code="elif" />, and <Code code="else" /> statements. These
                constructs allow you to branch your code based on certain
                conditions, ensuring that different sections of code are
                executed when specific criteria are met.
                <p className="mt-4">
                    Let’s break down how conditional statements work in Vyzon.
                    You can evaluate a condition and execute different blocks of
                    code depending on whether the condition is true or false.
                    Here’s an example:
                </p>
                <pre className="bg-gray-100 p-4 rounded-md text-darkGray font-mono text-sm mt-2">
                    let x = 10;{"\n\n"}
                    if (x &gt; 15) &#123;{"\n"}
                    {"  "}write("x is greater than 15");{"\n"}
                    &#125; elif (x &gt; 5) &#123;{"\n"}
                    {"  "}write("x is greater than 5 but not greater than 15");
                    {"\n"}
                    &#125; else &#123;{"\n"}
                    {"  "}write("x is not greater than 5");{"\n"}
                    &#125;
                </pre>
            </div>
            <Separator className="mb-6" />

            {/* if Statement Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                The <Code code="if" /> Statement
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                The <Code code="if" /> statement is the core of decision-making
                in Vyzon. It checks if a condition evaluates to true and, if so,
                executes the corresponding block of code. If the condition is
                false, the program skips that block. This allows developers to
                execute code only when certain conditions are met, making their
                programs more flexible.
                <p className="mt-4">
                    In the example above, if <Code code="x" /> is greater than
                    15, the program will output{" "}
                    <Code code='"x is greater than 15"' />. If not, it moves to
                    the next condition.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* elif Statement Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                The <Code code="elif" /> Statement
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                After the <Code code="if" /> statement, you can use one or more{" "}
                <Code code="elif" /> (short for "else if") statements to check
                additional conditions. These are only evaluated if the previous{" "}
                <Code code="if" /> or <Code code="elif" /> conditions were
                false. This is helpful when you want to test multiple conditions
                in sequence.
                <p className="mt-4">
                    In the example, if <Code code="x" /> is not greater than 15
                    but is greater than 5, the program outputs{" "}
                    <Code code='"x is greater than 5 but not greater than 15"' />
                    . This statement provides more nuanced decision-making in
                    your code.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* else Statement Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                The <Code code="else" /> Statement
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                The <Code code="else" /> statement works as a fallback. If none
                of the preceding <Code code="if" /> or <Code code="elif" />{" "}
                conditions are met, the <Code code="else" /> block will be
                executed. It ensures that one block of code runs even when no
                conditions are true.
                <p className="mt-4">
                    In the example, if <Code code="x" /> is neither greater than
                    15 nor greater than 5, the program will output{" "}
                    <Code code='"x is not greater than 5"' />. This guarantees
                    that one of the blocks of code will always run.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Practical Use Cases Section */}
            <div className="text-4xl font-bold text-emeraldGreen font-montserrat mb-6 ">
                Practical Use Cases
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                The conditional statements in Vyzon are versatile and can be
                used in a variety of scenarios:
                <ul className="list-disc my-4">
                    <li>
                        <strong>Input Validation</strong>: Use{" "}
                        <Code code="if" />, <Code code="elif" />, and{" "}
                        <Code code="else" /> to validate user inputs or other
                        conditions before processing data.
                    </li>
                    <li>
                        <strong>Dynamic Program Flow</strong>: Direct the flow
                        of your program based on calculated values or external
                        data. This is especially useful in functions or loops.
                    </li>
                    <li>
                        <strong>Error Handling</strong>: Ensure specific actions
                        are taken when certain conditions fail, using{" "}
                        <Code code="else" /> blocks as fallbacks.
                    </li>
                </ul>
                <p className="mt-4">
                    These conditionals allow you to build more intelligent,
                    adaptable programs that can react to changing inputs or
                    scenarios.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Summary Section */}
            <div className="text-4xl font-bold text-emeraldGreen font-montserrat mb-6 ">
                Summary
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8">
                Vyzon’s conditional statements give you the power to control the
                flow of your code based on dynamic conditions. With{" "}
                <Code code="if" />, <Code code="elif" />, and{" "}
                <Code code="else" />, you can efficiently create branches in
                your program to handle different cases and ensure your code
                behaves exactly as expected, depending on the input or logic.
            </div>
        </div>
    );
};

export default ConditionalsContent;
