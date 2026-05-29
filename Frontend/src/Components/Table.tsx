
import type {driverStandingElement} from "../App"

import type {constructorStandingElement} from "../App"
import type {JSX} from "react"

 type propType = {

    driverStandings: driverStandingElement[]
    constructorStandings: constructorStandingElement[]

}

export function Table(prop: propType):JSX.Element{

 
    const driverStandingsElements = prop.driverStandings.map((Element,index) =>{return <tr key={index}>


           <th>{Element.Points}</th>
           <th>{Element.StandingsPosition}</th>
           <th>{Element.Name}</th>
           <th>{Element.Team}</th>



    </tr>})
    
    
    return(

    <>
    <table className="driverStandings"> 
        <tr className="driverStandingsHeader">
           <th>Points</th>
           <th>StandingsPosition</th>
           <th>Name</th>
           <th>Team</th>
        </tr>
        {driverStandingsElements}
    </table>
    
    
    
    </>

)


    
}