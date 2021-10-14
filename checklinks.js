import util from 'util';
import child_process from 'child_process'
import {promises as fs} from 'fs'
const exec = util.promisify(child_process.exec);

import fetch  from 'node-fetch'


// Perform multiple rounds of replaces on a string
function applyReplaces(text) {
    return REPLACES.reduce((prev, [a, b]) => prev.replace(a, b), text)
}

// Returns an array of the filenames of all the episodes
async function getMarkdown() {
    const { stdout } = await exec('find **/*.md')
    return stdout
        .split('\n') // make an array
        .filter(x => x.endsWith('.md')) // remove blanks
}

// Read a textfile to a string, pass the string through processor, and write the results out to a file
async function processFile(filename, processor, newname = '') {
    const inText = await fs.readFile(filename).then(buffer => buffer.toString())
    const outText = processor(inText)
    if (outText != inText) {
        await fs.writeFile(newname || filename, outText)
    }
}

function getMarkdownLinks(mdString) {
    // Credit: https://davidwells.io/snippets/regex-match-markdown-links
    const regexMdLinks = /\[([^\[]+)\](\([\S]*\))/gm
    const matches = mdString.match(regexMdLinks)
    const singleMatch = /\[([^\[]+)\]\((.*)\)/
    if(!matches) return []
    return matches.map(match => {
        const [text, word, link] = singleMatch.exec(match)
        return {text, word, link}
    })
    // matches.forEach(match => console.log(match))
}


async function main() {
    const notes = await getMarkdown()
    notes.slice(100,200).forEach(async (filename, i) => {
        const text = await fs.readFile(filename).then(buffer => buffer.toString())
        const links = getMarkdownLinks(text)
        links.forEach(async ({text, word, link}) => {
            let response
            try {
                response = await fetch(link)
            } catch {
                response = {status: '???'}
            }
            if (response.status !== 200) {
                const mark = response.status === 200 ? '   ': '>>>'
                console.log(response.status, mark, link, `(${filename})`)
            } 
        })
        // processFile(filename, applyReplaces)
    })
}

 
// if (esMain(import.meta)) {
if (true) {
    main();
  // Module run directly.
}
