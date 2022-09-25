import { 
  Box,
  Text 
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box sx={{
      width: "100%",
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 10px'
    }} className='navbar'>
      <Box>
        <Text sx={{
          fontSize: '1.5rem',
          fontWeight: '500',
          paddingTop: '10px'
        }}>Codeboyfriend</Text>
      </Box>

      <Box>
        <ul>
          <li>About</li>
          <li>Portfolio</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </Box>
    </Box>
  )
}

export default Navbar