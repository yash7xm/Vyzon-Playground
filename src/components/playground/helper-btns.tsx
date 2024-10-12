import { PlayIcon, CopyIcon, DownloadIcon } from "@radix-ui/react-icons";

function HelperButtons() {
    return (
        <div className="flex justify-around p-4 w-full">
            <button className="text-sm flex items-center shadow-lg bg-purple-500 text-white rounded-md px-4 py-2 hover:bg-purple-700 transition duration-300">
                <PlayIcon className="mr-1" />
                Run
            </button>
            <button className="text-sm flex items-center shadow-lg bg-purple-500 text-white rounded-md px-4 py-2 hover:bg-purple-700 transition duration-300">
                <CopyIcon className="mr-2" />
                Copy Code
            </button>
            <button className="test-sm flex items-center shadow-lg bg-purple-500 text-white rounded-md px-4 py-2 hover:bg-purple-700 transition duration-300">
                <DownloadIcon className="mr-2" />
                Download
            </button>
        </div>
    );
}

export default HelperButtons;
