import { Box, Stack, useTheme, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

const data = [
  {
    title: "Hidden Dreams",
    img: "https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617763137764-D5F6028LYPHLAP5BIK0Q/mines.jpg",
    desc: "Beneath the fading town of Dirtmouth sleeps a vast, ancient kingdom. Many are drawn beneath the surface, searching for riches, or glory, or answers to old secrets.",
  },
  {
    title: "Hidden Dreams",
    img: "https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617763137764-D5F6028LYPHLAP5BIK0Q/mines.jpg",
    desc: "Beneath the fading town of Dirtmouth sleeps a vast, ancient kingdom. Many are drawn beneath the surface, searching for riches, or glory, or answers to old secrets.",
  },
  {
    title: "Hidden Dreams",
    img: "https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617763137764-D5F6028LYPHLAP5BIK0Q/mines.jpg",
    desc: "Beneath the fading town of Dirtmouth sleeps a vast, ancient kingdom. Many are drawn beneath the surface, searching for riches, or glory, or answers to old secrets.",
  },
  {
    title: "Hidden Dreams",
    img: "https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1617763137764-D5F6028LYPHLAP5BIK0Q/mines.jpg",
    desc: "Beneath the fading town of Dirtmouth sleeps a vast, ancient kingdom. Many are drawn beneath the surface, searching for riches, or glory, or answers to old secrets.",
  }
]

const ExpansionInfo = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box>
      <Stack
        spacing={4}
        direction={{ xs: "column", sm: "row" }}
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {data.map((item, index) => (
          <Box
            sx={{
              height: "100%",
              display: { xs: "block", sm: "block" },
              alignItems: "center",
              color: "text.primary",
              width: "100%",
              marginTop: "20px"
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
              <Typography variant="h6" fontWeight="700" textTransform="uppercase" textAlign="center">
                {item.title}
              </Typography>
            </Box>
            <Box
              sx={{
                height: "100%",
                display: { xs: "block", sm: "block" },
                alignItems: "center",
                color: "text.primary",
                width: { xs: "100%", sm: "100%" },
                paddingX: { xs: "0px", sm: "30px" },
                marginTop: { xs: "15px", sm: "15px" },
                marginBottom: { xs: "15px", sm: "15px" },
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
                color: "text.secondary",
                width: "100%",
                textAlign: "center"
              }}
            >
              <p >
                {item.desc}
              </p>
            </Box>
          </Box>
        ))}
      </Stack >
    </Box>
  );
};

export default ExpansionInfo;