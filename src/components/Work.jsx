import { 
    Box,
    Text
} from "@chakra-ui/react";

// Import Swiper React components
import { 
    Swiper, 
    SwiperSlide
} from 'swiper/react';

import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

import Card from "../assets/image/card.png";

const Work = () => {
  return (
    <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={50}
        breakpoints= {{
            0: {
                // width: 376,
                slidesPerView: 1,
            },

            650: {
                spaceBetween: 20,
                slidesPerView: 2,
            },

            1024: {
                spaceBetween: 40,
                slidesPerView: 3,
            },

            1440: {
                slidesPerView: 4,
            }
        }}


        style={{
            padding: '0'
        }}
    >
        <SwiperSlide>
            <a href="kipNote.netlify.app">
                <Box className="box">
                    <img src={Card} alt="kipNote" />
                </Box>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="sneeakers.netlify.app">
                <Box className="box">
                    <img src={Card} alt="sneeakers" />
                </Box>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="kwiiz.netlify.app">
                <Box className="box">
                    <img src={Card} alt="kwiiz" />
                </Box>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="koiin.netlify.app">
                <Box className="box">
                    <img src={Card} alt="koiin" />
                </Box>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="live-ly.netlify.app">
                <Box className="box">
                    <img src={Card} alt="lively" />
                </Box>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <Box className="box">
                <img src={Card} alt="kipNote" />
            </Box>
        </SwiperSlide>
    </Swiper>
  )
}

export default Work