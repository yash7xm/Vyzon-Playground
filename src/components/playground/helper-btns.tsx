import { Play, Copy, FileDown, Maximize } from "lucide-react";
import { toast } from "sonner";

interface HelperButtonsProps {
    runCode: () => void;
    code: string;
    vertical?: boolean;
    onToggleFullScreen?: () => void;
}

function HelperButtons({ runCode, code, vertical = false, onToggleFullScreen }: HelperButtonsProps) {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            toast.success("Code copied to clipboard!");
        } catch (err) {
            toast.error("Failed to copy code.");
        }
    };

    const handleDownload = () => {
        const blob = new Blob([code], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "code.txt";
        a.click();
        URL.revokeObjectURL(url);
        toast.success("Code downloaded!");
    };

    const buttonClass =
        "flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition";

    return (
        <div
            className={`flex ${
                vertical ? "flex-col gap-4" : "flex-row gap-3"
            } items-center justify-center w-full`}
        >
            <button onClick={runCode} className={buttonClass} title="Run Code">
                <Play size={18} stroke="#1c1c1c" />
            </button>
            <button onClick={handleCopy} className={buttonClass} title="Copy Code">
                <Copy size={18} stroke="#1c1c1c" />
            </button>
            <button onClick={handleDownload} className={buttonClass} title="Download Code">
                <FileDown size={18} stroke="#1c1c1c" />
            </button>
            {onToggleFullScreen && (
                <button onClick={onToggleFullScreen} className={buttonClass} title="Full Screen">
                    <Maximize size={18} stroke="#1c1c1c" />
                </button>
            )}
        </div>
    );
}

export default HelperButtons;
