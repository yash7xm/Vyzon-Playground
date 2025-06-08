import { useState } from "react";
import { CommandMenu } from "./commandMenu";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react"; // You can replace this with your own icon

function Navbar({ toggleSidebar }: { toggleSidebar: () => void }) {
    const [open, setOpen] = useState(false);

    const handleInputFocus = () => {
        setOpen(true);
    };

    return (
        <div className="rounded-lg border px-4 py-2 flex items-center justify-between font-roboto">
            <div className="flex items-center gap-4">
                <div className="md:hidden cursor-pointer" onClick={toggleSidebar}>
                    <Menu className="w-6 h-6" />
                </div>

                <div className="cursor-pointer">Vyzon</div>

                {/* Search input (hide on very small screens) */}
                <div className="hidden sm:flex w-64 ml-4 border rounded-md items-center pl-4">
                    <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                    <Input
                        placeholder="Type a command or search..."
                        onFocus={handleInputFocus}
                        className="cursor-pointer border-none px-0"
                    />
                </div>
            </div>

            <div className="flex gap-4 items-center">
                <Link to="/docs/introduction">
                    <div className="cursor-pointer text-sm hover:underline">Documentation</div>
                </Link>
                <Link to="/playground">
                    <div className="cursor-pointer text-sm hover:underline">Playground</div>
                </Link>
                <a
                    href="https://github.com/yash7xm/Vyzon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                >
                    <GitHubLogoIcon className="size-5" />
                </a>
            </div>

            {open && <CommandMenu open={open} setOpen={setOpen} />}
        </div>
    );
}

export default Navbar;
