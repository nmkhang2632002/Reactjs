import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { Avatar, Button, Tooltip, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebase/ConfigFirebase";

const settings = ["DashBoard", "LogOut"];
function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isLogin, setIsLogin] = React.useState(false);
  const [userMenu, setUserMenu] = React.useState(false);
  const [userData, setUserData] = React.useState("");

  const handleOpenUserMenu = () => {
    setUserMenu(true);
  };
  const handleCloseUserMenu = () => {
    setUserMenu(false);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const { photoURL } = user;
        setUserData(photoURL);
        setIsLogin(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsLogin(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const styleHover = {
    "&:hover": {
      opacity: 0.5,
    },
  };
  const styleHoverSm = {
    backgroundColor: "#000",
    "&:hover": {
      backgroundColor: "#888",
    },
  };
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#10161D" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem sx={styleHoverSm} onClick={handleCloseNavMenu}>
                <Link className="link link-navigation" to="/">
                  Home
                </Link>
              </MenuItem>
              <MenuItem sx={styleHoverSm} onClick={handleCloseNavMenu}>
                <Link className="link link-navigation" to="/news">
                  News
                </Link>
              </MenuItem>
              <MenuItem sx={styleHoverSm} onClick={handleCloseNavMenu}>
                <Link className="link link-navigation" to="/about">
                  About
                </Link>
              </MenuItem>
              <MenuItem sx={styleHoverSm} onClick={handleCloseNavMenu}>
                <Link className="link link-navigation" to="/contact">
                  Contact
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button sx={styleHover}>
              <Link className="link link-navigation" to="/">
                Home
              </Link>
            </Button>
            <Button sx={styleHover} onClick={handleCloseNavMenu}>
              <Link className="link link-navigation" to="/news">
                News
              </Link>
            </Button>
            <Button sx={styleHover} onClick={handleCloseNavMenu}>
              {" "}
              <Link className="link link-navigation" to="/about">
                About
              </Link>
            </Button>
            <Button sx={styleHover} onClick={handleCloseNavMenu}>
              <Link className="link link-navigation" to="/contact">
                Contact
              </Link>
            </Button>
          </Box>
          {!isLogin && (
            <Button color="inherit" onClick={handleLogin}>
              Login
            </Button>
          )}
          {isLogin && (
            <Box sx={{ flexGrow: 0, position: "relative" }}>
              <Tooltip>
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                  color="inherit"
                >
                  <Avatar src={userData} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={userMenu}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(userMenu)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link className="link" to="/dashboard">
                    <Typography textAlign="center">DashBoard</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link className="link" to="/user">
                    <Typography textAlign="center">User</Typography>
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    handleLogout();
                  }}
                >
                  <Typography textAlign="center">LogOut</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;

{
  /* <MenuItem onClick={handleCloseNavMenu}>
                  <Link className="link link-navigation" to="/">
                    Home
                  </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                  <Link className="link link-navigation" to="news">
                    News
                  </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                {" "}
                  <Link className="link link-navigation" to="about">
                    About
                  </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                  <Link className="link link-navigation" to="about">
                    About
                  </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                  <Link className="link link-navigation" to="contact">
                    Contact
                  </Link>
              </MenuItem>
            {/* <Stack sx={{ display: { xs: "block", sm: "block" } }}>
          </Stack> */
}
