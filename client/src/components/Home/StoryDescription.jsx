import { Box, Stack, useTheme, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import AOS from 'aos';
import React, { useEffect, useLayoutEffect } from 'react';

const data = [
  {
    type: "left",
    img: "https://i.ibb.co/SmGLwRT/2.jpg",
    title: "Thần Chiến Triều Trần: Huyền Thoại Một Dân Tộc",
    desc1: "Trong thời kỳ hưng thịnh của nhà Trần, đất nước Đại Việt đối mặt với vô số hiểm nguy từ những thế lực ngoại bang hùng mạnh. Giữa thời loạn lạc, những chiến binh anh dũng đã đứng lên bảo vệ quê hương.",
    desc2: "Với lòng trung thành và sức mạnh phi thường, họ đã viết nên những trang sử hào hùng, lưu danh muôn đời."
  },
  {
    type: "right",
    img: "https://i.ibb.co/CKt8pQX/1.jpg",
    title: "Những Vị Tướng Kiệt Xuất",
    desc1: "Trần Hưng Đạo, Trần Quang Khải, Trần Nhật Duật - những vị tướng tài ba không chỉ được biết đến bởi sự thông thái mà còn vì lòng quyết tâm chống lại sự xâm lăng tàn bạo của quân Nguyên Mông.",
    desc2: "Họ là những biểu tượng của lòng yêu nước, sự quả cảm và mưu lược."
  },
  {
    type: "left",
    img: "https://i.ibb.co/g9jL27p/3.jpg",
    title: "Cuộc Đối Đầu Sinh Tử",
    desc1: "Trong mỗi trận chiến khốc liệt, các chiến binh đã chiến đấu đến hơi thở cuối cùng, từng bước ngăn chặn kẻ thù từ phương Bắc. Những con sông, ngọn núi đều khắc ghi dấu ấn của những cuộc chiến sinh tử ấy.",
    desc2: "Máu đổ xuống vì hòa bình và tự do của dân tộc, để lại trong lòng người sau bao niềm tự hào."
  }
]

const StoryDescription = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
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
      {data.map((item, index) => (
        <Box
          data-aos="fade-up"
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
                paddingX: { xs: "0px", sm: "60px" },
                order: item.type == "left" ? 1 : 2
              }}
            >
              <img
                src={item.img}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  width: "80%"
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