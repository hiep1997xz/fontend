import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import QuanlityQuickPrint from './pages/QuanlityQuickPrint'
import Register from './pages/Register/Register'
import './index.css'
import InOffset from './pages/InOffset'
import Decal from './pages/Decal'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quanlity-quick-print" element={<QuanlityQuickPrint />} />
          <Route path="/in-offset" element={<InOffset />} />
          <Route path="/decal" element={<Decal />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
