import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "../ui/separator";
import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Content() {
    const sectionComponents: {
        [key: string]: React.LazyExoticComponent<React.FC>;
    } = {
        introduction: React.lazy(() => import("../sections/introduction")),
        installation: React.lazy(() => import("../sections/installation")),
        usage: React.lazy(() => import("../sections/usage")),
        documentation: React.lazy(() => import("../sections/documentation")),
        modules: React.lazy(() => import("../sections/modules")),
    };

    const { id } = useParams<{ id: string }>();
    const [SectionContent, setSectionContent] = useState<React.LazyExoticComponent<React.FC> | null>(null);

    useEffect(() => {
        const section = sectionComponents[id as string] || null;
        setSectionContent(section);
    }, [id]);

    return (
        <ScrollArea className="w-full h-full rounded-lg border p-4">
            {SectionContent ? (
                <Suspense fallback={<div>Loading...</div>}>
                    <SectionContent />
                </Suspense>
            ) : (
                <div className="text-lg font-bold">Section not found.</div>
            )}
            <Separator />
        </ScrollArea>
    );
}

export default Content;
