import { 
    Box,
    Text
} from "@chakra-ui/react";

import { 
    Swiper, 
    SwiperSlide
} from 'swiper/react';

import {
    FaArrowRight
} from 'react-icons/fa'

import { Pagination } from 'swiper';

import 'swiper/css';
import "swiper/css/pagination";

import kipnote from "../assets/image/kipnote.png";
import kwiz from "../assets/image/kwiz.png";
import koiin from "../assets/image/koiin.png";
import lively from "../assets/image/lively.png";
import sneeaker from "../assets/image/sneeaker.png";
import nysc from "../assets/image/nysc.png";

const Work = () => {
  return (
    <Swiper
        className="projects"
        pagination={true}
        modules={[Pagination]}
        spaceBetween={50}
        breakpoints= {{
            0: {
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
            <a href="https://kipNote.netlify.app">
                <Box className="box">
                    <img src={kipnote} alt="kipNote" />
                </Box>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="https://sneeakers.netlify.app">
                <Box className="box">
                    <img src={sneeaker} alt="sneeakers" />
                </Box>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="https://kwiiz.netlify.app">
                <Box className="box">
                    <img src={kwiz} alt="kwiiz" />
                </Box>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="https://koiin.netlify.app">
                <Box className="box">
                    <img src={koiin} alt="koiin" />
                </Box>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="https://live-ly.netlify.app">
                <Box className="box">
                    <img src={lively} alt="lively" />
                </Box>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="https://nysc-portal.netlify.app">
                <Box className="box">
                    <img src={nysc} alt="nysc" />
                </Box>  
            </a>
        </SwiperSlide>
    </Swiper>
  )
}

export default Work