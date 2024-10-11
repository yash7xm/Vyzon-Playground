import { Separator } from "../ui/separator";

const IntroductionContent = () => {
    return (
        <div className="p-6  rounded-lg shadow-lg">
            {/* Introduction Heading */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 underline underline-offset-4 decoration-wavy">
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

            {/* Use Cases Section */}
            <div className="mb-6">
                <div className="text-2xl font-bold text-brightBlue font-roboto mb-4">
                    Use Cases:
                </div>
                <ul className="list-disc pl-6 text-lg text-darkGray font-roboto leading-8">
                    <li>Web development with frontend frameworks.</li>
                    <li>Scripting and automation tasks.</li>
                    <li>Data analysis and manipulation.</li>
                    <li>Game development and prototyping.</li>
                    <li>Building APIs and backend services.</li>
                </ul>
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
