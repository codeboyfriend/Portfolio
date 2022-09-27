import { 
    Box,
    Text,
    Heading 
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import FaTimes from 'react-icons/fa';

const LandingContent = () => {
  return (
    <Box>
        <Text sx={{
            fontSize: '.9rem',
        }}>Hello, I am</Text>
        <Heading sx={{
            fontSize: '2.2rem'
        }}>
            Michael Oladimeji
        </Heading>
        <Text sx={{
            fontSize: '.8rem'
        }}>A young Frontend Developer with about 2 years experience.</Text>

        <Box>
            <Link to={'github.com/codeboyfriend'}>
                sdfd
            </Link>
        </Box>
    </Box>
  )
}

export default LandingContent;