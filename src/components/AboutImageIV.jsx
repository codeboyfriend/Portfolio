import { 
    Box
  } from "@chakra-ui/react";
  import Pic from "../assets/image/Layer3.png"; 
  
  const AboutImageIV = () => {
    return (
      <Box data-aos="fade-right" className="AboutImage">
        <Box sx={{
            bgColor: '#ca0707',
            zIndex: '-1'
        }} className="top"></Box>
        <Box sx={{
          maxW: '300px',
          m: '0 auto',
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
  
  export default AboutImageIV;