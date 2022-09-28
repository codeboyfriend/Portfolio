import { useState } from "react";

import { 
  Box,
  Text 
} from "@chakra-ui/react";

import { 
  FaBars,
  FaTimes
} from "react-icons/fa";

const Navbar = () => {
  const [ show, setShow ] = useState(false);

  return (
    <Box sx={{
      width: "100%",
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      pos: 'fixed',
      backgroundColor: 'rgb(3, 3, 3)',
      top: 0,
      left: 0
    }} className='navbar'>
      <Box>
        <Text sx={{
          fontSize: '1.5rem',
          fontWeight: '500',
          paddingTop: '10px'
        }}>codeboyfriend</Text>
      </Box>

      <Box className="large_nav">
        <ul>
          <li>About</li>
          <li>Portfolio</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </Box>

      <Box 
        className="small_nav"
        opacity={show ? 1 : 0 }
      >
        <ul>
          <li>About</li>
          <li>Portfolio</li>
          <li>Resume</li>
          <li style={{
            paddingBottom: '20px'
          }}>Contact</li>
        </ul>
      </Box>

      <Box className="extension" sx={{
          fontSize: '1.5rem',
          paddingTop: '10px'
        }}>
        <Text onClick={() => setShow(!show)}>
          {show ? <FaTimes /> : <FaBars />}
        </Text>
      </Box>
    </Box>
  )
}

export default Navbar