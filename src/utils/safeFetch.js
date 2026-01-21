import {fileURLToPath} from 'url'

import fetch from 'node-fetch';
import AbortController from 'abort-controller'

export async function safeFetch(url, options ={}, ...args) {
    const controller = new AbortController()
    const timeout = 10000
    const timer = setTimeout(() => controller.abort(), timeout)
    let response;
    try {
        const start = Date.now()
        response = await fetch(url, {...options, signal: controller.signal}, ...args)
        const t = Date.now() - start
        response.timeTaken = t
    } catch (e) {
        response = { status: -1, ok: false };
    }
    clearTimeout(timer)
    return response;
}


if (fileURLToPath(import.meta.url).startsWith(process.argv[1])) {
    const url = process.argv[2]
    if (url) {
        console.log(await safeFetch(url))
    }
}