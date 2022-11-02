import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import QuanlityQuickPrint from './pages/QuanlityQuickPrint'
import Register from './pages/Register/Register'
import './index.css'
import InOffset from './pages/InOffset'
import Decal from './pages/Decal'
import Details from './pages/Details'
import Webside from './pages/Webside'

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
          <Route path="/details" element={<Details />} />
          <Route path="/webside" element={<Webside />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
