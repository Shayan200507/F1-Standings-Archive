import sqlite3 from "sqlite3"
import {open} from "sqlite"
import path from "node:path"





async function  createDriversDataBase(){

    let db;


    try{

     db = await open({

         filename: path.join("Backend", "Database", "DriverDataBase.db"),
         driver: sqlite3.Database
    })



   await  db.exec(`
        
        CREATE TABLE IF NOT EXISTS Drivers_Data(
        Year INTEGER ,
        Round INTEGER ,
        Points REAL ,
        StandingsPosition INTEGER,
        Name Text ,
        Team Text 
              
        )      
        
        `)


   }
   catch(error){
    console.error('Failed to create database:', error)
   }
   
   
   finally{
    if (db) {await db.close();}
   }


}
createDriversDataBase()

