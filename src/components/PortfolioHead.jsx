import { 
    Box,
    Text 
  } from "@chakra-ui/react";

const PortfolioHead = () => {
    const textStyle = {
      width: '8rem',
      fontSize: '.9rem',
      textTransform: 'uppercase',
      bgColor: '#ca0707',
      color: '#fff',
      padding: '1rem .5rem',
      textAlign: 'center',
      margin: '0 auto',
      marginBottom: '1rem'
    }

  return (
    <Box sx={{
        marginBottom: '40px'
    }}>
        <Text className="greeting bgStyle" sx={textStyle}>My Portfolio</Text>

        <Text sx={{
            fontSize: '.9rem'
        }}>Showcasing some of my best work</Text>
    </Box>
  )
}

export default PortfolioHead