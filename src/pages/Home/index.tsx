import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Content from "@/components/contents";

function Home() {
    return (
        <div className="w-screen h-screen p-5 flex flex-col gap-6">
            <div className="w-full">
                <Navbar />
            </div>
            <div className="w-full flex h-full gap-8 overflow-hidden">
                <div className="w-1/4 h-full">
                    <Sidebar />
                </div>
                <div className="w-3/4 h-full">
                    <Content />
                </div>
            </div>
        </div>
    );
}

export default Home;
