import { styled, alpha } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles((themeConfig) => ({
  offset: themeConfig.mixins.toolbar,
  navBarCat: {
    backgroundColor: "#121212",
    padding: 0,
  },
  navTool: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
  },
  linksRef: {
    color: "white",
    textDecoration: "none",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 6),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function NavBarCat({ itemsList,  setShowItemList}) {
  const classes = useStyles();
//   const [search, setSearch] = useState("");
  console.log(itemsList);


  //SET FILTER CATEGORY
  let itemsFilt = []
  const setItemsCategori = (cat) => {
    console.log(cat);
    itemsList?.map((i) => {
      const name = i.name.toLowerCase();
      const category = cat.toLowerCase();
      if (name.includes(category)) {
      console.log(i);
      itemsFilt.push(i)
      setShowItemList(itemsFilt)
      console.log(itemsFilt)
      }
    });
  };

  return (
    <Box sx={{ flexGrow: 1, height: 40 }}>
      <AppBar
        position="static"
        className={classes.navBarCat}
        position="fixed"
        sx={{ marginTop: 8, height: 40 }}
      >
        <Box sx={{ flexGrow: 1 }} />
        <div className={classes.navTool}>
          {/* <Search sx={{ margin: "auto" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ height: 30 }}
            //   value={search}
            />
          </Search> */}
           <Link
            className={classes.linksRef}
            to={`/menu`}
            onClick={() => setShowItemList(itemsList)}
          >
            <MenuItem>Full Menu</MenuItem>
          </Link>
          <Link
            className={classes.linksRef}
            onClick={() => setItemsCategori("vegetable")}
            to={`/category/vegetable`}
            
          >
            <MenuItem>Vegetable</MenuItem>
          </Link>
          <Link
            className={classes.linksRef}
            to={`/category/chicken`}
            onClick={() => setItemsCategori("chicken")}
          >
            <MenuItem>Chicken</MenuItem>
          </Link>
          <Link
            className={classes.linksRef}
            to={`/category/vegan"`}
            onClick={() => setItemsCategori("vegan")}
          >
            <MenuItem>Vegan</MenuItem>
          </Link>
          <Link
            className={classes.linksRef}
            to={`/category/beef`}
            onClick={() => setItemsCategori("beef")}
          >
            <MenuItem>Beef</MenuItem>
          </Link>
          <Link
            className={classes.linksRef}
            to={`/category/pork`}
            onClick={() => setItemsCategori("pork")}
          >
            <MenuItem>Pork</MenuItem>
          </Link>
        </div>
        <Box sx={{ flexGrow: 1 }} />
      </AppBar>
    </Box>
  );
}
