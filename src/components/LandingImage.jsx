import { 
  Box
} from "@chakra-ui/react";
import Pic from "../assets/image/land.jpg"; 

const LandingImage = () => {
  return (
    <Box className="LandingImage">
      <img src={Pic} alt="code" />
    </Box>
  )
}

export default LandingImage;