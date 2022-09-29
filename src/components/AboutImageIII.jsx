import { 
    Box
  } from "@chakra-ui/react";
  import Pic from "../assets/image/skill.jpg"; 
  
  const AboutImageIII = () => {
    return (
      <Box className="AboutImage">
        <Box sx={{
            bgColor: '#fff',
            zIndex: '-1'
        }} className="top"></Box>
        <Box sx={{
          maxW: '300px',
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
  
  export default AboutImageIII;