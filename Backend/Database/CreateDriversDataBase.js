import sqlite3 from "sqlite3"
import {open} from "sqlite"
import path from "node:path"





async function  createDriversDataBase(){

    let db;


    try{

     db = await open({

         filename: path.join("DriverDataBase.db"),
         driver: sqlite3.Database
    })



   await  db.exec(`
        
        CREATE TABLE IF NOT EXISTS Drivers_Data(
        Year INTEGER NOT NULL,
        Round INTEGER NOT NULL,
        Driver Text NOT NULL,
        Team Text NOT NULL,
        Points REAL NOT NULL
        
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

