
import {openDataBase} from "../Database/OpenDataBase.js"


export async function getDriverStandings(req,res){

    let db;

    try{
            const {year,round} = req.params
            db = await openDataBase()


           const standings =  await db.all(`
                SELECT Points,StandingsPosition,Name,Team FROM Drivers_Data WHERE
                Year = ? 
                AND  Round = ?




            `,[year,round])


         res.json(standings)

    }
    catch(error){
        console.log(error)
    }
    finally{ await db.close()}







}