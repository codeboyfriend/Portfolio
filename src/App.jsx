import '../css/style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from '@chakra-ui/react';
import Navbar from './util/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Box className='shapes'>
          <Box sx={{
            w: '10rem',
            h: '10rem',
            backgroundColor: '#ca0707',
            borderRadius: '100%',
            pos: 'absolute',
            top: '-50px',
            left: '-55px'
          }}></Box>

          <Box sx={{
            w: '60rem',
            h: '20rem',
            backgroundColor: '#ca0707',
            borderRadius: '20px',
            pos: 'absolute',
            top: '105vh',
            right: '-65%',
            transform: 'rotate(-35deg)',
            zIndex: '-1'
          }} className='circle'>
          </Box>
        </Box>

        <Navbar />
        
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>

        <About />
    </div>
    </Router>
  )
}

export default App
