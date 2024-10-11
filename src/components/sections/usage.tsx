const UsageContent = () => {
    return (
        <div>
            <div className="text-lg font-bold mb-2 text-brightBlue font-montserrat">
                Usage
            </div>
            <div className="text-sm mb-4 text-darkGray font-roboto">
                <div className="text-bold text-brightBlue">
                    Running a Vyzon Script from a File:
                </div>
                <p>
                    Create a new Vyzon file with a .vy extension, e.g.,{" "}
                    <code className="text-darkGray font-roboto">
                        yourfile.vy
                    </code>
                    .
                </p>
                <pre className="bg-gray-100 p-2 text-darkGray font-roboto">
                    bin/vyzon -f yourfile.vy
                </pre>
                <div className="text-bold text-brightBlue">
                    Running an Expression Directly:
                </div>
                <pre className="bg-gray-100 p-2 text-darkGray font-roboto">
                    bin/vyzon -e "write(2 + 2);"
                </pre>
            </div>
        </div>
    );
};

export default UsageContent;
