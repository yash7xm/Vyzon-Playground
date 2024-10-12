import { useEffect } from "react";
import Editor, { loader } from "@monaco-editor/react";
import { Monaco } from "@monaco-editor/react";
import { tokens } from "./tokens";

const CodeEditor = () => {
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
            defaultLanguage="vyzon"
            defaultValue={`// Welcome to Vyzon Playground! \nlet a = "Hello, World!";\nwrite(a);`}
        />
    );
};

export default CodeEditor;
