import {openDataBase} from "./OpenDatabase.js"
import fs from "node:fs/promises"
import path from "node:path"


async function createDatabase(){
let db;

try{

      const db = await openDataBase()


      await db.exec(`
        
       CREATE TABLE IF NOT EXISTS Constructors_Data(
       
       Year INTEGER,
       Round INTEGER,
       Standings INTEGER,
       Team STRING,
       Points REAL
       
       
       )
           
        `)

      }

      catch(error){ console.log(error)}
      finally{ if(db){await db.close()}}










}



async function seedDatabase(){


    const readData = await fs.readFile(path.join(import.meta.dirname,"..","Constructors Data","ConstructorsData.json"),"utf8")
    const data = JSON.parse(readData)
    let db;
    try{

          const db  = await openDataBase()


          await db.exec("BEGIN TRANSACTION")

    for(let yearIndex = 0 ; yearIndex < data.length; yearIndex++ ){
        const yearData = data[yearIndex]
        for(let roundIndex = 0 ; roundIndex < yearData.length; roundIndex++){

            const roundData = yearData[roundIndex]

            for(let driverIndex = 0 ; driverIndex < roundData.length; driverIndex++){

                  const ConstructorData = roundData[driverIndex]


                 await  db.run(`
                    
                    INSERT into Constructors_Data (Year,Round,Standings,Team,Points) VALUES (?,?,?,?,?)
                    
                    
                    
                    `,ConstructorData["Year"],ConstructorData["Round"],ConstructorData["Position"],ConstructorData["Team"],ConstructorData["Points"])

            }

        }

    }



    
    await   db.exec("COMMIT")




    }
    catch(error){ console.log(error);  await db.exec(`ROLLBACK`)}
    finally{ if(db){ await db.close()}}
 




}








await createDatabase()
await seedDatabase()