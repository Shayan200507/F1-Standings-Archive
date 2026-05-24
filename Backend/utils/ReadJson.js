import fs from "node:fs/promises"
import path from "node:path"


export async function readJson() {

        const readData = await fs.readFile(path.join("Backend", "Data", "Data.json"),"utf8")
        const data = JSON.parse(readData)
        return data
    
}

//console.log((await readJson())[0])