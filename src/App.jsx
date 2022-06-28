import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <Router>
        <Home />
        {/* <Routes>
          <Route path="/" component={Header} />
          <Route path="/login" component={Login} />
        </Routes> */}
      </Router>
    </>
  )
}

export default App
