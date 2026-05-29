
import './App.css'
import {Header} from "./Components/Header.tsx"
import {SelectionHeading} from "./Components/SelectionHeading.tsx"
import {Form} from "./Components/Forms.tsx"
import {Table} from "./Components/Table.tsx"
import React, {useState} from "react"
import type {JSX}from "react"
import {useEffect} from "react"

export type driverStandingElement = {
     Points : number
    StandingsPosition: number
    Name: string
    Team: string

}

export type constructorStandingElement = {

     Standings: number
     Team: string
     Points: number


}

function App() {

  const [selectionState,setSelectionState] = useState<string>("Select a Year") 
  const [SelectedYear,setSelectedYear] = useState<number>(-1)
  const [Races,setRaces] = useState<string[]>([]) 
  const [SelectedRace,setSelectedRace] = useState<string>("")
  const [DriverStandings,setDriverStandings] = useState<driverStandingElement[]>([])
  const [ConstructorStandings,setConstructorStandings] = useState<constructorStandingElement[]>([])



const [years,setyears] = useState<JSX.Element[]>([])
  


//fetch of the years
 useEffect(()=>{

     


     fetch(`http://localhost:8000/api/years`).then(
       res => res.json()).then(data => setyears(data.map((element:{Year:number},index:number): JSX.Element =>{ return  <option key={index}   value={element.Year}>{element.Year}</option>})))
        
     




  },[])




//fetch of the races
       useEffect(()=>{
       
        if(SelectedYear === -1){ return}
        fetch(`http://localhost:8000/api/Races?year=${SelectedYear}`).then(res => res.json())
        .then(data=>setRaces(data.map((Element:{RaceName:string}) => {return Element.RaceName})))}
      
      ,[SelectedYear])



//setRaces(data.map((Element:{RaceName: string},index: number): JSX.Element =>{ return  <option key={index}   value={Element.RaceName}>{Element.RaceName}</option>})


       


//fetch of the standings

        useEffect(() =>{

               if(SelectedRace === ""){ return}
               console.log(SelectedYear)
               console.log(SelectedRace)
               
               fetch(`http://localhost:8000/api/getDriverStanding/${SelectedYear}/${Races.indexOf(SelectedRace)}`)
               .then(res => res.json())
               .then(data =>setDriverStandings(data) )


               fetch(`http://localhost:8000/api/getConstructorStanding/${SelectedYear}/${Races.indexOf(SelectedRace)}`)
               .then(res => res.json())
               .then(data => setConstructorStandings(data))

              
            

        },[SelectedRace])


  



  function HandleYear(event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement >):void{

       const year = event.target.value;
       setSelectedYear(Number(year))
       setSelectionState("Select a Race")
  }


  function HandleRaces(event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>){
       const race: string = event.target.value
       setSelectedRace(race)
       setSelectionState("")
        


  }


  return (
    <>
      <Header/>

      <div className='appBody'>
      <SelectionHeading  text = {selectionState} />
      <Form  YearHandler= {HandleYear} YearList={years}  Year={SelectedYear}  RaceHandler={HandleRaces} RaceList={Races.map((Element:string,index: number): JSX.Element =>{ return  <option key={index}   value={Element}>{Element}</option>})} Race = {SelectedRace} />
      
      <Table  driverStandings={DriverStandings}  constructorStandings={ConstructorStandings} />
      </div>
    </>
  )
}

export default App
