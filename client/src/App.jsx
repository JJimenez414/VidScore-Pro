import DropContainer from "../components/DropContainer"
import Description from "../components/Description"
import Header from "../components/Header"
// import Request from "../components/APIRequest"
// import { useState, useEffect } from 'react'
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
      {/* className="container" */}
        <div className="grid"> 
          <DropContainer doesFileExists={doesFileExists}/>
          <Description fileExists={fileExists}/>
        </div>
    </>
  )
}

export default App
