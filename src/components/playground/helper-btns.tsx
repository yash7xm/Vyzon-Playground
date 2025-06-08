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

    const baseClasses =
        "text-sm flex justify-center gap-2 text-white px-4 py-2 transition w-full";

    return (
        <div
            className={`flex ${vertical ? "flex-col gap-4" : "flex-row gap-3"} w-full`}
        >
            <button onClick={runCode} className={baseClasses}>
                <Play stroke="#1c1c1c"/>
            </button>
            <button onClick={handleCopy} className={baseClasses}>
                <Copy stroke="#1c1c1c"/>
            </button>
            <button onClick={handleDownload} className={baseClasses}>
               <FileDown stroke="#1c1c1c"/>
            </button>
            {onToggleFullScreen && (
                <button onClick={onToggleFullScreen} className={baseClasses}>
                    <Maximize stroke="#1c1c1c"/>
                </button>
            )}
        </div>
    );
}

export default HelperButtons;
