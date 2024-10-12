import { useState } from "react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

import CodeEditor from "./code-editor";
import HelperButtons from "./helper-btns";

export function PlaygroundResizable() {
    const [code, setCode] = useState<string>(
        `// Welcome to Vyzon Playground! \nlet a = "Hello, World!";\nwrite(a);`
    );
    const [output, setOutput] = useState<string>("");

    const runCode = () => {
        try {
            setOutput(code);
        } catch (error) {
            setOutput(`Error: ${error}`);
        }
    };

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
                            <HelperButtons runCode={runCode} />
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}
