import { 
  Box 
} from "@chakra-ui/react";
import LandingImage from "../components/LandingImage";
import LandingContent from "../components/LandingContent";

const LandingPage = () => {
  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '0 25px' 
    }}>
        <LandingContent />
        <LandingImage />
    </Box>
  )
}

export default LandingPage