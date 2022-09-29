import '../css/style.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from '@chakra-ui/react';
import Navbar from './util/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Icons from './util/Icons';

function App() {
  const bigCircle = {
    w: '20rem',
    h: '20rem',
    backgroundColor: '#ca0707',
    borderRadius: '20px',
    pos: 'absolute',
    transform: 'rotate(-45deg)',
    zIndex: '-1'
  }
  return (
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
            w: '25rem',
            h: '25rem',
            backgroundColor: '#ca0707',
            borderRadius: '100%',
            pos: 'absolute',
            top: '20vh',
            right: '-270px'
          }} className='land_circle'></Box>

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

          <Box sx={bigCircle} className='big_circle_a'></Box>

          <Box sx={bigCircle} className='big_circle_b'></Box>
        </Box>

        {/* <Icons /> */}
        <Navbar />
        <LandingPage />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
    </div>
  )
}

export default App
