import * as ts from "typescript";

export function getSyntaxKindName(kind: ts.SyntaxKind) {
    return getKindCache()[kind];
}

let kindCache: { [kind: number]: string; } | undefined = undefined;

function getKindCache() {
    if (kindCache != null)
        return kindCache;
    kindCache = {};

    // some SyntaxKinds are repeated, so only use the first one
    for (const name of Object.keys(ts.SyntaxKind)) {
        const value = (ts.SyntaxKind as any)[name] as number;
        if (kindCache[value] == null)
            kindCache[value] = name;
    }
    return kindCache;
}
