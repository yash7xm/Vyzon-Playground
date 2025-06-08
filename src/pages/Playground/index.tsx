import Navbar from "@/components/navbar";
import { PlaygroundResizable } from "@/components/playground/playgroundResizable";

function Playground() {
    return (
        <div className="w-screen h-screen p-5 flex flex-col gap-6">
            <div className="w-full">
                <Navbar toggleSidebar={() => {}} />
            </div>

            <div className="w-full h-full overflow-hidden">
                <PlaygroundResizable />
            </div>
        </div>
    );
}

export default Playground;
