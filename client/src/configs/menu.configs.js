import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import ContactsIcon from '@mui/icons-material/Contacts';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
    icon: <ContactsIcon />,
    state: "tv",
    idScroll: "idScrollBuyNow"
  },
  {
    display: "Đọc thử",
    path: "/search",
    icon: <SearchOutlinedIcon />,
    state: "search",
    idScroll: "idScrollRead"
  },
  {
    display: "Mua ngay",
    path: "/",
    icon: <AddShoppingCartIcon />,
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