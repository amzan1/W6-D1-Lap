import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Detals from "./pages/Detals"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detal/:id" element={<Detals/>}/>
      </Routes>
    </>
  )
}

export default App
