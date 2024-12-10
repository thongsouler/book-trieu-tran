import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoW from "../../assets/images/logo.png";

const Logo = ({ scrollTo }) => {
  const theme = useTheme();
  const navigate = useNavigate(); // Hook để điều hướng

  return (
    <img
      src= {LogoW}
      alt="Logo"
      style={{
        cursor: 'pointer', 
        height: '55px', 
        width: 'auto',
      }}
      onClick={() => {
        if (window.location.pathname !== '/') {
          navigate('/'); // Chuyển hướng tới trang chủ nếu không phải trang chủ
        } else if (scrollTo) {
          scrollTo('idScrollDes'); // Nếu đã ở trang chủ, thực hiện cuộn
        }
      }}
    />
  );
};

export default Logo;
