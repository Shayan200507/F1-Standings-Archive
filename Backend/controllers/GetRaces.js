import {openDataBase} from "../Database/OpenDataBase.js"

export async function getRaces(req,res){
      
    
    
    let db;
     try{
         const {year} = req.query
         db = await openDataBase()

         const races = await  db.all(`
          
          SELECT DISTINCT RaceName from  Drivers_Data WHERE
          Year = ?
          
          
          
          
          
          `,[Number(year)])

          res.json(races)


     }
     catch(error){
        console.log(error)
          
     }
     finally{
        if(db){ await db.close()}
     }

   

}