import { Box, Stack, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css"; // Import styles
import "swiper/swiper.min.css";
import "./mySwiperStyles.css"; // Import custom styles
import AOS from 'aos';
import React, { useEffect , useLayoutEffect} from 'react';

const media = [
  {
    img: "https://i.ibb.co/2FjkpFz/12.jpg",
  },
  {
    img: "https://i.ibb.co/2FjkpFz/12.jpg",
  },
  {
    img: "https://i.ibb.co/2FjkpFz/12.jpg",
  },
  {
    img: "https://i.ibb.co/2FjkpFz/12.jpg",
  },
]

const StorySlide = () => {
  useLayoutEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'linear',
      delay: 100,
    });
  }, []);
  return (
    <Box
      data-aos="fade-up"
      sx={{
        position: "relative",
        color: "primary.contrastText",
        marginTop: "50px"
      }}>
      <Swiper
        grabCursor={true}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        style={{ width: "100%", height: "max-content" }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true, // Dots are clickable
        }}
        navigation={true} // Enables navigation arrows
      >
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            <Box sx={{
              paddingTop: {
                xs: "130%",
                sm: "80%",
                md: "60%",
                lg: "45%"
              },
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundImage: `url(${item.img})`
            }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default StorySlide;