import { Box, Stack, useTheme, Typography, Button } from "@mui/material";
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

const PurchaseBook = () => {
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
          marrginTop: "20px"
        }}
      >
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
              alignItems: "left",
              color: "text.primary",
              width: "100%",
            }}
          >
            <Typography variant="h6" fontWeight="700" textTransform="uppercase" textAlign="left">
              ĐẶT MUA LIỀN TAY, HƯỞNG ƯU ĐÃI LỚN
            </Typography>
          </Box>
          <Box
            sx={{
              height: "100%",
              alignItems: "left",
              color: "text.secondary",
              width: "100%",
              marginTop: "30px"
            }}
          >
            <p >
            Pre-Order “Thần Chiến Triều Trần” cũng là một cách để hỗ trợ tài chính cho tác giả, với mong ước thực hiện Dự án này để làm mới phong cách kể truyện về lịch sử, khiến cho các bạn trẻ nói riêng và người dân Việt Nam nói chung, có được món ăn tinh thần hấp dẫn về đề tài vốn bị đánh giá là khô khan. Thông qua đó, khơi gợi lên sự tò mò, thích thú, hứng khởi của giới trẻ đối với lịch sử nước nhà.
            </p>
          </Box>
          <Box sx={{
            height: "100%",
            display: "flex",
            alignItems: "left",
            color: "text.primary",
            width: { sm: "unset" },
            marginTop: "20px"
          }}>
            <Button
              variant="contained"
              size="large"
              // startIcon={<PlayArrowIcon />}
              // component={Link}
              // to={routesGen.mediaDetail(mediaType, item.id)}
              sx={{ width: "max-content" }}
            >
              LIÊN HỆ MUA HÀNG
            </Button>
          </Box>
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
            src={"https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1618301847645-ET681WARSCYE555KSEPX/albums.jpg"}
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "100%"
            }}
          />
        </Box>
      </Stack >
    </Box>
  );
};

export default PurchaseBook;