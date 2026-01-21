type ClassValue = string | boolean | null | undefined;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ClassArgument = ClassValue | ClassValue[] | Record<string, any>;
 
export type SizePrefix = "w" | "h";

export const parseSizeFromClassName = (
    className: string | undefined,
    prefix: SizePrefix,
): string | undefined => {
    const tokens = String(className ?? "").split(/\s+/).filter(Boolean);

    const bracketRe = new RegExp(`^${prefix}-\\[(.+)\\]$`);
    const numberRe = new RegExp(`^${prefix}-(\\d+(?:\\.\\d+)?)$`);

    for (const t of tokens) {
        const m1 = t.match(bracketRe);
        if (m1) return m1[1];

        const m2 = t.match(numberRe);
        if (m2) return `${m2[1]}px`;
    }

    return undefined;
};

export const ClassNames = (...classes: ClassArgument[]): string => {
    const results: string[] = [];

    for (let i = 0; i < classes.length; i++) {
        const item = classes[i];
        if (!item) continue;

        if (typeof item === "string" && item !== "") {
            results.push(item);
        } else if (Array.isArray(item)) {
            for (let j = 0; j < item.length; j++) {
                const nestedResult = ClassNames(item[j]);
                if (nestedResult) {
                    results.push(nestedResult);
                }
            }
        } else if (typeof item === "object") {
            const keys = Object.keys(item);
            for (let k = 0; k < keys.length; k++) {
                const key = keys[k];
                if (item[key]) {
                    results.push(key);
                }
            }
        }
    }

    return results.join(" ");
};
