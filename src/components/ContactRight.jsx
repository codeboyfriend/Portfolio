import { 
    Box,
    Text
} from "@chakra-ui/react"

const ContactRight = () => {
  return (
    <Box sx={{
        bgColor: '#f4f4f4',
        color: '#ca0707',
        padding: '15px',
        borderBottomLeftRadius: '15px',
        borderTopRightRadius: '15px'
    }} className="contactRightBox">
        <Text sx={{
            fontWeight: '500',
            fontSize: '1.2rem',
            marginBottom: '.3rem'
        }}>MESSAGE ME</Text>

        <Box className="form">
            <form action="">
                <input type={'text'} placeholder={'Name'} />
                <input type={'email'} placeholder={'Email'} />
                <input type={'text'} placeholder={'Subject'} />
                <textarea placeholder="Message" cols="30" rows="10"></textarea>
                <button type="submit" className="btn">SEND</button>
            </form>
        </Box>
    </Box>
  )
}

export default ContactRight