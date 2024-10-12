import type { languages } from "monaco-editor";

export const tokens: languages.IMonarchLanguage = {
    keywords: [
        "let",
        "def",
        "if",
        "else",
        "elif",
        "for",
        "while",
        "do",
        "class",
        "extends",
        "module",
        "import",
        "return",
        "new",
        "super",
        "write",
        "constructor"
    ],
    typeKeywords: ["null", "true", "false"],
    operators: [
        "=",
        ">",
        "<",
        "!",
        "==",
        "<=",
        ">=",
        "!=",
        "&&",
        "||",
        "+",
        "-",
        "*",
        "/",
        "%",
        "^",
        "+=",
        "-=",
        "*=",
        "/=",
    ],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,

    // The main tokenizer for Vyzon
    tokenizer: {
        root: [
            // Identifiers and keywords
            [
                /[a-zA-Z_$][\w$]*/,
                {
                    cases: {
                        "@keywords": "keyword",
                        "@typeKeywords": "keyword.type",
                        "@default": "identifier",
                    },
                },
            ],

            // Whitespace
            { include: "@whitespace" },

            // Delimiters and operators
            [/[{}()\[\]]/, "bracket"],
            [
                /@symbols/,
                {
                    cases: {
                        "@operators": "operator",
                        "@default": "",
                    },
                },
            ],

            // Numbers
            [/\d+/, "number"],

            // Strings
            [/\"([^"\\]|\\.)*$/, "string.invalid"], // non-terminated string
            [
                /\"/,
                {
                    token: "string.quote",
                    bracket: "@open",
                    next: "@string",
                },
            ],

            // Comments
            [/\/\/.*$/, "comment"],
            [/\/\*/, "comment", "@comment"],
        ],

        comment: [
            [/[^\/*]+/, "comment"],
            [/\*\//, "comment", "@pop"],
            [/[\/*]/, "comment"],
        ],

        string: [
            [/[^\\"]+/, "string"],
            [/\\./, "string.escape"],
            [
                /"/,
                {
                    token: "string.quote",
                    bracket: "@close",
                    next: "@pop",
                },
            ],
        ],

        whitespace: [
            [/[ \t\r\n]+/, "white"],
            [/\/\*/, "comment", "@comment"],
            [/\/\/.*$/, "comment"],
        ],
    },
};
