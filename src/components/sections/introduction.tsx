import { Separator } from "../ui/separator";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const IntroductionContent = () => {
    return (
        <div className="p-6 rounded-lg shadow-lg">
            {/* Introduction Heading */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6">
                Introduction
            </div>

            {/* Overview Section */}
            <div className="mb-6">
                <div className="text-2xl font-bold text-brightBlue font-montserrat mb-4">
                    Overview of Vyzon:
                </div>
                <div className="text-lg text-darkGray font-roboto leading-8">
                    Vyzon is a modern programming language that combines the
                    elegance of Python, the flexibility of JavaScript, and the
                    expressiveness of Ruby. It emphasizes readability and
                    simplicity while delivering powerful functionality suitable
                    for both novice and experienced developers.
                </div>
            </div>

            <Separator className="my-4" />

            {/* Key Features Section */}
            <div className="mb-6">
                <div className="text-2xl font-bold text-brightBlue font-roboto mb-4">
                    Key Features:
                </div>
                <ul className="list-disc pl-6 text-lg text-darkGray font-roboto leading-8">
                    <li>
                        Simple and intuitive syntax, making it easy to learn.
                    </li>
                    <li>
                        Strong support for Object-Oriented Programming (OOP).
                    </li>
                    <li>Rich set of built-in functions and modules.</li>
                    <li>Flexible data types and dynamic typing.</li>
                </ul>
            </div>

            <Separator className="my-4" />

            {/* About the Author Section */}
            <div className="mb-6">
                <div className="text-2xl font-bold text-brightBlue font-roboto mb-4">
                    About the Author:
                </div>
                <div className="text-lg text-darkGray font-roboto leading-8">
                    The Vyzon programming language is created by
                    <strong className="text-emeraldGreen"> Yash Poonia </strong>
                    . You can connect with him on social media:
                    <ul className="list-disc pl-6">
                        <li>
                            <a
                                href="https://x.com/Yash_Poonia_"
                                className="text-brightBlue underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/yash7xm"
                                className="text-brightBlue underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/yash-poonia-00326022b/"
                                className="text-brightBlue underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <Separator className="my-4" />

            {/* Code Example Section */}
            <div className="mb-6">
                <div className="text-2xl font-bold text-brightBlue font-roboto mb-4">
                    Code Example:
                </div>
                <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    className="mt-2 shadow-lg rounded-lg"
                >
                    {`def factorial(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

let result = factorial(5);
write(result);`}
                </SyntaxHighlighter>
            </div>

            <Separator className="my-4" />

            {/* Why Choose Vyzon Section */}
            <div className="mb-6">
                <div className="text-2xl font-bold text-brightBlue font-roboto mb-4">
                    Why Choose Vyzon?
                </div>
                <div className="text-lg text-darkGray font-roboto leading-8">
                    Vyzon is designed for developers who want the best of all
                    worlds. With its clean syntax and powerful features, it
                    allows you to focus on writing great code without getting
                    bogged down by complexity. Whether you're a beginner looking
                    to learn programming or an experienced developer seeking a
                    versatile language, Vyzon has something to offer.
                </div>
            </div>

            <Separator className="my-4" />

            {/* Comparison Section */}
            <div className="mb-6">
                <div className="text-2xl font-bold text-brightBlue font-roboto mb-4">
                    Comparison with Other Languages:
                </div>
                <div className="text-lg text-darkGray font-roboto leading-8">
                    <p>
                        <strong>Python:</strong> Vyzon shares Python's
                        readability and adds flexibility for both functional and
                        OOP programming.
                    </p>
                    <p>
                        <strong>JavaScript:</strong> Like JavaScript, Vyzon can
                        be used as a dynamically typed language.
                    </p>
                    <p>
                        <strong>Ruby:</strong> Vyzon incorporates Ruby's
                        expressiveness while maintaining a focus on simplicity
                        and performance.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IntroductionContent;
