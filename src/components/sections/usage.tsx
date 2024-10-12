const UsageContent = () => {
    return (
        <div className="p-6">
            {/* Usage Heading */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 underline underline-offset-4 decoration-wavy">
                Usage
            </div>

            {/* Usage Instructions */}
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                {/* Running a Vyzon Script */}
                <div className="text-xl font-bold text-brightBlue mb-4">
                    Running a Vyzon Script from a File:
                </div>
                <p className="mb-4">
                    Create a new Vyzon file with a{" "}
                    <code className="font-mono">.vy</code> extension, e.g.,{" "}
                    <code className="font-mono text-darkGray">yourfile.vy</code>
                    .
                </p>
                <pre className="bg-gray-100 p-4 rounded-md text-darkGray font-mono text-sm">
                    $ bin/vyzon -f yourfile.vy
                </pre>

                {/* Running an Expression Directly */}
                <div className="text-xl font-bold text-brightBlue mt-6 mb-4">
                    Running an Expression Directly:
                </div>
                <pre className="bg-gray-100 p-4 rounded-md text-darkGray font-mono text-sm">
                    $ bin/vyzon -e "write(2 + 2);"
                </pre>
            </div>
        </div>
    );
};

export default UsageContent;
