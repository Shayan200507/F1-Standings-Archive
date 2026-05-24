import {getDataOfRound} from "./test.js"
import fs from "fs/promises";
import path from "node:path"
import { setTimeout } from "node:timers/promises";


//export const response = await fetch("https://api.jolpi.ca/ergast/f1/2026/1/driverStandings.json")
//export const response = await fetch("https://api.jolpi.ca/ergast/f1/2025.json")
//const f1Data = await  response.json()
//console.log(f1Data.MRData.StandingsTable.StandingsLists)
//console.log("Space                        ")
//console.log(f1Data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4])

//console.log(f1Data)



async function getDataOfYear(year){

const response = await fetch(`https://api.jolpi.ca/ergast/f1/${year}.json`)
const yearData = await  response.json()
const totalRoundsCount = yearData.MRData.total // get the total rounds for each year



//const roundResponse = await fetch(`https://api.jolpi.ca/ergast/f1/${year}/${2}/driverStandings.json`)
//const roundData = await roundResponse.json()
//console.log(roundData.MRData.StandingsTable.StandingsLists[0])
const returnData = []

for(let round = 1 ; round <=totalRoundsCount; round ++){

     returnData.push( await getDataOfRound(year,round))  
     
   
}


return returnData

}
 


//console.log(await getDataOfYear("1950"))



 async function writeFile(yr){


try{
       const fileData = await fs.readFile(path.join("Backend","Data","Data.json"),"utf8")
       const parsedData = JSON.parse(fileData)
       
        
       
       const yrData = await getDataOfYear(yr)
       parsedData.push(yrData)
       await  fs.writeFile(path.join("Backend","Data","Data.json"),JSON.stringify(parsedData,null,2)+"\n","utf8")

       
}
catch(error){

console.log(`error in year:${yr}`)
throw error

}   
       
  
   
    
 }

 //await writeFile(2022)



 for(let i = 2010 ; i >= 2010; i-- ){


      await writeFile(i)
      await setTimeout(2000)



 }










