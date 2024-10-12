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
    const resultRef = useRef<HTMLDivElement>(null);

    const customLogger = {
        log: (message: any) => {
            setOutput((prevOutput) => prevOutput + message + "\n");
        },
    };

    useEffect(() => {
        const originalConsoleLog = console.log;
        console.log = customLogger.log;

        return () => {
            console.log = originalConsoleLog;
        };
    }, []);

    const handleRunCode = () => {
        setOutput("");
        try {
            runCode(code);
        } catch (error) {
            setOutput((prevOutput) => prevOutput + `Error: ${error}\n`);
        }

        if (resultRef.current) {
            resultRef.current.scrollIntoView({ behavior: "smooth" });
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
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={30}>
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel defaultSize={85}>
                        <div className="flex h-full p-6 overflow-y-auto">
                            <div ref={resultRef}>{output}</div>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={15}>
                        <div className="flex h-full items-center justify-center">
                            <HelperButtons
                                runCode={handleRunCode}
                                code={code}
                            />
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}
