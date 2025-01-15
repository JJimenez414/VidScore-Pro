import LandingPage from '../components/Landing Page/LandingPage'
import ToolPage from '../components/Tool Page/ToolPage';
import Header from "../components/Header"
import Footer from '../components/Footer'

import { Route, Routes } from "react-router-dom";

import './App.css'

function App() {
  

  return (
    <>

      <Header /> 

      <Routes>
        
        <Route path="Easy-Social-Media/" element={<LandingPage/>}/>
        
        <Route path="Easy-Social-Media/tool" element={<ToolPage/>}/>

      </Routes>

      <Footer />

    </>
  )
}

export default App
