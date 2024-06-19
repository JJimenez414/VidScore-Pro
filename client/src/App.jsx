import Dropdown from "../components/Dropdown"
import Description from "../components/Description"
import Header from "../components/Header"
import { useState, useEffect } from 'react'
import './App.css'


function App() {
  

  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8080/Video')
      .then(response => response.json())
      .then (data => {
        setMessage(data.message);
        console.log(data.message);
      });
  }, []) 

  useEffect(() => {

      fetch('http://127.0.0.1:8080/gVideo', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({videoFile: "This is a video"})
      })
      .then(response => response.json())
      .then(data => console.log(data.id))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <Header />
        {message && (<h1>{message}</h1>)}
        <div className="container"> 
          <Dropdown />
          <Description />

        </div>
    </>
  )
}

export default App
