import { ScrollArea } from "@/components/ui/scroll-area";
import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Content() {
    const sectionComponents: {
        [key: string]: React.LazyExoticComponent<React.FC>;
    } = {
        introduction: React.lazy(() => import("../sections/introduction")),
        gettingstarted: React.lazy(() => import("../sections/getting-started")),
        variablesanddatatypes: React.lazy(
            () => import("../sections/variables-and-datatypes")
        ),
        buildins: React.lazy(() => import("../sections/build-ins")),
        conditionals: React.lazy(() => import("../sections/conditionals")),
        loops: React.lazy(() => import("../sections/loops")),
        functions: React.lazy(() => import("../sections/functions")),
        classesandobjects: React.lazy(
            () => import("../sections/classes-and-objects")
        ),
        inheritance: React.lazy(() => import("../sections/inheritance")),
        modules: React.lazy(() => import("../sections/modules")),
    };

    const { id } = useParams<{ id: string }>();
    const [SectionContent, setSectionContent] =
        useState<React.LazyExoticComponent<React.FC> | null>(null);

    useEffect(() => {
        const section = sectionComponents[id as string] || null;
        setSectionContent(section);
    }, [id]);

    return (
        <ScrollArea className="w-full h-full rounded-lg border pt-4 pl-4 pr-24 pb-2">
            {SectionContent ? (
                <Suspense fallback={<div>Loading...</div>}>
                    <SectionContent />
                </Suspense>
            ) : (
                <div className="text-lg font-bold">Section not found.</div>
            )}
        </ScrollArea>
    );
}

export default Content;
