import {openDataBase} from "../Database/OpenDataBase.js"


export async function getYears(req,res){
    let db
    try{

        db = await openDataBase()

        const years =  await db.all(`
            
            SELECT DISTINCT Year FROM Drivers_Data
            
            
            
            
            
            `)


            res.json(years)




    }
    catch(error){
        console.log(error)
        
    }
    finally{
        db.close()
    }




}