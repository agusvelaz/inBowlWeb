import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import { CardContent, CardMedia, CardActionArea, Typography, Box } from "@mui/material";


import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles({
  card:{ 
    margin: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "all 0.3s ease",
    backgroundColor: "#011013",
    color: "#ffffff",
  },
  cardContent: {
    padding: 0,
  },
  linkCard: {
    textDecoration: "none",
  },
});

export default function ItemListContainer({itemsList, setCurrentItems}) {
  const classes = useStyles();
  console.log(itemsList);
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
        {itemsList?.map((i) => {
          console.log(i);
          
          return (
            <Link to ={`/menu/${i.id}`} className={classes.linkCard} onClick={() => setCurrentItems(i)}>
            <Card sx={{ maxWidth: 300, minWidth: 300 }} className={classes.card} >
              <CardActionArea >
                <CardContent className={classes.cardContent}>
                  {/* <ItemDetail idItem={i.id} /> */}
                  <CardMedia component="img" image={i.img} alt="green iguana" />
                  <Typography
                    variant="h5"
                    color="#fffff"
                    sx={{ marginTop: 2 }}  
                  >
                    ${i.price}
                  </Typography>

                  <Typography gutterBottom variant="h6" component="div" >
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
