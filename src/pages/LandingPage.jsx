import { 
  Box,
  Text 
} from "@chakra-ui/react";

import { 
  FaArrowCircleUp
} from "react-icons/fa";

import LandingImage from "../components/LandingImage";
import LandingContent from "../components/LandingContent";

const LandingPage = () => {
  return (
    <Box className="LandingPage" id="#" sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '30px'
    }}>
        <LandingContent />
        <LandingImage />

        <a href={"#"}>
          <Text sx={{
            fontSize: '1.5rem',
            pos: 'absolute',
            bottom: '.5rem',
            right: '1rem',
            zIndex: '2000'
          }}><FaArrowCircleUp /></Text>
        </a>
    </Box>
  )
}

export default LandingPage