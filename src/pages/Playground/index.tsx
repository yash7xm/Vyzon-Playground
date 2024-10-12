import Navbar from "@/components/navbar";

function Playground() {
    return (
        <div className="w-screen h-screen p-5 flex flex-col gap-6">
            <div className="w-full">
                <Navbar />
            </div>

            <div>Playground</div>
        </div>
    );
}

export default Playground;
