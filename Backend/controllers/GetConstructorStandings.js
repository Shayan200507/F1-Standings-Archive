import {openDataBase} from "../Constructors Database/OpenDatabase.js"

export async function getConstructorsStandings(req,res){


   const {year,round} = req.params
   let db;
   try{
        db = await openDataBase()


        const returnData = await db.all(`

           SELECT Standings,Team,Points FROM Constructors_Data WHERE
           Year = ?
           AND Round = ?




        `,[year,round])


        res.json(returnData)






   }
   catch(error){ console.log(error)}
   finally{if(db){ await db.close()}}






}