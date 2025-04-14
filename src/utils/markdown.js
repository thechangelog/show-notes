export function getMarkdownLinks(mdString) {
    // Credit: https://davidwells.io/snippets/regex-match-markdown-links
    const regexMdLinks = /\[([^\[]+)\](\([\S]*\))/gm;
    const matches = mdString.match(regexMdLinks);
    const singleMatch = /\[([^\[]+)\]\((.*)\)/;
    if (!matches)
        return [];
    return matches.map(match => {
        const [markdown, text, url] = singleMatch.exec(match);
        return { markdown, text, url };
    });
}

export function getMarkdownLinksWithLineNumber(mdString) {
    const lines = mdString.split('\n');
    const links = lines.flatMap((line, i) => {
        return getMarkdownLinks(line).map(x => ({ ...x, line: i + 1 }));
    });
    return links;
}