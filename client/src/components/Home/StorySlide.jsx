import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import "swiper/swiper.min.css";
import "./mySwiperStyles.css"; // Custom styles
import AOS from 'aos';
import React, { useLayoutEffect } from 'react';
import Image1 from "../../assets/images/home-slide.jpg";
import Image2 from "../../assets/images/end_slide.jpg";

// Example source images (dynamic list)
const source = [
  {
    img: Image1,
  },
  {
    img: Image2,
  },
];

const StorySlide = ({ media = source }) => {
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
      }}
    >
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
          clickable: true,
        }}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
      >
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                paddingTop: {
                  xs: "130%",
                  sm: "80%",
                  md: "60%",
                  lg: "45%"
                },
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${item.img})`,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <Box
        className="swiper-button-prev-custom"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          width: '30px',
          height: '30px',
          background: '#f20',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        }}
      >
        &lt;
      </Box>
      <Box
        className="swiper-button-next-custom"
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          width: '30px',
          height: '30px',
          background: '#f20',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        }}
      >
        &gt;
      </Box>
    </Box>
  );
};

export default StorySlide;
