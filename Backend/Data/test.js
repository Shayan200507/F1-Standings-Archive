/*
const returnData = []
const roundResponse = await fetch(`https://api.jolpi.ca/ergast/f1/${2025}/${24}/driverStandings.json`)
const roundData = (await roundResponse.json()).MRData.StandingsTable.StandingsLists[0]
//console.log(returnData)



const index  = 0


const element = {

    Year: Number(roundData.season),
    Round: Number(roundData.round),
    Points: Number(roundData.DriverStandings[index].points),
    Position: Number(roundData.DriverStandings[index].position),
    Name: roundData.DriverStandings[index].Driver.givenName + roundData.DriverStandings[index].Driver.familyName,
    Team: roundData.DriverStandings[index].Constructors[roundData.DriverStandings[index].Constructors.length-1].constructorId


}
*/



export async function getDataOfRound(year,round){

const returnData = []


try{
const roundResponse = await fetch(`https://api.jolpi.ca/ergast/f1/${year}/${round}/driverStandings.json`)
const roundData = (await roundResponse.json()).MRData.StandingsTable.StandingsLists[0]



for(let index = 0; index < roundData.DriverStandings.length ;index++ ){

const element = {

    Year: Number(roundData.season),
    Round: Number(roundData.round),
    Points: Number(roundData.DriverStandings[index].points),
    StandingsPosition: Number.isNaN(Number(roundData.DriverStandings[index].position)) ? null : Number(roundData.DriverStandings[index].position),
    Name: roundData.DriverStandings[index].Driver.givenName +" "+roundData.DriverStandings[index].Driver.familyName,
    Team: roundData.DriverStandings[index].Constructors[roundData.DriverStandings[index].Constructors.length-1].constructorId


}

returnData.push(element)


}

}
catch(error){
    console.log(`error fetching data from year: ${year} and round: ${round}`)
    throw error

}



  return returnData 




}



