import { Box, Stack, useTheme, Typography, Button, useMediaQuery, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import AOS from 'aos';
import React, { useEffect, useLayoutEffect } from 'react';
import uiConfigs from "../../configs/ui.configs";
import { useResponsive } from "../../hooks/useResponsive";
import Image1 from "../../assets/images/read_1.jpg";
import Image2 from "../../assets/images/read_2.jpg";
import Image3 from "../../assets/images/read_3.jpg";
import Image4 from "../../assets/images/read_4.jpg";

const data = [
  {
    title: "Chương 01: Chiêu Văn Vương",
    img: Image1,
    desc: "Sương sớm vùng núi rừng càng làm cho cái rét mướt đầu đông thêm se sắt, đã cuối giờ Mão mà đất trời vẫn chưa thoát hẳn cơn ngái ngủ...",
    link: "/than-chien-trieu-tran-quyen-1-c1"
  },
  {
    title: "Chương 02: Hai vị khách không mời",
    img: Image2,
    desc: "Trần Nhật Duật ra khỏi trại của người Man một đoạn thì thấy trước mặt xuất hiện rừng người ngựa, cờ xí rợp trời...",
    link: "than-chien-trieu-tran-quyen-1-c2"
  },
  {
    title: "Chương 03: Ma Thị Cao Sơn",
    img: Image3,
    desc: "Để đến được bản Man, đoàn người phải trèo đèo, lội suối, tiến sâu vào trong vùng núi rừng trùng điệp nhất ở bên bờ Đông dòng sông Đà...",
    link: "/than-chien-trieu-tran-quyen-1-c3"
  },
  {
    title: "Chương 04: Bản lạ",
    img: Image4,
    desc: "Nhà sàn của quan tạo trong bản Man này cũng giống như mọi căn nhà sàn bình thường khác của người Man...",
    link: "/than-chien-trieu-tran-quyen-1-c4"
  },
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
          <Grid item xs={6} sm={3} key={index} >
            <Box
              data-aos={index == 0 || index == 1 ? "fade-right" : "fade-left"}
              sx={{
                display: "flex", // Sử dụng flexbox
                flexDirection: "column", // Căn theo chiều dọc
                alignItems: "center", // Căn giữa theo chiều ngang
                justifyContent: "center", // Căn giữa theo chiều dọc
                textAlign: "center",
                height: "100%",
                color: "text.primary",
                width: "100%",
                marginTop: "20px",
                "&:hover .media-info": { opacity: 1, bottom: 0 },
                "&:hover .media-back-drop, &:hover .media-play-btn": { opacity: 1 },
              }}
            >
              <Typography
                variant="h10"
                fontWeight="700"
                textTransform="uppercase"
                textAlign="center"
                sx={{
                  lineHeight: "1.5", // Đặt chiều cao dòng
                  height: "3em", // Chiều cao cố định (2 dòng, mỗi dòng 1.5em)
                  overflow: "hidden", // Ẩn nội dung vượt quá chiều cao
                  textOverflow: "ellipsis", // Hiển thị dấu "..."
                  whiteSpace: "normal", // Cho phép xuống dòng
                }}
              >
                {item.title}
              </Typography>

              <Box
                sx={{
                  ...uiConfigs.style.backgroundImage(item.img),
                  display: "flex", // Sử dụng flexbox để ảnh nằm giữa
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "160%",
                  position: "relative", // Để nút button có thể căn chỉnh chính xác
                  maxWidth: "100%",
                  height: "auto",
                  width: "100%",
                  color: "primary.contrastText",
                }}
              >
                <Box
                  className="media-back-drop"
                  sx={{
                    opacity: { xs: 1, sm: 0 },
                    transition: "all 0.3s ease",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundImage:
                      "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
                  }}
                />
                <Button
                  sx={{
                    whiteSpace: "nowrap",
                    display: "flex",
                    cursor: "pointer",
                    opacity: { xs: 1, sm: 0 },
                    transition: "all 0.3s ease",
                    position: "absolute",
                    top: "70%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  variant={"contained"}
                  onClick={() => {
                    window.open(item?.link, "_blank");
                  }}
                  className="media-play-btn"
                >
                  Đọc thử
                </Button>
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  marginTop: "10px",
                  WebkitLineClamp: 2,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {item.desc}
              </Typography>
            </Box>
          </Grid>
        ))}

      </Grid >
    </Box >
  );
};

export default ExpansionInfo;