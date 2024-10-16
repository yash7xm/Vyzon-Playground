import { useEffect } from "react";
import Editor, { loader } from "@monaco-editor/react";
import { Monaco } from "@monaco-editor/react";
import { tokens } from "./tokens";

interface CodeEditorProps {
    code: string;
    setCode: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, setCode }) => {
    useEffect(() => {
        loader
            .init()
            .then((monaco: Monaco) => {
                if (
                    !monaco.languages
                        .getLanguages()
                        .some((lang) => lang.id === "vyzon")
                ) {
                    monaco.languages.register({ id: "vyzon" });

                    monaco.languages.setMonarchTokensProvider("vyzon", tokens);

                    monaco.languages.setLanguageConfiguration("vyzon", {
                        comments: {
                            lineComment: "//",
                            blockComment: ["/*", "*/"],
                        },
                        brackets: [
                            ["{", "}"],
                            ["[", "]"],
                            ["(", ")"],
                        ],
                        autoClosingPairs: [
                            { open: "{", close: "}" },
                            { open: "[", close: "]" },
                            { open: "(", close: ")" },
                            { open: '"', close: '"' },
                        ],
                        surroundingPairs: [
                            { open: "{", close: "}" },
                            { open: "[", close: "]" },
                            { open: "(", close: ")" },
                            { open: '"', close: '"' },
                        ],
                    });
                }
            })
            .catch((error) => {
                console.error("Failed to initialize Monaco editor:", error);
            });
    }, []);

    return (
        <Editor
            language="vyzon"
            value={code}
            onChange={(newValue) => setCode(newValue ?? "")}
            options={{
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                scrollbar: {
                    vertical: "hidden",
                    horizontal: "hidden",
                },
            }}
        />
    );
};

export default CodeEditor;
