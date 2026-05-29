
import './App.css'
import {Header} from "./Components/Header.tsx"
import {SelectionHeading} from "./Components/SelectionHeading.tsx"
import {Form} from "./Components/Forms.tsx"
import React, {useState} from "react"
import type {JSX}from "react"
import {useEffect} from "react"



function App() {

  const [selectionState,setSelectionState] = useState<string>("Select a Year") 
  const [SelectedYear,setSelectedYear] = useState<number>(-1)
  const [Races,setRaces] = useState<JSX.Element[]>([])
  const [SelectedRace,setSelectedRace] = useState<string>("")



const [years,setyears] = useState<JSX.Element[]>([])
  

 useEffect(()=>{

     


     fetch(`http://localhost:8000/api/years`).then(
       res => res.json()).then(data => setyears(data.map((element:{Year:number},index:number): JSX.Element =>{ return  <option key={index}   value={element.Year}>{element.Year}</option>})))
        
     




  },[])




       useEffect(()=>{
       
        if(SelectedYear === -1){ return}
        fetch(`http://localhost:8000/api/Races?year=${SelectedYear}`).then(res => res.json())
        .then(data=>setRaces(data.map((Element:{RaceName: string},index: number): JSX.Element =>{ return  <option key={index}   value={Element.RaceName}>{Element.RaceName}</option>} )))






       },[SelectedYear])





  



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
      <Form  YearHandler= {HandleYear} YearList={years}  Year={SelectedYear}  RaceHandler={HandleRaces} RaceList={Races} Race = {SelectedRace} />
      </div>
    </>
  )
}

export default App


