import { 
    Box,
    Text,
    Heading 
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { 
  FaTwitter, 
  FaGithub,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

const LandingContent = () => {
  const buttonStyle = {
    padding: "8px",
    cursor: 'pointer',
    fontSize: '.7rem'
  }
  return (
    <Box className="LandingContent">
        <Text className="greeting" sx={{
          fontSize: '.9rem',
          textTransform: 'uppercase',
          bgColor: '#ca0707',
          color: '#fff',
          padding: '.5rem',
          width: "35%",
          textAlign: 'center'
        }}>Hello, I am </Text>
        <Heading className="name" sx={{
          fontSize: '2.3rem',
          wordSpacing: '.3rem',
          margin: '.5rem 0'
        }}>
          Michael Oladimeji
        </Heading>
        <Text sx={{
          fontSize: '.8rem'
        }}>A young Frontend Developer with 2 years experience.</Text>

        <Box sx={{
            margin: '1rem 0'
        }}>
            <Text>Find Me on</Text>

            <Box sx={{
                marginTop: '.5rem',
                fontSize: '1.2rem',
                display: "flex"
            }}>
                <Link to={"twitter.com/codeboyfriend"}>
                  <Text marginRight={'.5rem'}><FaTwitter /></Text>
                </Link>
                <Link to={"github.com/codeboyfriend"}>
                  <Text marginRight={'.5rem'}><FaGithub /></Text>
                </Link>
                <Link to={"instagram.com/code_boyfriend"}>
                  <Text marginRight={'.5rem'}><FaInstagram /></Text>
                </Link>
                <Link to={"instagram.com/code_boyfriend"}>
                  <Text marginRight={'.5rem'}><FaLinkedinIn /></Text>
                </Link>
            </Box>
        </Box>

        <Box sx={{
            display: 'flex',
            margin: '1rem 0'
        }}>
            <Text 
              bgColor={"#ca0707"} 
              border={"1px solid #ca0707"}
              marginRight={"10px"}
              sx={buttonStyle}
            >View Work</Text>
            <Text
              border={"1px solid #fff"} 
              sx={buttonStyle}
            >Hire Me</Text>
        </Box>
    </Box>
  )
}

export default LandingContent;