import { Routes, Route, Navigate } from "react-router"
import Header from "./components/header/Header"
import Planet from "./components/planet/Planet"
import { useState } from "react";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState<string>('Mercury');

  console.log(selectedPlanet)
  return (
    <>
      <Header  setSelectedPlanet={setSelectedPlanet} />
      <Routes>
        <Route path="/" element={<Navigate to={`/${selectedPlanet}`} />} />
        <Route path="/:planet" element={<Planet />} />
      </Routes>
    </>
  )
}

export default App
