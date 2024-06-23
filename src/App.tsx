import { Routes, Route, Navigate } from "react-router"
import Header from "./components/header/Header"
import Planet from "./components/planet/Planet"
import { useState } from "react";
import { TPlanet } from "./types/Types";
import data from '../data.json'

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState<TPlanet>(data[0]);

  console.log(selectedPlanet)
  return (
    <>
      <Header data={data}  setSelectedPlanet={setSelectedPlanet} />
      <Routes>
        <Route path="/" element={<Navigate to={`/${selectedPlanet?.name}`} />} />
        <Route path="/:planet" element={<Planet selectedPlanet={selectedPlanet}/>} />
      </Routes>
    </>
  )
}

export default App
