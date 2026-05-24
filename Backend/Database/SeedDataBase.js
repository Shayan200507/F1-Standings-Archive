
import fs from "node:fs/promises"
import sqlite3 from "sqlite3"
import {open} from "sqlite"
import path from "path"
import {readJson} from "../utils/ReadJson.js"



async function  seedData(){

    const data =  await readJson()
    let db;

    try{

    db = await open({

          filename:  path.join("Backend", "Database", "DriverDataBase.db"),
          driver: sqlite3.Database



    })


    await db.exec("BEGIN TRANSACTION")

    for(let yearIndex = 0 ; yearIndex < data.length; yearIndex++ ){
        const yearData = data[yearIndex]
        for(let roundIndex = 0 ; roundIndex < yearData.length; roundIndex++){

            const roundData = yearData[roundIndex]

            for(let driverIndex = 0 ; driverIndex < roundData.length; driverIndex++){

                  const driverData = roundData[driverIndex]


                 await  db.run(`
                    
                    INSERT into Drivers_Data (Year,Round,Points,StandingsPosition,Name,Team) VALUES (?,?,?,?,?,?)
                    
                    
                    
                    `,driverData["Year"],driverData["Round"],driverData["Points"],driverData["StandingsPosition"],driverData["Name"],driverData["Team"])

            }

        }

    }



    
  await   db.exec("COMMIT")

}

catch(error){
    console.log(error)
    await db.exec(`ROLLBACK`)
}




}

await seedData()