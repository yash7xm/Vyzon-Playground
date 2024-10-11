import { useState } from "react";
import { CommandMenu } from "./commandMenu";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

function Navbar() {
    const [open, setOpen] = useState(false);

    const handleInputFocus = () => {
        setOpen(true);
    };

    return (
        <div className="rounded-lg border px-4 py-2 flex items-center">
            <div className="flex items-center">
                <div>Vyzon</div>

                <div className="w-64 ml-16 border flex rounded-md items-center pl-4">
                    <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                    <Input
                        placeholder="Type a command or search..."
                        onFocus={handleInputFocus}
                        className="cursor-pointer border-none px-0"
                    />
                </div>
            </div>

            {open && <CommandMenu open={open} setOpen={setOpen} />}
        </div>
    );
}

export default Navbar;
