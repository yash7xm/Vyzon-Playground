import { useState, useEffect } from "react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

import CodeEditor from "./code-editor";
import HelperButtons from "./helper-btns";
import { runCode } from "@/language";

export function PlaygroundResizable() {
    const [code, setCode] = useState<string>(
        `// Welcome to Vyzon Playground! \nlet a = "Hello, World!";\nwrite(a);`
    );
    const [output, setOutput] = useState<string>("");

    // Save original console.log
    const originalConsoleLog = console.log;

    // Override console.log to store logs in output
    console.log = (...args: any[]) => {
        const logOutput = args.join(" "); // Convert log arguments to a string
        setOutput(logOutput); // Append to existing output
        originalConsoleLog(...args); // Optional: Keep logging to the console as well
    };

    const handleRunCode = () => {
        try {
            runCode(code);
        } catch (error) {
            setOutput((prevOutput) => prevOutput + `Error: ${error}\n`);
        }
    };

    // Cleanup the overridden console.log when the component unmounts
    useEffect(() => {
        return () => {
            console.log = originalConsoleLog; // Restore original console.log
        };
    }, []);

    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="w-full rounded-lg border"
        >
            <ResizablePanel defaultSize={70}>
                <div className="flex h-full w-full items-center justify-center p-6">
                    <CodeEditor code={code} setCode={setCode} />
                </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={30}>
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel defaultSize={90}>
                        <div className="flex h-full p-6 overflow-y-auto">
                            <div>{output}</div>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={10}>
                        <div className="flex h-full items-center justify-center">
                            <HelperButtons runCode={handleRunCode} />
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}
