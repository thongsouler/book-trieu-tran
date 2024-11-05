import { Box, Stack, useTheme, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

const data = [
  {
    type: "left",
    img: "https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617763137764-D5F6028LYPHLAP5BIK0Q/mines.jpg",
    title: "Brave the Depths of a Forgotten Kingdom",
    desc1: "Beneath the fading town of Dirtmouth sleeps a vast, ancient kingdom. Many are drawn beneath the surface, searching for riches, or glory, or answers to old secrets.",
    desc2: "As the enigmatic Knight, you’ll traverse the depths, unravel its mysteries and conquer its evils."
  },
  {
    type: "right",
    img: "https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617763137764-D5F6028LYPHLAP5BIK0Q/mines.jpg",
    title: "Brave the Depths of a Forgotten Kingdom",
    desc1: "Beneath the fading town of Dirtmouth sleeps a vast, ancient kingdom. Many are drawn beneath the surface, searching for riches, or glory, or answers to old secrets.",
    desc2: "As the enigmatic Knight, you’ll traverse the depths, unravel its mysteries and conquer its evils."
  },
  {
    type: "left",
    img: "https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617763137764-D5F6028LYPHLAP5BIK0Q/mines.jpg",
    title: "Brave the Depths of a Forgotten Kingdom",
    desc1: "Beneath the fading town of Dirtmouth sleeps a vast, ancient kingdom. Many are drawn beneath the surface, searching for riches, or glory, or answers to old secrets.",
    desc2: "As the enigmatic Knight, you’ll traverse the depths, unravel its mysteries and conquer its evils."
  }
]

const StoryDescription = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box>
      {data.map((item, index) => (
        <Box
          sx={{
            height: "100%",
            display: { xs: "block", sm: "flex" },
            alignItems: "center",
            color: "text.primary",
            width: "100%",
            marginTop: "20px"
          }}
        >
          <Stack
            spacing={2}
            direction={{ xs: "column", sm: "row" }}
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                height: "100%",
                display: { xs: "block", sm: "flex" },
                alignItems: "center",
                color: "text.primary",
                width: { xs: "100%", sm: "100%" },
                paddingX: { xs: "0px", sm: "30px" },
                order: item.type == "left" ? 1 : 2
              }}
            >
              <img
                src={item.img}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  width: "100%"
                }}
              />
            </Box>
            <Box
              sx={{
                height: "100%",
                alignItems: "center",
                color: "text.primary",
                width: { xs: "100%", sm: "100%" },
                paddingX: { xs: "0px", sm: "30px" },
                order: item.type == "left" ? 2 : 1
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  alignItems: "center",
                  color: "text.primary",
                  width: "100%",
                }}
              >
                <Typography variant="h5" fontWeight="700" textTransform="uppercase" textAlign="left">
                  {item.title}
                </Typography>
              </Box>
              <Box
                sx={{
                  height: "100%",
                  alignItems: "center",
                  color: "text.secondary",
                  width: "100%"
                }}
              >
                <p >
                  {item.desc1}
                </p>
              </Box>
              <Box
                sx={{
                  height: "100%",
                  alignItems: "center",
                  color: "text.secondary",
                  width: "100%"
                }}
              >
                <p>
                  {item.desc2}
                </p>
              </Box>
            </Box>
          </Stack >
        </Box >
      ))}
    </Box>
  );
};

export default StoryDescription;