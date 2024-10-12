import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Link } from "react-router-dom";
import { documentationLinks } from "../utils/info";

interface CommandMenuProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export function CommandMenu({ open, setOpen }: CommandMenuProps) {
    const handleNavigate = () => {
        setOpen(false);
    };

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    {documentationLinks.map((doc, index) => {
                        const docUrl = `/docs/${doc
                            .replace(/\s+/g, "")
                            .toLowerCase()}`;
                        return (
                            <Link
                                to={docUrl}
                                key={index}
                                onClick={() => handleNavigate()}
                            >
                                <CommandItem className="cursor-pointer">
                                    {doc}
                                </CommandItem>
                            </Link>
                        );
                    })}
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}
