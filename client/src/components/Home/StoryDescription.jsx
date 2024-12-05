import { useResponsive } from "../../hooks/useResponsive";
import { Box, Stack, useTheme, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import AOS from 'aos';
import React, { useEffect, useLayoutEffect, useMemo } from 'react';
import Image1 from "../../assets/images/quyet_chien_chuot_tinh.jpg";
import Image2 from "../../assets/images/nga_ba_trung_ha.jpg";
import Image3 from "../../assets/images/thap_tam_trai.jpg";
import Image4 from "../../assets/images/dong_a_xich_tho.jpg";
import Image5 from "../../assets/images/lieu_va_hoe.jpg";

const StoryDescription = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { isMobile } = useResponsive();

  const data = useMemo(() => {
    return [
      {
        type: "left",
        img: Image1,
        title: "Thần Chiến Triều Trần: Huyền Thoại Dân Tộc",
        desc1: "Trong thời kỳ hưng thịnh của nhà Trần, đất nước Đại Việt đối mặt với vô số hiểm nguy từ những thế lực ngoại bang hùng mạnh. Giữa thời loạn lạc, những chiến binh anh dũng đã đứng lên bảo vệ quê hương.",
        desc2: "Với lòng trung thành và sức mạnh phi thường, họ đã viết nên những trang sử hào hùng, lưu danh muôn đời."
      },
      {
        type: isMobile ? "left" : "right",
        img: Image2,
        title: "Những Vị Tướng Kiệt Xuất",
        desc1: "Trần Hưng Đạo, Trần Quang Khải, Trần Nhật Duật - những vị tướng tài ba không chỉ được biết đến bởi sự thông thái mà còn vì lòng quyết tâm chống lại sự xâm lăng tàn bạo của quân Nguyên Mông.",
        desc2: "Họ là những biểu tượng của lòng yêu nước, sự quả cảm và mưu lược."
      },
      {
        type: "left",
        img: Image3,
        title: "Cuộc Đối Đầu Sinh Tử",
        desc1: "Trong mỗi trận chiến khốc liệt, các chiến binh đã chiến đấu đến hơi thở cuối cùng, từng bước ngăn chặn kẻ thù từ phương Bắc. Những con sông, ngọn núi đều khắc ghi dấu ấn của những cuộc chiến sinh tử ấy.",
        desc2: "Máu đổ xuống vì hòa bình và tự do của dân tộc, để lại trong lòng người sau bao niềm tự hào."
      },
      {
        type: isMobile ? "left" : "right",
        img: Image4,
        title: "Lòng Dũng Cảm Của Quân Sĩ",
        desc1: "Những người lính trẻ đã chứng minh lòng dũng cảm của mình qua từng trận chiến. Họ không chỉ chiến đấu vì mệnh lệnh mà còn vì tình yêu quê hương.",
        desc2: "Họ đã để lại những bài học lớn lao về lòng kiên cường và sự hy sinh cao cả."
      },
      {
        type: "left",
        img: Image5,
        title: "Dấu Ấn Trong Lịch Sử",
        desc1: "Những chiến thắng vẻ vang của quân dân Đại Việt đã để lại dấu ấn sâu đậm trong lịch sử dân tộc. Những trận địa vang danh mãi mãi.",
        desc2: "Tinh thần đoàn kết và lòng yêu nước chính là sức mạnh giúp họ vượt qua mọi thử thách."
      }
    ];
  }, [isMobile]);

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
          key={index}
          data-aos="fade-up"
          sx={{
            height: "100%",
            display: { xs: "block", sm: "flex" },
            alignItems: "center",
            color: "text.primary",
            width: "100%",
            marginTop: "20px",
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
                order: item.type === "left" ? 1 : 2,
                textAlign: "center",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  width: "80%",
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
                order: item.type === "left" ? 2 : 1,
              }}
            >
              <Box sx={{ height: "100%", color: "text.primary", width: "100%" }}>
                <Typography variant="h5" fontWeight="700" textTransform="uppercase" textAlign="left">
                  {item.title}
                </Typography>
              </Box>
              <Box sx={{ height: "100%", color: "text.secondary", width: "100%" }}>
                <p className="text-normal">{item.desc1}</p>
              </Box>
              <Box sx={{ height: "100%", color: "text.secondary", width: "100%" }}>
                <p className="text-normal">{item.desc2}</p>
              </Box>
            </Box>
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default StoryDescription;
