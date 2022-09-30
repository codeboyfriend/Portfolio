import { 
    Box,
    Text,
    CircularProgress,
    CircularProgressLabel
} from "@chakra-ui/react";

import { 
    FaGlobe,
    FaEnvelope,
    FaPhoneAlt,
    FaFacebook
  } from "react-icons/fa"; 

// Import Swiper React components
import { 
    Swiper, 
    SwiperSlide
} from 'swiper/react';

import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';

import AboutImage from "./AboutImage";
import AboutImageII from "./AboutImageII";
import AboutImageIII from "./AboutImageIII";
import AboutImageIV from "./AboutImageIV";


const AboutContent = () => {
    const textStyle = {
        fontSize: '.9rem',
        textTransform: 'uppercase',
        bgColor: '#ca0707',
        color: '#fff',
        padding: '.5rem',
        textAlign: 'center',
        marginBottom: '.5rem'
    }

    const heading = {
        fontSize: '1.2rem',
        paddingBottom: '.3rem',
        color: '#ca0707'
    }

    const text = {
        color: '#f4f4f4',
        fontSize: '.9rem'
    }
  return (
        <Swiper
            pagination={{
                type: "fraction",
            }}
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
        >
            <SwiperSlide>
                <Box sx={{
                    width: '100%',
                    h: '100%',
                    alignItems: 'center',
                    paddingBottom: '30px'
            }} className="swiper_box">
                    <AboutImageII />
                    <Box>
                        <Text 
                            width={'7rem'}
                            className="greeting bgStyle" 
                            sx={textStyle}>About Me </Text>

                        <Text data-aos="fade-left" className="write_up" sx={{
                            fontSize: '.8rem'
                        }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, labore officiis fugiat voluptas maxime quam nemo illum culpa ea beatae nulla magni esse repellat voluptatibus mollitia quod qui error, voluptatum cumque ad. Numquam placeat iusto explicabo, minus voluptatem odit amet facilis non possimus veritatis cum a soluta. Soluta, incidunt iste.</Text>
                    </Box>
                </Box>
            </SwiperSlide>

            <SwiperSlide>
                <Box sx={{
                    width: '100%',
                    h: '100%',
                    alignItems: 'center',
                    paddingBottom: '30px'
            }} className="swiper_box">
                    <AboutImageIII />
                    
                    <Box>
                        <Box sx={{
                            marginBottom: '1rem'
                        }}>
                            <Text 
                                className="greeting bgStyle" 
                                width={'8rem'} 
                                sx={textStyle}>Skills</Text>

                            <Box className="badges">
                                <img src="https://img.shields.io/badge/-HTML5-ffffff?style=flat&logo=html5" alt="html" />
                                <img src="https://img.shields.io/badge/-CSS3-222222?style=flat&logo=css3&logoColor=61DAFB" alt="css" />
                                <img src="https://img.shields.io/badge/-Sass-ffffff?style=flat&logo=sass" alt="sass" />
                                <img src="https://img.shields.io/badge/-JavaScript-222222?style=flat&logo=javascript" alt="javascript" />
                                <img src="https://img.shields.io/badge/-React-222222?style=flat&logo=React&logoColor=61DAFB" alt="react" />
                                <img src="https://img.shields.io/badge/-Chakra%20UI-222222?style=flat&logo=Chakraui&logoColor=61DAFB" alt="chakra" />
                                <img src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=ffffff" alt="firebase" />
                                <img src="https://img.shields.io/badge/-Git-222222?style=flat&logo=git&logoColor=F05032" alt="git" />
                                <img src="https://img.shields.io/badge/-Github-222222?style=flat&logo=github&logoColor=ffffff" alt="github" />
                                <img src="https://img.shields.io/badge/-Npm-222222?style=flat&logo=npm&logoColor=F05032" alt="npm" />
                                <img src="https://img.shields.io/badge/-VSCode-222222?style=flat&logo=visualstudiocode&logoColor=61DAFB" alt="vscode" />
                            </Box>
                        </Box>

                        <Box>
                            <Text 
                                className="greeting bgStyle"
                                width={'8rem'} 
                                sx={textStyle}>Other Skills</Text>

                            <Box className="badges">
                                <Box>
                                    <div style={{
                                        margin: '.5rem 0'
                                    }}>
                                        <img src="https://img.shields.io/badge/-MsWord-222222?style=flat&logo=microsoftword&logoColor=61DAFB" alt="MsWord" />
                                    </div>
                                    <CircularProgress value={70} color='#ca0707'>
                                        <CircularProgressLabel>70%</CircularProgressLabel>
                                    </CircularProgress>
                                </Box>

                                <Box>
                                <div style={{
                                        margin: '.5rem 0'
                                    }}>
                                        <img src="https://img.shields.io/badge/-MsExcel-222222?style=flat&logo=microsoftexcel&logoColor=61DAFB" alt="MsExcel" />
                                    </div>
                                    <CircularProgress value={40} color='#ca0707'>
                                        <CircularProgressLabel>40%</CircularProgressLabel>
                                    </CircularProgress>
                                </Box>

                                <Box>
                                <div style={{
                                        margin: '.5rem 0'
                                    }}>
                                        <img src="https://img.shields.io/badge/-Photoshop-222222?style=flat&logo=adobephotoshop&logoColor=61DAFB" alt="Photoshop" />
                                    </div>
                                    <CircularProgress value={30} color='#ca0707'>
                                        <CircularProgressLabel>30%</CircularProgressLabel>
                                    </CircularProgress>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </SwiperSlide>

            <SwiperSlide>
                <Box sx={{
                width: '100%',
                h: '100%',
                alignItems: 'center',
                paddingBottom: '30px'
            }} className="swiper_box">
                    <AboutImageIV />
                    <Box>
                        <Text className="greeting bgStyle" sx={{
                            width: '7rem',
                            fontSize: '.9rem',
                            textTransform: 'uppercase',
                            bgColor: '#ca0707',
                            color: '#fff',
                            padding: '.5rem',
                            textAlign: 'center',
                            marginBottom: '.5rem'
                        }}>More</Text>

                        <Box className="info">
                            <Box>
                                <Text sx={heading}><FaGlobe /></Text>
                                <Text sx={text}>Oladimeji Michael</Text>
                            </Box>

                            <Box>
                                <Text sx={heading}><FaEnvelope /></Text>
                                <Text sx={text}>oladimejimichael224@gmail.com</Text>
                            </Box>

                            <Box>
                                <Text sx={heading}><FaPhoneAlt /></Text>
                                <Text sx={text}>+234 903 6190 420</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </SwiperSlide>
        </Swiper>
  )
}

export default AboutContent