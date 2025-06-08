import { useState } from "react";
import Navbar from "@/components/navbar";
import { PlaygroundResizable } from "@/components/playground/playgroundResizable";

function Playground() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="w-screen h-screen p-5 flex flex-col gap-6">
            <div className="w-full">
                <Navbar toggleSidebar={() => setSidebarOpen(prev => !prev)} />
            </div>

            <div className="w-full h-full overflow-hidden">
                <PlaygroundResizable />
            </div>
        </div>
    );
}

export default Playground;
