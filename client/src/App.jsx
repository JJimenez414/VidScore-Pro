import Dropdown from "../components/Dropdown"
import Description from "../components/Description"
import Header from "../components/Header"
// import Request from "../components/APIRequest"
// import { useState, useEffect } from 'react'
import './App.css'


function App() {
  

  // const [message, setMessage] = useState('');
  //   useEffect(() => {
  //     Request.getVideo()
  //       .then(data => {setMessage(data.message)})
  //   }, []) 

  //   useEffect(() => {Request.postVideo("Ello")}, []);


  return (
    <>
      <Header />
        <div className="container"> 
          <Dropdown />
          <Description />

        </div>
    </>
  )
}

export default App
