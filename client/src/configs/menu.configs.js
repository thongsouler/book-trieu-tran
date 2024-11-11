import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";

const main = [

  {
    display: "Giới thiệu",
    path: "/movie",
    icon: <SlideshowOutlinedIcon />,
    state: "movie",
    idScroll: "idScrollBuyNow"
  },
  {
    display: "Liên hệ",
    path: "/tv",
    icon: <LiveTvOutlinedIcon />,
    state: "tv",
    idScroll: "idScrollBuyNow"
  },
  {
    display: "Đọc thử",
    path: "/search",
    icon: <SearchOutlinedIcon />,
    state: "search",
    idScroll: "idScrollBuyNow"
  },
  {
    display: "Mua ngay",
    path: "/",
    icon: <HomeOutlinedIcon />,
    state: "home",
    idScroll: "idScrollBuyNow"
  }
];

const user = [
  {
    display: "favorites",
    path: "/favorites",
    icon: <FavoriteBorderOutlinedIcon />,
    state: "favorite"
  },
  {
    display: "reviews",
    path: "/reviews",
    icon: <RateReviewOutlinedIcon />,
    state: "reviews"
  },
  {
    display: "password update",
    path: "/password-update",
    icon: <LockResetOutlinedIcon />,
    state: "password.update"
  }
];

const menuConfigs = { main, user };

export default menuConfigs;