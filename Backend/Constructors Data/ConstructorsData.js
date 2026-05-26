import fs from "fs/promises";
import path from "node:path"
import {RoundData} from "./RoundData.js"
import { readFile, writeFile } from "node:fs";



export async function ConstructorsData(year){
try{
const response = await fetch(`https://api.jolpi.ca/ergast/f1/${year}.json`)
const yearData = await  response.json()
const totalRoundsCount = yearData.MRData.total 
const returndata = []

for(let round  = 1; round <= totalRoundsCount; round++){

     returndata.push(await RoundData(round,year))
     



}

return returndata
}
catch(error){
    throw error
}



}

//console.log(await ConstructorsData(2025))


async function WriteFile(year){
try{
    const fileData =  await fs.readFile(path.join(import.meta.dirname,"ConstructorsData.json"),"utf8")
   const  data = JSON.parse(fileData)


    data.push(await ConstructorsData(year))


    await fs.writeFile(path.join(import.meta.dirname,"ConstructorsData.json"),JSON.stringify(data,null,2),"utf8")


}
catch(error){
    throw error
}





}


await WriteFile(2024)




