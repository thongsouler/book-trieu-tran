import { Box, Stack, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import uiConfigs from "../../configs/ui.configs";
import HomeSlideImg from "../../assets/images/home-slide.jpg";
import LogoImg from "../../assets/images/logo.png"; // Import ảnh logo

const media = [
  {
    img: HomeSlideImg,
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
                backgroundImage: `url(${item.img})`,
                transition: "background-image 0.5s ease",
              }}
            >
              {/* Placeholder logo */}
              {!isLoaded[index] && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "25%", // Kích thước logo = 1/4 chiều rộng khung
                    height: "auto",
                    zIndex: 3,
                  }}
                >
                  <img
                    src={LogoImg}
                    alt="Logo placeholder"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Box>
              )}

              {/* Preload ảnh chính */}
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
