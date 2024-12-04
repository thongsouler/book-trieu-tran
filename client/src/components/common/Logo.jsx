import { Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Logo = ({ scrollTo }) => {
  const theme = useTheme();
  const navigate = useNavigate(); // Hook để điều hướng

  return (
    <Typography fontWeight="700" fontSize="1.7rem" onClick={() => {
      if (window.location.pathname !== '/') {
        navigate('/'); // Chuyển hướng tới trang chủ nếu không phải trang chủ
      } else if (scrollTo) {
        scrollTo('idScrollDes'); // Nếu đã ở trang chủ, thực hiện cuộn
      }
    }}>
      Cánh <span style={{ color: theme.palette.primary.main }}>Diều</span>
    </Typography>
  );
};

export default Logo;