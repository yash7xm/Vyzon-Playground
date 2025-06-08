import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Lazy-load section components
const sectionComponents: {
  [key: string]: React.LazyExoticComponent<React.FC>;
} = {
  introduction: React.lazy(() => import("../sections/introduction")),
  gettingstarted: React.lazy(() => import("../sections/getting-started")),
  variablesanddatatypes: React.lazy(() =>
    import("../sections/variables-and-datatypes")
  ),
  buildins: React.lazy(() => import("../sections/build-ins")),
  conditionals: React.lazy(() => import("../sections/conditionals")),
  loops: React.lazy(() => import("../sections/loops")),
  functions: React.lazy(() => import("../sections/functions")),
  classesandobjects: React.lazy(() =>
    import("../sections/classes-and-objects")
  ),
  inheritance: React.lazy(() => import("../sections/inheritance")),
  modules: React.lazy(() => import("../sections/modules")),
};

// Select component based on route param
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
    <ScrollArea className="w-full h-full rounded-lg border pt-4 md:pl-4 md:pr-24 pb-2">
      <Suspense
        fallback={
          <div className="space-y-6 px-4 py-6 animate-pulse">
            {/* Large title */}
            <Skeleton className="h-10 w-2/5 rounded-lg" />

            {/* Subtitle */}
            <Skeleton className="h-6 w-1/4 rounded-lg" />

            {/* Paragraph block */}
            <div className="space-y-3">
              <Skeleton className="h-4 w-full rounded-md" />
              <Skeleton className="h-4 w-[90%] rounded-md" />
              <Skeleton className="h-4 w-[85%] rounded-md" />
              <Skeleton className="h-4 w-[80%] rounded-md" />
            </div>

            {/* Subtitle */}
            <Skeleton className="h-6 w-1/4 rounded-lg mt-10" />

            {/* Paragraph block */}
            <div className="space-y-3">
              <Skeleton className="h-4 w-full rounded-md" />
              <Skeleton className="h-4 w-[95%] rounded-md" />
              <Skeleton className="h-4 w-[90%] rounded-md" />
              <Skeleton className="h-4 w-[80%] rounded-md" />
            </div>

            {/* Simulated code block */}
            <div className="mt-10 space-y-2">
              <Skeleton className="h-4 w-[70%] rounded-md" />
              <Skeleton className="h-4 w-[75%] rounded-md" />
              <Skeleton className="h-4 w-[60%] rounded-md" />
            </div>
          </div>
        }
      >
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
