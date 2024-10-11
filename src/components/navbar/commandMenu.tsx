import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";

interface CommandMenuProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export function CommandMenu({ open, setOpen }: CommandMenuProps) {
    const documentationLinks = [
        "Introduction",
        "Getting Started",
        "API Reference",
    ];

    const handleNavigate = (doc: string) => {
        const docUrl = `/docs/${doc.replace(/\s+/g, "-").toLowerCase()}`;
        window.location.href = docUrl;
    };

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    {documentationLinks.map((doc, index) => (
                        <CommandItem
                            key={index}
                            onSelect={() => handleNavigate(doc)}
                            className="cursor-pointer"
                        >
                            {doc}
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}
