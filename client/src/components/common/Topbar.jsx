import { useSelector, useDispatch } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { AppBar, Box, Button, IconButton, Stack, Toolbar, useScrollTrigger } from "@mui/material";
import { cloneElement, useState } from "react";
import { Link } from "react-router-dom";
import menuConfigs from "../../configs/menu.configs";
import { themeModes } from "../../configs/theme.configs";
import { setAuthModalOpen } from "../../redux/features/authModalSlice";
import { setThemeMode } from "../../redux/features/themeModeSlice";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import Sidebar from "./Sidebar";
import OpenNewWindows from "./OpenNewWindows";
import OpenNewUrlLink from "./OpenNewUrlLink";

const ScrollAppBar = ({ children, window }) => {
  const { themeMode } = useSelector((state) => state.themeMode);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined
  });

  return cloneElement(children, {
    sx: {
      color: trigger ? "text.primary" : themeMode === themeModes.dark ? "primary.contrastText" : "text.primary",
      backgroundColor: trigger ? "background.paper" : themeMode === themeModes.dark ? "transparent" : "background.paper"
    }
  });
};

export const headerScrollToId = (id) => {
  if (id) {

    const item = document.getElementById(id)
    if (item) {
      const pos = item.offsetTop
      const headerDiv = document.querySelector(".container-header")
      const headerHeight = headerDiv ? headerDiv.offsetHeight : 0
      const offsetTop = pos - headerHeight
      const offset = offsetTop > 0 ? offsetTop : 0
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      }, offset)
      return;
    } else {
      window.location.pathname = "/"
    }
  }
  return;
}
const Topbar = () => {
  const { user } = useSelector((state) => state.user);
  const { appState } = useSelector((state) => state.appState);
  const { themeMode } = useSelector((state) => state.themeMode);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dispatch = useDispatch();

  const onSwithTheme = () => {
    const theme = themeMode === themeModes.dark ? themeModes.light : themeModes.dark;
    dispatch(setThemeMode(theme));
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
      {/* <button id="clickMeButton">click here</button> */}
      <ScrollAppBar >
        <AppBar elevation={0} sx={{ zIndex: 9999 }} className="container-header">
          <Toolbar sx={{ alignItems: "center", justifyContent: "space-between" }}>

            {/* <OpenNewWindows /> */}
            {/* <OpenNewUrlLink /> */}
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton
                color="inherit"
                sx={{ mr: 2, display: { md: "none" } }}
                onClick={toggleSidebar}
              >
                <MenuIcon />
              </IconButton>

              <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
                <Logo scrollTo={headerScrollToId} />
              </Box>
            </Stack>

            {/* main menu */}
            <Box flexGrow={1} alignItems="center" display={{ xs: "none", md: "flex" }} >
              <Box sx={{ marginRight: "30px" }}>
                <Logo scrollTo={headerScrollToId} />
              </Box>
              {menuConfigs.main.map((item, index) => (
                <Button
                  key={index}
                  sx={{
                    color: appState.includes(item.state) ? "primary.contrastText" : "inherit",
                    mr: 2,
                    fontWeight: 700
                  }}
                  // component={Link}
                  // to={item.path}
                  onClick={() => {
                    headerScrollToId(item.idScroll)
                  }}
                  variant={appState.includes(item.state) ? "contained" : "text"}
                >
                  {item.display}
                </Button>
              ))}
              <IconButton
                sx={{ color: "inherit" }}
                onClick={onSwithTheme}
              >
                {themeMode === themeModes.dark && <DarkModeOutlinedIcon />}
                {themeMode === themeModes.light && <WbSunnyOutlinedIcon />}
              </IconButton>
            </Box>
            {/* main menu */}

            {/* user menu */}
            <Stack spacing={3} direction="row" alignItems="center">
              {/* {!user && <Button
                variant="contained"
                onClick={() => dispatch(setAuthModalOpen(true))}
              >
                Mua Ngay
              </Button>} */}
            </Stack>
            {user && <UserMenu />}
            {/* user menu */}
          </Toolbar>
        </AppBar>
      </ScrollAppBar>
    </>
  );
};

export default Topbar;