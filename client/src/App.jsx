import Dropdown from "../components/Dropdown"
import Grade from "../components/Grade"
import Description from "../components/Description"
import Feedback from "../components/Feedback"
import FileDrop from "../components/FileDrop"
import Header from "../components/Header"
import './App.css'


function App() {
  

  return (
    <>
      <Header />
      <div className="grid"> 
      
        <h1> Hello world</h1>

        <Dropdown />
        <Description />
        <Grade />
        <Feedback />
        <FileDrop />
      
      </div>
    </>
  )
}

export default App
