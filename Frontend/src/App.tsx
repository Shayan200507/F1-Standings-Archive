
import './App.css'
import {Header} from "./Components/Header.tsx"
import {SelectionHeading} from "./Components/SelectionHeading.tsx"
import {Form} from "./Components/Forms.tsx"
import {useState} from "react"
import type {JSX}from "react"
import {useEffect} from "react"



function App() {

  const [selectionState,setSelectionState] = useState<string>("Select a Year") 
  const [SelectedYear,setSelectedYear] = useState<number>(-1)



const [years,setyears] = useState<JSX.Element[]>([])
  

 useEffect(   ()=>{

     


     fetch(`http://localhost:8000/api/years`).then(
       res => res.json()).then(data => setyears(data.map((element:{Year:number},index:number): JSX.Element =>{ return  <option key={index}   value={element.Year}>{element.Year}</option>})))
        
     




  },[])



  function HandleYear(event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement >):void{

       const year = event.target.value;
       setSelectedYear(Number(year))
       setSelectionState("Select a Race")



  }


  return (
    <>
      <Header/>

      <div className='appBody'>
      <SelectionHeading  text = {selectionState} />
      <Form  YearHandler= {HandleYear} YearList={years}  Year={SelectedYear}/>
      </div>
    </>
  )
}

export default App


