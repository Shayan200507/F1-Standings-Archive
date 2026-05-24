
const returnData = []
const roundResponse = await fetch(`https://api.jolpi.ca/ergast/f1/${2025}/${3}/driverStandings.json`)
const roundData = (await roundResponse.json()).MRData.StandingsTable.StandingsLists[0]
//console.log(returnData)



const index  = 0


const element = {

    Year: Number(roundData.season),
    Round: Number(roundData.round),
    Points: Number(roundData.DriverStandings[index].points),
    Position: Number(roundData.DriverStandings[index].position),
    Name: roundData.DriverStandings[index].givenName + roundData.DriverStandings[index].familyName




}
console.log(roundData.DriverStandings[1])