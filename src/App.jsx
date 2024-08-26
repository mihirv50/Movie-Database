import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"

const App = () => {
  return (
    <div className="w-screen bg-[#1F1E24] h-screen flex overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App