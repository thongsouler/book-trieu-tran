import { Box, Stack, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import uiConfigs from "../../configs/ui.configs";
import HomeSlideImg from "../../assets/images/home-slide.jpg";

// Example low-quality base64 image (replace this with your actual LQIP base64 or low-quality URL)
const lowQualityImage = "data:image/png;base64,....";

const media = [
  {
    img: HomeSlideImg,
    lowResImg: lowQualityImage, // Add a low-quality placeholder
  },
];

const HomeSlide = ({ mediaType, mediaCategory }) => {
  const theme = useTheme();
  const [isLoaded, setIsLoaded] = useState(Array(media.length).fill(false));

  const handleImageLoad = (index) => {
    setIsLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <Box
      sx={{
        position: "relative",
        filter: "brightness(1.2) contrast(1.1)",
        "&:hover .bg-children": { opacity: 1 },
        "&::before": {
          content: '""',
          width: "100%",
          height: "5%",
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 2,
          pointerEvents: "none",
          ...uiConfigs.style.gradientBgImage[theme.palette.mode],
        },
      }}
      className="bg-farther"
    >
      <Swiper
        grabCursor={true}
        loop={true}
        style={{ width: "100%", height: "max-content" }}
      >
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: "relative",
                paddingTop: {
                  xs: "130%",
                  sm: "80%",
                  md: "60%",
                  lg: "45%",
                },
                backgroundPosition: "top",
                backgroundSize: "cover",
                backgroundImage: `url(${isLoaded[index] ? item.img : item.lowResImg})`,
                transition: "filter 0.3s ease",
                filter: isLoaded[index] ? "none" : "blur(20px)",
              }}
            >
              <img
                src={item.img}
                alt={`Slide ${index}`}
                style={{ display: "none" }}
                onLoad={() => handleImageLoad(index)}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HomeSlide;
