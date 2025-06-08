import { useState } from "react";
import { CommandMenu } from "./commandMenu";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link, useNavigate } from "react-router-dom";
import { Menu, BookOpenText, Terminal } from "lucide-react"; // Icons for docs/playground

function Navbar({ toggleSidebar }: { toggleSidebar: () => void }) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleInputFocus = () => {
        setOpen(true);
    };

    return (
        <div className="rounded-lg border px-4 py-2 flex items-center justify-between font-roboto">
            {/* Left section */}
            <div className="flex items-center gap-4">
                {/* Mobile sidebar toggle */}
                <div className="md:hidden cursor-pointer" onClick={toggleSidebar}>
                    <Menu className="w-6 h-6" />
                </div>

                {/* Vyzon Logo clickable */}
                <div
                    onClick={() => navigate("/docs/introduction")}
                    className="cursor-pointer font-semibold text-lg"
                >
                    Vyzon
                </div>

                {/* Search input (hidden on xs screens) */}
                <div className="hidden sm:flex w-64 ml-4 border rounded-md items-center pl-4">
                    <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                    <Input
                        placeholder="Type a command or search..."
                        onFocus={handleInputFocus}
                        className="cursor-pointer border-none px-0"
                    />
                </div>
            </div>

            {/* Right section */}
            <div className="flex gap-4 items-center">
                {/* Docs Link - responsive */}
                <Link to="/docs/introduction">
                    <div className="cursor-pointer text-sm hover:underline flex items-center gap-1">
                        <span className="hidden md:inline">Documentation</span>
                        <span className="md:hidden"><BookOpenText className="h-5 w-5" /></span>
                    </div>
                </Link>

                {/* Playground Link - responsive */}
                <Link to="/playground">
                    <div className="cursor-pointer text-sm hover:underline flex items-center gap-1">
                        <span className="hidden md:inline">Playground</span>
                        <span className="md:hidden"><Terminal className="h-5 w-5" /></span>
                    </div>
                </Link>

                {/* GitHub Link */}
                <a
                    href="https://github.com/yash7xm/Vyzon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                >
                    <GitHubLogoIcon className="size-5" />
                </a>
            </div>

            {/* Command Menu */}
            {open && <CommandMenu open={open} setOpen={setOpen} />}
        </div>
    );
}

export default Navbar;
