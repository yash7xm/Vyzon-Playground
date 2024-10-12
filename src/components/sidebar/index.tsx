import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

function Sidebar() {
    const documentationLinks = [
        "Introduction",
        "Getting Started",
        "Usage",
        "Variables and DataTypes",
        "Build Ins",
        "Conditionals",
        "Loops",
        "Functions",
        "Modules",
        "Documentation",
    ];

    return (
        <ScrollArea className="w-full h-full border py-4 px-6 rounded-md">
            <h4 className="mb-8 text-sm font-medium leading-none">
                Documentation
            </h4>
            {documentationLinks.map((doc, index) => (
                <DocsLink key={index} doc={doc} />
            ))}
        </ScrollArea>
    );
}

function DocsLink({ doc }: { doc: string }) {
    const docUrl = `/docs/${doc.replace(/\s+/g, "").toLowerCase()}`;

    return (
        <>
            <Link to={docUrl} className="text-sm text-blue-600 hover:underline">
                {doc}
            </Link>
            <Separator className="my-2" />
        </>
    );
}

export default Sidebar;
