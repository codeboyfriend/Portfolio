import { 
    Box
  } from "@chakra-ui/react";
  import Pic from "../assets/image/Layer.png"; 
  
  const AboutImage = () => {
    return (
      <Box className="AboutImage">
        <Box sx={{
            bgColor: '#ca0707'
        }} className="top"></Box>
        <Box sx={{
          border: '1px solid #ca0707',
          bgColor: '#000'      
      }} className="landing_con">
          <img src={Pic} alt="code" />
        </Box>
        <Box sx={{
            bgColor: '#ca0707'
        }} className="bottom"></Box>
      </Box>
    )
  }
  
  export default AboutImage;