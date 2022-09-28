import { 
  Box,
  Text 
} from "@chakra-ui/react";

import { 
  FaArrowCircleUp
} from "react-icons/fa";

import { Link } from "react-router-dom";
import LandingImage from "../components/LandingImage";
import LandingContent from "../components/LandingContent";

const LandingPage = () => {
  return (
    <Box className="LandingPage" sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }}>
        <LandingContent />
        <LandingImage />

        <Link to={"/"}>
          <Text sx={{
            fontSize: '1.5rem',
            pos: 'absolute',
            bottom: '.5rem',
            right: '1rem',
          }}><FaArrowCircleUp /></Text>
        </Link>
    </Box>
  )
}

export default LandingPage