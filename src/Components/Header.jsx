import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Menu, MenuItem, Box } from "@mui/material";
import logo from "../Assets/logo.png";
import { Search, Notifications } from "@mui/icons-material";
import { Grid, Typography, IconButton } from "@mui/material";
import styles from "./header.module.css";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isRouteActive = (path) => {
    return location.pathname === path;
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <Grid item direction={"row"} lg={"auto"} gap={"40px"} container alignItems={"center"}>
        <Grid item>
          {/* Netflix logo */}
          <img src={logo} className={styles.headerLogo} alt="Netflix Logo" />
        </Grid>
        {/* Menu items */}
        <Grid item>
          <Box sx={{ display: "flex", gap: "16px" }}>
            <Typography
              variant="h6"
              className={`${styles.menuItem} ${isRouteActive("/browse") ? styles.activeMenuItem : ""}`}
              onClick={() => handleMenuItemClick("/")}
            >
              Home
            </Typography>
            <Typography
              variant="h6"
              className={`${styles.menuItem} ${isRouteActive("/TV&Shows") ? styles.activeMenuItem : ""}`}
              onClick={() => handleMenuItemClick("/TV&Shows")}
            >
              TV Shows
            </Typography>
            <Typography
              variant="h6"
              className={`${styles.menuItem} ${isRouteActive("/Movies") ? styles.activeMenuItem : ""}`}
              onClick={() => handleMenuItemClick("/Movies")}
            >
              Movies
            </Typography>
            <Typography
              variant="h6"
              className={`${styles.menuItem} ${isRouteActive("/new-popular") ? styles.activeMenuItem : ""}`}
              onClick={() => handleMenuItemClick("/new-popular")}
            >
              New & Popular
            </Typography>
            <Typography
              variant="h6"
              className={`${styles.menuItem} ${isRouteActive("/MyList") ? styles.activeMenuItem : ""}`}
              onClick={() => handleMenuItemClick("/MyList")}
            >
              My List
            </Typography>
            <Typography
              variant="h6"
              className={`${styles.menuItem} ${isRouteActive("/browse-languages") ? styles.activeMenuItem : ""}`}
              onClick={() => handleMenuItemClick("/browse-languages")}
            >
              Browse by Languages
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid item>
        {/* Search icon */}
        <IconButton>
          <Search sx={{ color: "white" }} />
        </IconButton>
        {/* Notification icon */}
        <IconButton>
          <Notifications sx={{ color: "white" }} />
        </IconButton>
      </Grid>
    </>
  );
}

export default Header;