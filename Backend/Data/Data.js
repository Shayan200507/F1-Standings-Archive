



//export const response = await fetch("https://api.jolpi.ca/ergast/f1/2026/1/driverStandings.json")
//export const response = await fetch("https://api.jolpi.ca/ergast/f1/2025.json")
//const f1Data = await  response.json()
//console.log(f1Data.MRData.StandingsTable.StandingsLists)
//console.log("Space                        ")
//console.log(f1Data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4])

//console.log(f1Data)



async function getYearofData(year){

const response = await fetch(`https://api.jolpi.ca/ergast/f1/${year}.json`)
const yearData = await  response.json()
const totalRoundsCount = yearData.MRData.total // get the total rounds for each year



//const roundResponse = await fetch(`https://api.jolpi.ca/ergast/f1/${year}/${2}/driverStandings.json`)
//const roundData = await roundResponse.json()
//console.log(roundData.MRData.StandingsTable.StandingsLists[0])
const returnData = []

for(let round = 1 ; round ++; round <totalRoundsCount){

    const roundResponse = await fetch(`https://api.jolpi.ca/ergast/f1/${year}/${round}/driverStandings.json`)
    const roundData = await roundResponse.json()
}













}
getYearofData("1950")







