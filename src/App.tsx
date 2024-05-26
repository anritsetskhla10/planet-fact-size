import Header from "./components/header/Header"
import { Routes, Route, Navigate } from "react-router"
import Planet from "./components/planet/Planet"


function App() {


  return (
    <>
      <Header></Header>
      <Routes>
      <Route path="/" element = {<Navigate to={"/Mercury"}/>} ></Route>
        <Route path="/:planet" element = {<Planet/>} ></Route>
      </Routes>
    </>
  )
}

export default App
