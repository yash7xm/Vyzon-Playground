import { useState } from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Content from "@/components/contents";

function Home() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="w-screen h-screen p-5 flex flex-col gap-6 relative">
            <div className="w-full">
                <Navbar toggleSidebar={() => setSidebarOpen(prev => !prev)} />
            </div>

            {/* Mobile overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <div className="w-full flex h-full gap-8 overflow-hidden">
                {/* Sidebar */}
                <div
                    className={`h-full rounded-md bg-white shadow-lg md:shadow-none z-40 transition-transform duration-300 ease-in-out
                        md:static md:translate-x-0 absolute left-0 w-2/3 md:w-1/4
                        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                    `}
                >
                    <Sidebar closeSidebar={() => setSidebarOpen(false)} />
                </div>

                {/* Main Content */}
                <div className="w-full md:w-3/4 h-full">
                    <Content />
                </div>
            </div>
        </div>
    );
}

export default Home;
