import Dropdown from "../components/Dropdown"
import Description from "../components/Description"
import Header from "../components/Header"
import './App.css'


function App() {
  

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
