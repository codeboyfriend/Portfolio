import { 
    Box,
    Text,
    Progress 
} from "@chakra-ui/react";

// Import Swiper React components
import { 
    Swiper, 
    SwiperSlide
} from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';

import AboutImage from "./AboutImage";


const AboutContent = () => {
    const textStyle = {
        width: '7rem',
        fontSize: '.9rem',
        textTransform: 'uppercase',
        bgColor: '#ca0707',
        color: '#fff',
        padding: '.5rem',
        textAlign: 'center',
        marginBottom: '.5rem'
    }
  return (
        <Swiper
            pagination={{
                type: "fraction",
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            scrollbar={{ draggable: true }}
            spaceBetween={50}
            slidesPerView={1}
        >
            <SwiperSlide>
                <Box sx={{
                width: '100%',
                minH: '100vh',
                alignItems: 'center',
                padding: '10px 0'
            }} className="swiper_box">
                    <AboutImage />
                    <Box>
                        <Text className="greeting" sx={textStyle}>About Me </Text>

                        <Text className="write_up" sx={{
                            fontSize: '.8rem'
                        }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, labore officiis fugiat voluptas maxime quam nemo illum culpa ea beatae nulla magni esse repellat voluptatibus mollitia quod qui error, voluptatum cumque ad. Numquam placeat iusto explicabo, minus voluptatem odit amet facilis non possimus veritatis cum a soluta. Soluta, incidunt iste.</Text>
                    </Box>
                </Box>
            </SwiperSlide>

            <SwiperSlide>
                <Box sx={{
                width: '100%',
                minH: '100vh',
                alignItems: 'center'
            }} className="swiper_box">
                    <AboutImage />
                    
                    <Box>
                        <Box sx={{
                            marginBottom: '1rem'
                        }}>
                            <Text 
                                className="greeting" 
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
                            </Box>
                        </Box>

                        <Box>
                            <Text className="greeting" sx={textStyle}>Other Skills</Text>

                            <Box className="badges">
                                <Box>
                                    <Progress value={10} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </SwiperSlide>

            <SwiperSlide>
                <Box sx={{
                width: '100%',
                minH: '100vh',
                alignItems: 'center'
            }} className="swiper_box">
                    <AboutImage />
                    <Box>
                        <Text className="greeting" sx={{
                            width: '7rem',
                            fontSize: '.9rem',
                            textTransform: 'uppercase',
                            bgColor: '#ca0707',
                            color: '#fff',
                            padding: '.5rem',
                            textAlign: 'center',
                            marginBottom: '.5rem'
                        }}>About Me </Text>

                        <Text className="write_up" sx={{
                            fontSize: '.8rem'
                        }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, labore officiis fugiat voluptas maxime quam nemo illum culpa ea beatae nulla magni esse repellat voluptatibus mollitia quod qui error, voluptatum cumque ad. Numquam placeat iusto explicabo, minus voluptatem odit amet facilis non possimus veritatis cum a soluta. Soluta, incidunt iste.</Text>
                    </Box>
                </Box>
            </SwiperSlide>
        </Swiper>
  )
}

export default AboutContent