import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function withLowCache(fn, dbName, TTLms = 3600_000, saveFreq = 1000) {
    if (!(dbName.includes('/') || dbName.includes('\\'))) {
        dbName = join(__dirname, dbName)
    }

    const db = new Low(new JSONFile(dbName))
    await db.read()


    if (!db.data) {
        db.data = {}
    } else {
        flush()
    }

    db.save = () => {
        db.saver = db.saver || setTimeout(() => {
            db.write()
            db.saver = undefined
        }, saveFreq)
    }
    async function cachedFn(...args) {
        const key = JSON.stringify(args)
        const cachedResult = db.data[key]
        if (cachedResult) {
        }
        if (cachedResult && (Date.now() < cachedResult.time + TTLms)) {
            return cachedResult.value
        } else {
            const result = await fn(...args)
            db.data[key] = { value: result, time: Date.now() }
            db.save()
            return result
        }
    }

    cachedFn.flush = flush
    cachedFn.clear = clear

    async function flush() {
        Object.entries(db.data).forEach(([key, { time }]) => {
            if (Date.now() > time + TTLms) delete db.data[key]
        })
        await db.write()
    }

    async function clear() {
        db.data = {}
        db.write()
    }

    return cachedFn

}