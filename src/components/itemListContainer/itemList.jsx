import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import { CardContent, CardMedia, CardActionArea, Typography, Box } from "@mui/material";


import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles({
  cardContent: {
    padding: 0,
  },
  linkCard: {
    textDecoration: "none",
  },
});

export default function ItemListContainer(itemsList, setCurrentItems) {
  const classes = useStyles();
  const itemsMenu = itemsList.itemsList;
  console.log(itemsMenu);
  return (
    <Box
      fixed
      sx={{
        paddingLeft: { xs: 0, sm: 20, xl: 35 },
        paddingRight: { xs: 0, sm: 20, xl: 35 },
      }}
    >
      <Typography
        variant="h3"
        color="white"
        sx={{ paddingTop: 5, marginTop: 9 }}
      >
        Menu
      </Typography>
      <div className="cardUl">
        {itemsMenu?.map((i) => {
          console.log(i);
          
          return (
            <Link to ={`/menu/${i.id}`} className={classes.linkCard} onClick={() => setCurrentItems(i)}>
            <Card sx={{ maxWidth: 300, minWidth: 300 }} className="card">
              <CardActionArea >
                <CardContent className={classes.cardContent}>
                  {/* <ItemDetail idItem={i.id} /> */}
                  <CardMedia component="img" image={i.img} alt="green iguana" />
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ marginTop: 2 }}
                  >
                    ${i.price}
                  </Typography>

                  <Typography gutterBottom variant="h5" component="div">
                    {i.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
          );
        })}
      </div>
    </Box>
  );
  
}
