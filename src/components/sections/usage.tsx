const UsageContent = () => {
    return (
        <div>
            <div className="text-lg font-bold mb-2">Usage</div>
            <div className="text-sm mb-4">
                <div className="text-bold">
                    Running a Vyzon Script from a File:
                </div>
                <p>
                    Create a new Vyzon file with a .vy extension, e.g.,{" "}
                    <code>yourfile.vy</code>.
                </p>
                <pre className="bg-gray-100 p-2">bin/vyzon -f yourfile.vy</pre>
                <div className="text-bold">Running an Expression Directly:</div>
                <pre className="bg-gray-100 p-2">
                    bin/vyzon -e "write(2 + 2);"
                </pre>
            </div>
        </div>
    );
};

export default UsageContent;
