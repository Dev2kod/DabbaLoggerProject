import './App.css'
import Navbar from './components/Navbar'
import RenderData from './components/RenderData'
import Home from './pages/Home'
import Signup from './pages/Signup'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#A1C2BD] to-[#E7F2EF] text-[#19183B]">
      <Navbar />
      {/* This takes remaining height automatically */}
      <main className="flex-1 flex bg-amber-600 mt-5">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  );
}

export default App