import { 
  Box
} from "@chakra-ui/react";
import Pic from "../assets/image/Layer.png"; 

const LandingImage = () => {
  return (
    <Box className="LandingImage">
      <Box sx={{
          bgColor: '#fff'
        }} className="top"></Box>
      <Box sx={{
        w: '300px',
        m: '0 auto',
        border: '1px solid #fff',
        bgColor: '#000'      
    }} className="landing_con">
        <img src={Pic} alt="code" />
      </Box>
      <Box sx={{
          bgColor: '#fff'
        }} className="bottom"></Box>
    </Box>
  )
}

export default LandingImage;