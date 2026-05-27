import {openDataBase} from "./OpenDatabase.js"
import fs from "node:fs/promise"


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
       Points INTEGER
       
       
       )
           
        `)

      }

      catch(error){ console.log(error)}
      finally{ if(db){await db.close()}}










}



async function seedDatabase(){




}








await createDatabase()