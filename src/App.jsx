import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Trending from "./Components/Trending"
import Popular from "./Components/Popular"
import Movies from "./Components/Movies"
import Tvshows from "./Components/Tvshows"
import People from "./Components/People"
import Tvdetails from "./Components/Tvdetails"
import Peopledetails from "./Components/Peopledetails"
import Moviedetails from "./Components/Moviedetails"
import Trailer from "./Components/templates/Trailer"
import Notfound from "./Components/Notfound"

const App = () => {
  return (
    <div className="w-screen bg-[#1F1E24] h-screen flex">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movie/details/:id" element={<Moviedetails/>}>
         <Route path="/movie/details/:id/trailer" element={<Trailer/>}/>
        </Route>
        <Route path="/tv" element={<Tvshows/>}/>
        <Route path="/tv/details/:id" element={<Tvdetails/>}>
        <Route path="/tv/details/:id/trailer" element={<Trailer/>}/>
        </Route>
        <Route path="/people" element={<People/>}/>
        <Route path="/people/details/:id" element={<Peopledetails/>}/>
        <Route path="*" element={<Notfound/>}/>        
      </Routes>
    </div>
  )
}

export default App