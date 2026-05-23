



export const response = await fetch("https://api.jolpi.ca/ergast/f1/2026/1/driverStandings.json")

const f1Data = await  response.json()
console.log(f1Data.MRData.StandingsTable.StandingsLists)
console.log("Space                        ")
console.log(f1Data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0])