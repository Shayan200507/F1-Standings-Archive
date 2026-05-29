import type { JSX } from "react"




type propType = {

YearHandler: (event:React.ChangeEvent<HTMLInputElement|HTMLSelectElement >) => void
YearList: JSX.Element[]
Year: number




}





export function Form(prop: propType){


















    return(
   

    







    <form>


          <select defaultValue="" onChange={(event)=>prop.YearHandler(event)}   className="yearSelector" name="year">
            <option value="" disabled>--Select an option--</option>
            {prop.YearList}

          </select>



           {prop.Year !== -1 && <select  className="raceSelector" name="Race">
                <option value="" disabled>--Select an option--</option>

          </select>}



    </form>


)









}