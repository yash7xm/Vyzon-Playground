import { ScrollArea } from "@/components/ui/scroll-area";
import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Define section components outside the Content component
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

// Utility function to get section component based on id
const getSectionComponent = (id: string | undefined) => {
    return id && sectionComponents[id]
        ? sectionComponents[id]
        : sectionComponents["introduction"];
};

function Content() {
    const { id } = useParams<{ id: string }>();
    const [SectionContent, setSectionContent] = useState<
        React.LazyExoticComponent<React.FC>
    >(getSectionComponent(id));

    useEffect(() => {
        setSectionContent(getSectionComponent(id));
    }, [id]);

    return (
        <ScrollArea className="w-full h-full rounded-lg border pt-4 pl-4 pr-24 pb-2">
            <Suspense fallback={<div>Loading...</div>}>
                {SectionContent ? (
                    <SectionContent />
                ) : (
                    <div className="text-lg font-bold">Section not found.</div>
                )}
            </Suspense>
        </ScrollArea>
    );
}

export default Content;
