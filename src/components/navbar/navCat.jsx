
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles((themeConfig) => ({
  offset: themeConfig.mixins.toolbar,
  navBarCat: {
    backgroundColor: "#8d582ee6",
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


export default function NavCat({ itemsList,  setShowItemList}) {
  const classes = useStyles();

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
        sx={{ marginTop: {xs:6, sm:8}, height: 40 }}
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
            to={`/category/vegan`}
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
