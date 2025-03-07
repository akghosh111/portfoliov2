import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<Landing/>} path="/"></Route>
      </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
