import { useState, useEffect, useRef } from "react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

import CodeEditor from "./code-editor";
import HelperButtons from "./helper-btns";
import { runCode } from "@/language";

export function PlaygroundResizable() {
    const startingCode = `// Welcome to Vyzon Playground!

class Person {
  def constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  def greet() {
    write("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }
}

let person1 = new Person("Yash", 22);
person1.greet();`;

    const [code, setCode] = useState<string>(startingCode);
    const [output, setOutput] = useState<string>("");
    const [fullScreen, setFullScreen] = useState<boolean>(false);
    const resultRef = useRef<HTMLDivElement>(null);

    const customLogger = {
        log: (message: any) => {
            setOutput((prev) => prev + message + "\n");
        },
    };

    useEffect(() => {
        const original = console.log;
        console.log = customLogger.log;
        return () => {
            console.log = original;
        };
    }, []);

    const handleRunCode = () => {
        setOutput("");
        try {
            runCode(code);
        } catch (e) {
            setOutput((prev) => prev + `Error: ${e}\n`);
        }

        if (resultRef.current) {
            resultRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="w-full h-full p-2 md:p-4">
            {fullScreen ? (
                // FULL SCREEN MODE
                <div className="h-full w-full border rounded-lg relative">
                    <CodeEditor code={code} setCode={setCode} />
                    <div className="absolute top-4 right-4 z-10">
                        <button
                            onClick={() => setFullScreen(false)}
                            className="text-sm px-3 py-1 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700"
                        >
                            Exit Full Screen
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    {/* Mobile layout: vertical stacked */}
                    <div className="flex flex-col md:hidden h-[calc(100vh-2rem)] w-full">
                        <div className="h-[70%] min-h-0 border rounded-t-lg overflow-hidden">
                            <CodeEditor code={code} setCode={setCode} />
                        </div>

                        <div className="h-[5%] min-h-0 flex items-center justify-center border-y px-2">
                            <HelperButtons
                                runCode={handleRunCode}
                                code={code}
                                vertical={false}
                                onToggleFullScreen={() => setFullScreen(true)}
                            />
                        </div>

                        <div className="h-[20%] min-h-0 overflow-y-auto bg-gray-100 border rounded-b-lg p-2 font-mono text-sm">
                            <div ref={resultRef}>{output}</div>
                        </div>
                    </div>

                    {/* Desktop layout: horizontal resizable panels */}
                    <div className="hidden md:block w-full h-full">
                        <ResizablePanelGroup
                            direction="horizontal"
                            className="w-full h-full rounded-lg border"
                        >
                            {/* CODE */}
                            <ResizablePanel defaultSize={75} minSize={50}>
                                <div className="h-full w-full p-2 md:p-4">
                                    <CodeEditor code={code} setCode={setCode} />
                                </div>
                            </ResizablePanel>

                            <ResizableHandle />

                            {/* BUTTON PANEL */}
                            <ResizablePanel defaultSize={5} minSize={5}>
                                <div className="h-full flex flex-col gap-4 border-x p-2">
                                    <HelperButtons
                                        runCode={handleRunCode}
                                        code={code}
                                        vertical
                                        onToggleFullScreen={() => setFullScreen(true)}
                                    />
                                </div>
                            </ResizablePanel>

                            <ResizableHandle />

                            {/* OUTPUT */}
                            <ResizablePanel defaultSize={20} minSize={15}>
                                <div className="h-full w-full overflow-y-auto p-4 font-mono text-sm">
                                    <div ref={resultRef}>{output}</div>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                </>
            )}
        </div>
    );
}
