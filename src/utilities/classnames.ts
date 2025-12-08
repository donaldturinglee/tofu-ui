type ClassValue = string | boolean | null | undefined;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ClassArgument = ClassValue | ClassValue[] | Record<string, any>;

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
