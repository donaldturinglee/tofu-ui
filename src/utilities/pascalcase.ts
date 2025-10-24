const SPLIT_LOWER_UPPER_RE = /([\p{Ll}\d])(\p{Lu})/gu;
const SPLIT_UPPER_UPPER_RE = /(\p{Lu})([\p{Lu}][\p{Ll}])/gu;

const DEFAULT_STRIP_REGEXP = /[^\p{L}\d]+/giu;

const SPLIT_REPLACE_VALUE = "$1\0$2";

function split(value: string): string[] {
    let result = value.trim();

    result = result.replace(SPLIT_LOWER_UPPER_RE, SPLIT_REPLACE_VALUE);

    result = result.replace(SPLIT_UPPER_UPPER_RE, SPLIT_REPLACE_VALUE);

    result = result.replace(DEFAULT_STRIP_REGEXP, "\0");

    let start = 0;
    let end = result.length;

    while (result.charAt(start) === "\0") start++;
    if (start === end) return [];
    while (result.charAt(end - 1) === "\0") end--;

    return result.slice(start, end).split(/\0/g);
}

function capitalizeWord(word: string): string {
    if (!word) return word;
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export function pascalCase(input: string): string {
    const words = split(input);
    return words.map(capitalizeWord).join("");
}
