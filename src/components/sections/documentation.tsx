const DocumentationContent = () => {
    return (
        <div>
            <div className="text-lg font-bold mb-2">Documentation</div>
            <div className="text-sm mb-4">
                <div className="text-bold">Variable Declarations:</div>
                <p>
                    Use the <code>let</code> keyword:
                </p>
                <pre className="bg-gray-100 p-2">
                    let a; // Initialized with 0
                    <br />
                    let b = 1; // Initialized with 1
                </pre>

                <div className="text-bold">Data Types:</div>
                <pre className="bg-gray-100 p-2">
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
