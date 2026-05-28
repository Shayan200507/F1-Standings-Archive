
import './App.css'
import {Header} from "./Components/Header.tsx"
import {SelectionHeading} from "./Components/SelectionHeading.tsx"
import {useState} from "react"

function App() {

  const {selectionState,setSelectionState} = useState<string>("Select a Year") 


  return (
    <>
      <Header/>
      <SelectionHeading  text:string = {selectionState} />
    </>
  )
}

export default App
