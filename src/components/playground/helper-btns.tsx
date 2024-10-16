import { PlayIcon, CopyIcon, DownloadIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";

interface HelperButtonsProps {
    runCode: () => void;
    code: string;
}

function HelperButtons({ runCode, code }: HelperButtonsProps) {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            toast.success("Code copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy: ", err);
            toast.error("Failed to copy code.");
        }
    };

    const handleDownload = () => {
        const blob = new Blob([code], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "code.txt";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        toast.success("Code downloaded!");
    };

    return (
        <div className="flex justify-around p-4 w-full">
            <button
                onClick={runCode}
                className="text-sm flex items-center shadow-lg bg-purple-500 text-white rounded-md px-4 py-2 hover:bg-purple-700 transition duration-300"
            >
                <PlayIcon className="mr-1" />
                Run
            </button>
            <button
                onClick={handleCopy}
                className="text-sm flex items-center shadow-lg bg-purple-500 text-white rounded-md px-4 py-2 hover:bg-purple-700 transition duration-300"
            >
                <CopyIcon className="mr-2" />
                Copy Code
            </button>
            <button
                onClick={handleDownload}
                className="text-sm flex items-center shadow-lg bg-purple-500 text-white rounded-md px-4 py-2 hover:bg-purple-700 transition duration-300"
            >
                <DownloadIcon className="mr-2" />
                Download
            </button>
        </div>
    );
}

export default HelperButtons;
