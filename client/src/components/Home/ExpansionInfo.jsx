import { Box, Stack, useTheme, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

const data = [
  {
    title: "Quyết chiến Chuột tinh",
    img: "https://i.ibb.co/VVcHRkL/t.jpg",
    desc: "Với lòng trung thành và sức mạnh phi thường, họ đã viết nên những trang sử hào hùng, lưu danh muôn đời.",
  },
  {
    title: "Ngã ba Trung Hà",
    img: "https://i.ibb.co/MhgrNv5/UT-2024-11-05-at-18-03-03.png",
    desc: "Máu đổ xuống vì hòa bình và tự do của dân tộc, để lại trong lòng người sau bao niềm tự hào.",
  },
  {
    title: "Đông A Xích Thố",
    img: "https://i.ibb.co/VVcHRkL/t.jpg",
    desc: "Họ là những biểu tượng của lòng yêu nước, sự quả cảm và mưu lược.",
  },
  {
    title: "Vó ngựa rền vang",
    img: "https://i.ibb.co/MhgrNv5/UT-2024-11-05-at-18-03-03.png",
    desc: "Với lòng trung thành và sức mạnh phi thường, họ đã viết nên những trang sử hào hùng, lưu danh muôn đời.",
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