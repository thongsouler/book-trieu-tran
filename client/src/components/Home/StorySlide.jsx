import { Box, Stack, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";

const media = [
  {
    img: "https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/3d24e1c8-d368-4b05-bb5f-00888e238d12/Grimm.jpg",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/3d24e1c8-d368-4b05-bb5f-00888e238d12/Grimm.jpg",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/3d24e1c8-d368-4b05-bb5f-00888e238d12/Grimm.jpg",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/3d24e1c8-d368-4b05-bb5f-00888e238d12/Grimm.jpg",
  },
]

const StorySlide = () => {

  return (
    <Box sx={{
      position: "relative",
      color: "primary.contrastText",
      marginTop: "20px"
    }}>
      <Swiper
        grabCursor={true}
        loop={true}
        // modules={[Autoplay]}
        style={{ width: "100%", height: "max-content" }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
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