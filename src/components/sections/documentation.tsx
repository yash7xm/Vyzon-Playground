const DocumentationContent = () => {
    return (
        <div>
            <div className="text-lg font-bold mb-2 text-brightBlue font-montserrat">
                Documentation
            </div>
            <div className="text-sm mb-4 text-darkGray font-roboto">
                <div className="text-bold text-brightBlue">
                    Variable Declarations:
                </div>
                <p>
                    Use the{" "}
                    <code className="text-darkGray font-roboto">let</code>{" "}
                    keyword:
                </p>
                <pre className="bg-gray-100 p-2 text-darkGray font-roboto">
                    let a; // Initialized with 0
                    <br />
                    let b = 1; // Initialized with 1
                </pre>

                <div className="text-bold text-brightBlue">Data Types:</div>
                <pre className="bg-gray-100 p-2 text-darkGray font-roboto">
                    let a = 'Hello, World!';
                    <br />
                    let b = 10;
                    <br />
                    let c = 10 + (10 * 3) + a;
                    <br />
                    let d = "Ok!";
                    <br />
                    let e = null;
                    <br />
                    let f = true;
                    <br />
                    let g = false;
                </pre>
            </div>
        </div>
    );
};

export default DocumentationContent;
