import { AppBar, Button, IconButton, Stack, Toolbar } from "@mui/material";
import "./Navigation.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
export default function Navigation() {
   const styleHover={
    '&:hover': {
      backgroundColor:'#757575',
    }
   }
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#10161D" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Stack sx={{ display: { xs: "block", sm: "block" } }}>
          <Button sx={styleHover}>
            <Link className="link link-navigation" to="/">
              Home
            </Link>
          </Button>
          <Button sx={styleHover}>
            <Link className="link link-navigation" to="news">
              News
            </Link>
          </Button>
          <Button sx={styleHover}>
            <Link className="link link-navigation" to="about">
              About
            </Link>
          </Button>
          <Button sx={styleHover}>
            <Link className="link link-navigation" to="contact">
              Contact
            </Link>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
