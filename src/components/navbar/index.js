import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate, useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, onSnapshot, getFirestore } from "firebase/firestore";

// const pages = ["Home", "About", "Contact"];
const pages = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Profile",
    path: "/profile",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "News",
    path: "/news",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
];
const settings = ["Logout"];
const Navbar = () => {
  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();
  const routerLoaction = useLocation();
  const [isLogin, setIsLogin] = useState(false);
  const [profileURl, setProfileURL] = useState(null);
  const [name, setName] = useState("");
  let currentPath = routerLoaction.pathname;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Login true", user);
        setIsLogin(true);
        const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
          console.log("Current data: ", doc.data());
          setProfileURL(doc.data()?.photoURL);
          setName(doc.data()?.name);
        });
      } else {
        console.log("User is signed out");
        setIsLogin(false);
      }
    });
  }, []);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    navigate(page.path);
    // console.log(page);
    // if (page === "Home") {
    //   navigate("/");
    // } else if (page === "About") {
    //   navigate("/about");
    // } else if (page === "Contact") {
    //   navigate("/contact");
    // }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setIsLogin(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography
                    sx={{ textAlign: "center" }}
                    style={{ opacity: currentPath === page.path ? 1 : 0.5 }}
                  >
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: "white", display: "block" }}
                style={{ opacity: currentPath === page.path ? 1 : 0.5 }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isLogin ? (
              <div>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={name}
                      src={
                        profileURl
                          ? profileURl
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdIVSqaMsmZyDbr9mDPk06Nss404fosHjLg&s"
                      }
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={()=> setAnchorElUser(null)}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography sx={{ textAlign: "center" }}>
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            ) : (
              <Button
                style={{ color: "white" }}
                onClick={() => navigate("/log-in")}
              >
                Sign In
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
