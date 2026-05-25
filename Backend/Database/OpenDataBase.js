
import sqlite3 from "sqlite3"
import {open} from "sqlite"
import path from "path"

export async function openDataBase(){



    let db;
    try{

        db = open({
            filename: path.join(import.meta.url,"Backend","Database","DriverDataBase.db")




        })





    }





}