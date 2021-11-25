import { Link } from "react-router-dom";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {Box, Toolbar, IconButton, Button, Typography} from "@mui/material/";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  brandTitle: {
    color: "white",
    textDecoration: "none",
  },
  linksRef: {
    color: "white",
    textDecoration: "none",
  },
  menuPaper: {
    backgroundColor: "#011013"
  }
  
});

export default function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  // const renderMenu = (
  //   <Menu
  //     className={classes.navList}
  //     anchorEl={anchorEl}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //   </Menu>
  // );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      classes={{ paper: classes.menuPaper }}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      
      
    >

        <Link to="/" className={classes.linksRef}><MenuItem>Home</MenuItem> </Link>
        <Link to="/menu" className={classes.linksRef}><MenuItem>Menu</MenuItem> </Link>
        <Link to="/nosotros" className={classes.linksRef}><MenuItem>Nosotros</MenuItem> </Link>
 
    
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        className="navBar"
        color="primary"
        sx={{ padding: 1 }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1, textAlign: "left" }}>
            {/* BRAND ICON */}
            <Link to="/" className={classes.brandTitle}>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ display: { xs: "block", sm: "block" } }}
              className={classes.brandTitle}
            >
              inBowl
              {/* 🔥 */}
            </Typography>
            </Link>
          </Box>

          <Box  sx={{ display: { xs:"none" , md: "flex" } }}>
            <Link to="/" className={classes.linksRef}>
              <Button color="inherit"> Home</Button>
            </Link>
            <Link to="/menu" className={classes.linksRef}>
              <Button color="inherit"> Menu </Button>
            </Link>
            <Link to="/nosotros" className={classes.linksRef}>
              <Button color="inherit">Nosotros</Button>
            </Link>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 0 new items in cart"
              color="inherit"
            >
              <Badge badgeContent={"0"} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </Box>
  );
}
