import type { JSX } from "react"




type propType = {

YearHandler: (event:React.ChangeEvent<HTMLInputElement|HTMLSelectElement >) => void
YearList: JSX.Element[]
Year: number
RaceHandler: (event:React.ChangeEvent<HTMLInputElement|HTMLSelectElement >) => void
RaceList: JSX.Element[]
Race: string



}





export function Form(prop: propType){


















    return(
   

    







    <form>


          <select defaultValue="" onChange={(event)=>prop.YearHandler(event)}   className="yearSelector" name="year">
            <option value="" disabled>--Select an option--</option>
            {prop.YearList}

          </select>



           {prop.Year !== -1 && <select  onChange={(event) => prop.RaceHandler(event)} key={prop.Year} defaultValue="" className="raceSelector" name="Race">
                <option value="" disabled>--Select an option--</option>
                {prop.RaceList}

          </select>}



    </form>


)









}