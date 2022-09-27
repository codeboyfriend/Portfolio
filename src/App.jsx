import '../css/style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './util/Navbar';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <LandingPage />
    </div>
    </Router>
  )
}

export default App
