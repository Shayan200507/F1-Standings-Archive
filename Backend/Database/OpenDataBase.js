
import sqlite3 from "sqlite3"
import {open} from "sqlite"
import path from "path"

const __dirname = import.meta.dirname // to create an absolute path

export async function openDataBase(){



    let db;
    try{

         db = await  open({
            
            filename: path.join(__dirname,"newDriverDataBase.db"),
            driver: sqlite3.Database



             
         })

         return db



    }
    catch(error){
        console.log(error)
        throw error
    }
    
  


}

