const IntroductionContent = () => {
    return (
        <div>
            <div className="text-lg font-bold mb-2">Introduction</div>
            <div>
                <div className="text-bold">Overview of Vyzon:</div>
                <div className="text-sm mb-4">
                    Vyzon is a modern programming language that combines the
                    elegance of Python, the flexibility of JavaScript, and the
                    expressiveness of Ruby. It emphasizes readability and
                    simplicity while delivering powerful functionality suitable
                    for both novice and experienced developers.
                </div>
                <div className="text-bold">Key Features:</div>
                <ul className="list-disc list-inside text-sm mb-4">
                    <li>
                        Simple and intuitive syntax, making it easy to learn.
                    </li>
                    <li>
                        Strong support for Object-Oriented Programming (OOP).
                    </li>
                    <li>Rich set of built-in functions and modules.</li>
                    <li>Flexible data types and dynamic typing.</li>
                    <li>Robust error handling and debugging tools.</li>
                </ul>
                <div className="text-bold">Use Cases:</div>
                <div className="text-sm mb-4">
                    Vyzon is suitable for a variety of applications, including:
                    <ul className="list-disc list-inside">
                        <li>Web development with frontend frameworks.</li>
                        <li>Scripting and automation tasks.</li>
                        <li>Data analysis and manipulation.</li>
                        <li>Game development and prototyping.</li>
                        <li>Building APIs and backend services.</li>
                    </ul>
                </div>
                <div className="text-bold">Why Choose Vyzon?</div>
                <div className="text-sm mb-4">
                    Vyzon is designed for developers who want the best of all
                    worlds. With its clean syntax and powerful features, it
                    allows you to focus on writing great code without getting
                    bogged down by complexity. Whether you are a beginner
                    looking to learn programming or an experienced developer
                    seeking a versatile language, Vyzon has something to offer.
                </div>
                <div className="text-bold">
                    Comparison with Other Languages:
                </div>
                <div className="text-sm mb-4">
                    - **Python:** Vyzon shares Python's readability but adds
                    flexibility for web development and OOP.
                    <br />
                    - **JavaScript:** Like JavaScript, Vyzon can be used for
                    both client-side and server-side development, but with a
                    more structured approach.
                    <br />- **Ruby:** Vyzon incorporates Ruby's expressiveness
                    while maintaining a focus on simplicity and performance.
                </div>
            </div>
        </div>
    );
};

export default IntroductionContent;
