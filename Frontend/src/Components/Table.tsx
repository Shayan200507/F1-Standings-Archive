
import type {driverStandingElement} from "../App"

import type {constructorStandingElement} from "../App"
import type {JSX} from "react"

 type propType = {

    driverStandings: driverStandingElement[]
    constructorStandings: constructorStandingElement[]

}

export function Table(prop: propType):JSX.Element{

 
    const driverStandingsElements = prop.driverStandings.map((Element,index) =>{return <tr key={index}>
  

           <td>{Element.Points}</td>
           <td>{Element.StandingsPosition}</td>
           <td>{Element.Name}</td>
           <td>{Element.Team}</td>



    </tr>})


      const constructorStandingElements = prop.constructorStandings.map((Element,index) =>{return <tr key={index}>
  

           <td>{Element.Points}</td>
           <td>{Element.Standings}</td>
           <td>{Element.Team}</td>



    </tr>})
    
    
    return(

    <>
    <div className="standingsTables">
    {prop.driverStandings.length !== 0 &&<table className="driverStandings"> 
        <tr className="  driverStandingsHeader">
           <th>Points</th>
           <th>Standings Position</th>
           <th>Name</th>
           <th>Team</th>
        </tr>
        {driverStandingsElements}
    </table>}


    {prop.constructorStandings.length !== 0 &&<table className="constructorStandings"> 
        <tr className="constructorStandingsHeader">
           <th>Standings</th>
           <th>Team</th>
           <th>Points</th>
        </tr>
        {constructorStandingElements}
    </table>}
    
    </div>
    
    </>

)


    
}