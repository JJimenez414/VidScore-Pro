import UploadPage from "../components/UploadPage";
import Header from "../components/Header"
import MetricTest from "../components/MetricTest"
import './App.css'

function App() {
  

  return (
    <>
      
      {/* displays the header */}
      <Header />
      
      {/* creates container for the dropbox and summary */}
      <div className="homePage">

      {/* display uploadpage with dropbox and metrics */}
      <UploadPage />
      </div>
      <MetricTest />
    </>
  )
}

export default App
