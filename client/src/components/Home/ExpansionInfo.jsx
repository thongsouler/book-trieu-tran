import { Box, Stack, useTheme, Typography, Button, useMediaQuery, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import AOS from 'aos';
import React, { useEffect, useLayoutEffect } from 'react';
import uiConfigs from "../../configs/ui.configs";
import { useResponsive } from "../../hooks/useResponsive";
const data = [
  {
    title: "Quyết chiến Chuột tinh",
    img: "https://i.ibb.co/VVcHRkL/t.jpg",
    desc: "Với lòng trung thành và sức mạnh phi thường, họ đã viết nên những trang sử hào hùng, lưu danh muôn đời.",
    link: "/than-chien-trieu-tran-quyen-1-c22"
  },
  {
    title: "Ngã ba Trung Hà",
    img: "https://i.ibb.co/MhgrNv5/UT-2024-11-05-at-18-03-03.png",
    desc: "Máu đổ xuống vì hòa bình và tự do của dân tộc, để lại trong lòng người sau bao niềm tự hào.",
    link: "than-chien-trieu-tran-quyen-1-c12"
  },
  {
    title: "Đông A Xích Thố",
    img: "https://i.ibb.co/VVcHRkL/t.jpg",
    desc: "Họ là những biểu tượng của lòng yêu nước, sự quả cảm và mưu lược.",
    link: "/than-chien-trieu-tran-quyen-1-c20"
  },
  {
    title: "Vó ngựa rền vang",
    img: "https://i.ibb.co/MhgrNv5/UT-2024-11-05-at-18-03-03.png",
    desc: "Với lòng trung thành và sức mạnh phi thường, họ đã viết nên những trang sử hào hùng, lưu danh muôn đời.",
    link: "/than-chien-trieu-tran-quyen-1-c23"
  }
]


const ExpansionInfo = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useLayoutEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'linear',
      delay: 100,
    });
  }, []);
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {data.map((item, index) => (
          <Grid item xs={6} sm={3}>
            <Box
              data-aos={index == 0 || index == 1 ? "fade-right" : "fade-left"}
              sx={{
                height: "100%",
                display: { xs: "block", sm: "block" },
                alignItems: "center",
                color: "text.primary",
                width: "100%",
                marginTop: "20px",
                "&:hover .media-info": { opacity: 1, bottom: 0 },
                "&:hover .media-back-drop, &:hover .media-play-btn": { opacity: 1 },
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

                <Box sx={{
                  ...uiConfigs.style.backgroundImage(item.img),
                  paddingTop: "160%",
                  "&:hover .media-info": { opacity: 1, bottom: 0 },
                  "&:hover .media-back-drop, &:hover .media-play-btn": { opacity: 1 },
                  maxWidth: "100%",
                  height: "auto",
                  width: "100%",
                  color: "primary.contrastText"
                }}>
                  <>
                    <Box className="media-back-drop" sx={{
                      opacity: { xs: 1, sm: 0 },
                      transition: "all 0.3s ease",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      backgroundImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))"
                    }} />
                    <Button
                      key={index}
                      sx={{
                        // display: { xs: "none", md: "flex" },
                        whiteSpace: "nowrap",
                        display: "flex",
                        cursor: "pointer",
                        opacity: { xs: 1, sm: 0 },
                        transition: "all 0.3s ease",
                        position: "absolute",
                        top: "70%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        "& .MuiButton-startIcon": { marginRight: "-4px" },
                      }}
                      variant={"contained"}
                      onClick={() => {
                        window.open(item?.link, "_blank"); // Mở trong tab mới
                      }}
                      className="media-play-btn"
                    >
                      Đọc thử
                    </Button>
                  </>
                </Box>
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
                <p style={{
                  WebkitLineClamp: 2,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical"
                }}>
                  {item.desc}
                </p>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid >
    </Box >
  );
};

export default ExpansionInfo;