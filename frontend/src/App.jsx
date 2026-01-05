import './App.css'
import Navbar from './components/Navbar'
import RenderData from './components/RenderData'
import Signup from './pages/Signup'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div className="bg-[#030303] min-h-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<RenderData/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
