import fs from "fs/promises";
import path from "node:path"



/*const response = await fetch("https://api.jolpi.ca/ergast/f1/2025/1/constructorStandings.json")
const data  =  await response.json()

console.log(data.MRData.StandingsTable.StandingsLists[0])
console.log(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
*/


export async function RoundData(round,year){


 try{   
const response = await fetch(`https://api.jolpi.ca/ergast/f1/${year}/${round}/constructorStandings.json`)
const data  =  await response.json()

//console.log(data.MRData.StandingsTable.StandingsLists[0])
const Year = Number(data.MRData.StandingsTable.StandingsLists[0].season)
const Round = Number(data.MRData.StandingsTable.StandingsLists[0].round)
//console.log(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
const returnData = []


for(let i = 0 ;  i <data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.length ; i++ ){
const returnobj = {

         Year: Year,
         Round: Round,
         Position: Number(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].position),
         Team: data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].Constructor.constructorId,
         Points: data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].points

  }

   returnData.push(returnobj)

}

return returnData
 }
 catch(err){
    throw err
 }



}

//console.log(await RoundData(5,2025))