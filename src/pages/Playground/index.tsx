import Navbar from "@/components/navbar";
import { PlaygroundResizable } from "@/components/playground/playgroundResizable";

function Playground() {
    return (
        <div className="w-screen h-screen p-5 flex flex-col gap-6">
            <div className="w-full">
                <Navbar />
            </div>

            <div className="w-full h-full">
                <PlaygroundResizable />
            </div>
        </div>
    );
}

export default Playground;
