import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { documentationLinks } from "../utils/info";

function Sidebar({ closeSidebar }: { closeSidebar: () => void }) {
    return (
        <ScrollArea className="w-full h-full border py-4 px-6 rounded-md">
            <h4 className="mb-8 font-medium text-sm leading-none font-montserrat">
                Documentation
            </h4>
            {documentationLinks.map((doc, index) => (
                <DocsLink key={index} doc={doc} closeSidebar={closeSidebar} />
            ))}
        </ScrollArea>
    );
}

function DocsLink({
    doc,
    closeSidebar,
}: {
    doc: string;
    closeSidebar: () => void;
}) {
    const docUrl = `/docs/${doc.replace(/\s+/g, "").toLowerCase()}`;

    return (
        <>
            <Link
                to={docUrl}
                className="text-blue-600 hover:underline font-roboto"
                onClick={closeSidebar}
            >
                {doc}
            </Link>
            <Separator className="my-2" />
        </>
    );
}

export default Sidebar;
