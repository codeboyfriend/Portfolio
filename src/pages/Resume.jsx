import { 
    Box,
    Text 
} from "@chakra-ui/react"

const Resume = () => {
    const textStyle = {
        width: '8rem',
        fontSize: '.9rem',
        textTransform: 'uppercase',
        color: '#fff',
        textAlign: 'center',
        margin: '0 auto',
        marginBottom: '1rem',
        backgroundColor: '#ca0707',
        padding: '1rem .5rem'
    }

    const buttonStyle = {
        padding: "8px",
        cursor: 'pointer',
        fontSize: '.7rem',
        border: '1px solid #fff',
        textAlign: 'center',
        margin: '0 auto'
    }

  return (
    <Box sx={{
        h: '100%',
    }} className="resume" id="resume">
        <Text 
            sx={textStyle}
            className="bgStyle"
        >My Resume</Text>

        <Text data-aos="fade-up" data-aos-offset="200" sx={{
            fontSize: '.9rem',
            margin: '1rem 0'
        }}>
            Courteous and ethusiatic. I am interested in IT and anything in its orbit. I recently began to be fascinated by web programming e.g developing apps and building websites. I have worked with senior devs on building different projects. I gained experience of working in this area.
            As this area complements my studies, I keen to gain more experience in the field. For this reasons. I am looking for a company willing to offer me a placement among their developers. In return, I would offer my full commitment and be pleasant and friendly addiction to your team.
        </Text>

        <Box>
            <Text data-aos="fade-in" data-aos-delay='300'
                sx={buttonStyle} 
                width={'7rem'}
            >Download CV</Text>
        </Box>
    </Box>
  )
}

export default Resume