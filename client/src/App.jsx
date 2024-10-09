import DropBoxContainer from "../components/DropBoxContainer"
import Metrics from "../components/Metrics"
import Header from "../components/Header"
import './App.css'
import { useState } from "react"


function App() {
  
  const [fileExists, setFileExists] = useState();

  function doesFileExists(exists) {
    setFileExists(exists)
  }

  return (
    <>
      <Header />
      <div className="grid">
        <DropBoxContainer doesFileExists={doesFileExists}/>
        <Metrics fileExists={fileExists}/>
      </div>
    </>
  )
}

export default App
