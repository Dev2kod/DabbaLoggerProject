import './App.css'
import Navbar from './components/Navbar'
import RenderData from './components/RenderData'
import Home from './pages/Home'
import Signup from './pages/Signup'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A1C2BD] to-[#E7F2EF] text-[#19183B]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
