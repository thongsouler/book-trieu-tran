import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();
    const { themeMode } = useSelector((state) => state.themeMode);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [pathname, themeMode]); // Kích hoạt khi pathname thay đổi

    return null;
}

export default ScrollToTop;
