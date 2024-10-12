import { useEffect } from "react";
import Editor, { loader } from "@monaco-editor/react";
import { Monaco } from "@monaco-editor/react"; // Import Monaco types
import { tokens } from "./tokens";

const CodeEditor = () => {
    useEffect(() => {
        // Initialize Monaco editor and define Vyzon language
        loader
            .init()
            .then((monaco: Monaco) => {
                // Register Vyzon as a language if not already registered
                if (
                    !monaco.languages
                        .getLanguages()
                        .some((lang) => lang.id === "vyzon")
                ) {
                    monaco.languages.register({ id: "vyzon" });

                    // Define the tokens and syntax rules for Vyzon
                    monaco.languages.setMonarchTokensProvider("vyzon", tokens);

                    // Set language configuration (comments, brackets, etc.)
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
