import { fileURLToPath } from 'url';

import { glob} from './utils/files.js';
import { asyncChunkedForEach, asyncForEach, asyncMap} from './utils/asyncArray.js'
import { getLinksFromMdFile, checkLink } from './utils/links.js';
import {withLowCache} from './utils/cache.js'

if (fileURLToPath(import.meta.url).startsWith(process.argv[1])) {
    const pattern = process.argv[2] || '**/*.md'
    main(pattern)
}

const CHUNK_SIZE = 50;

const cachedCheckLink = await withLowCache(checkLink, 'linkcache.json', 24 * 60 * 60 * 1000)


async function main(globPattern = '**/*.md') {

    const filenames = await glob(globPattern)
    const numFiles = filenames.length
    console.log(`Running ${filenames.length} files:`)
    console.log('----------------------------')
    console.log(filenames.slice(0,20).join('\n') + (numFiles > 20 ? `\n(...${numFiles - 20} more)` : '') + '\n')
    const links = await asyncMap(filenames, getLinksFromMdFile).then(arr => arr.flat())
    console.log(`Found ${links.length} links`)
    await asyncChunkedForEach(links, async link => Object.assign(link, await cachedCheckLink(link.url)), CHUNK_SIZE)
    const brokenLinks = links.filter(x => !x.ok)
    console.log(brokenLinks.map(({filename, status, url}) => `${status} ${filename}  ${url}`).join('\n'))
    console.log(brokenLinks.length , links.length )
}

