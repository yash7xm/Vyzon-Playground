export type SourcePosition = {
    line: number;
    column: number;
    offset: number;
};

export type SourceLocation = {
    start: SourcePosition;
    end: SourcePosition;
};

export type NodeWithLocation = {
    loc?: SourceLocation;
    [key: string]: any;
};

export class VyzonError extends Error {
    readonly kind: "SyntaxError" | "RuntimeError";
    readonly loc?: SourceLocation;
    readonly cause?: unknown;

    constructor(
        kind: "SyntaxError" | "RuntimeError",
        message: string,
        loc?: SourceLocation,
        cause?: unknown
    ) {
        super(message);
        this.name = kind;
        this.kind = kind;
        this.loc = loc;
        this.cause = cause;
    }
}

export function formatSourceLocation(loc?: SourceLocation): string {
    if (!loc) {
        return "unknown location";
    }

    return `line ${loc.start.line}, column ${loc.start.column}`;
}

export function formatVyzonError(error: unknown): string {
    if (error instanceof VyzonError) {
        const location = error.loc
            ? ` at ${formatSourceLocation(error.loc)}`
            : "";
        return `${error.kind}${location}: ${error.message}`;
    }

    if (error instanceof Error) {
        return `${error.name}: ${error.message}`;
    }

    return String(error);
}
