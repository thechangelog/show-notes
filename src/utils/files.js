import {promises as fs } from 'fs';
import util from 'util';
import child_process from 'child_process'
export const exec = util.promisify(child_process.exec);

// minimal implementation of glob - avoiding adding 'glob' dependency
export async function glob(pattern = "*") {
    const { stdout } = await exec('find ' + pattern);
    return stdout
        .split('\n') // make an array
        .filter(x => x); // remove blanks
}

// Returns the contents of a file as a string
export async function readFileString(filename) {
    const buffer = await fs.readFile(filename);
    return buffer.toString();
}