type CodeProps = {
    code: string;
};

function Code({ code }: CodeProps) {
    return (
        <code className="font-mono text-red bg-gray-100 p-1 rounded-md">
            {code}
        </code>
    );
}

export default Code;
