import fs from "node:fs/promises"
import path from "node:path"


export async function readJson() {
try{
        const readData = await fs.readFile(path.join("Backend", "Data", "DataWithRaceNames.json"),"utf8")
        const data = JSON.parse(readData)
        return data
}

catch(error){
    console.log(error)
}
}

//console.log((await readJson())[0])