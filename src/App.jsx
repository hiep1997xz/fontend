import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import QuanlityQuickPrint from './pages/QuanlityQuickPrint'
import Register from './pages/Register/Register'
import './index.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quanlity-quick-print" element={<QuanlityQuickPrint />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
