import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Button,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import React, { SyntheticEvent, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  // React.MouseEvent<HTMLElement>
  const handleOpenNavMenu = (event: SyntheticEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            aria-label="menu"
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
          >
            {[
              { name: "Login", to: "/login" },
              { name: "Rooms", to: "/rooms" },
            ].map(({ name, to }) => (
              <MenuItem key={name}>
                <Typography textAlign="center">
                  <Link onClick={handleCloseNavMenu} to={to}>
                    {name}
                  </Link>

                  {/* Add third option for logging out?*/}
                </Typography>
              </MenuItem>
            ))}
          </Menu>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">App</Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Box component="main">
        <Outlet />
      </Box>
    </React.Fragment>
  );
};

export default App;
