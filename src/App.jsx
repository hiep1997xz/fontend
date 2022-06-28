import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './layouts/Header/Header'

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Routes>
          <Route path="/" component={Header} />
          <Route path="/login" component={Login} />
        </Routes> */}
      </Router>
    </>
  )
}

export default App
