const ModulesContent = () => {
    return (
        <div>
            <div className="text-lg font-bold mb-2">Modules</div>
            <div className="text-sm mb-4">
                <p>Modules in Vyzon allow you to organize and reuse code:</p>
                <pre className="bg-gray-100 p-2">
                    module Math {"{"}
                    <br />
                    &nbsp;&nbsp;def Abs(x) {"{"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;if (x) {"{"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return -x;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;else {"{"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return x;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                    <br />
                    {"}"}
                </pre>
                <p>To use a function from the Math module:</p>
                <pre className="bg-gray-100 p-2">
                    write(Math.Abs(-10)); // Output: 10
                </pre>
            </div>
        </div>
    );
};

export default ModulesContent;
