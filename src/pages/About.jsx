import { 
    Box
} from "@chakra-ui/react";

import AboutContent from "../components/AboutContent";

const About = () => {
    return (
    <Box className="About" id="about" height={'100%'}>
        <AboutContent />
    </Box>
    )
}

export default About