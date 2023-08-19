import Register from "./components/Register"
import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PrivateRoute from "./utils/PrivateRoute"

function App() {

  return (
    <Router>
      <>
        <Routes>
          <Route path="register" element={<Register />}/>
          <Route path="/" element={<PrivateRoute Component={Home}/>}/>
        </ Routes>
      </>
    </Router>
  )
}

export default App
