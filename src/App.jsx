import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Home from './Pages/Home'
import Details from './Pages/Details'

function App() {
 

  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
      </Routes>
    </Router>
    <Router basename="/MOVIE-EXPLORER"></Router>
    </div>
  )
}

export default App
