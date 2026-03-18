import { useEffect, useRef } from "react";
import Editor, { loader } from "@monaco-editor/react";
import { Monaco } from "@monaco-editor/react";
import { tokens } from "./tokens";
import { SourceLocation } from "@/language/errors";

interface CodeEditorProps {
    code: string;
    setCode: (code: string) => void;
    errorLocation?: SourceLocation;
    errorMessage?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
    code,
    setCode,
    errorLocation,
    errorMessage,
}) => {
    const editorRef = useRef<Parameters<NonNullable<React.ComponentProps<typeof Editor>["onMount"]>>[0] | null>(null);
    const monacoRef = useRef<Monaco | null>(null);

    useEffect(() => {
        loader
            .init()
            .then((monaco: Monaco) => {
                monacoRef.current = monaco;
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

    useEffect(() => {
        const editor = editorRef.current;
        const monaco = monacoRef.current;
        const model = editor?.getModel();

        if (!editor || !monaco || !model) {
            return;
        }

        if (!errorLocation || !errorMessage) {
            monaco.editor.setModelMarkers(model, "vyzon", []);
            return;
        }

        const endLineNumber = Math.max(
            errorLocation.start.line,
            errorLocation.end.line
        );
        const endColumn = Math.max(
            errorLocation.start.column + 1,
            errorLocation.end.column
        );

        monaco.editor.setModelMarkers(model, "vyzon", [
            {
                severity: monaco.MarkerSeverity.Error,
                message: errorMessage,
                startLineNumber: errorLocation.start.line,
                startColumn: errorLocation.start.column,
                endLineNumber,
                endColumn,
            },
        ]);
    }, [errorLocation, errorMessage]);

    return (
        <Editor
            language="vyzon"
            value={code}
            onChange={(newValue) => setCode(newValue ?? "")}
            onMount={(editor, monaco) => {
                editorRef.current = editor;
                monacoRef.current = monaco;
            }}
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
