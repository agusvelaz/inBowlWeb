import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Box,
  Card,
} from "@mui/material";

const useStyles = makeStyles({
  card: {
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

export default function ItemList({itemsList, showItemList}) {
  const classes = useStyles();
  console.log(showItemList);
  return (
    <div>
      
      <Box
        fixed
        sx={{
          paddingLeft: { xs: 0, sm: 20, xl: 35 },
          paddingRight: { xs: 0, sm: 20, xl: 35 },
        }}
      >
        <Typography variant="h3" color="white" sx={{ paddingTop: 2 }}>
          Menu
        </Typography>

        <div className="cardUl">
          {showItemList?.map((i) => {
            console.log(i);

            return (
              <Link to={`/menu/${i.id}`} className={classes.linkCard}>
                <Card
                  sx={{ maxWidth: 300, minWidth: 300 }}
                  className={classes.card}
                >
                  <CardActionArea>
                    <CardContent className={classes.cardContent}>
                      <CardMedia
                        component="img"
                        image={i.img}
                        alt="green iguana"
                      />
                      <Typography
                        variant="h5"
                        color="#fffff"
                        sx={{ marginTop: 2 }}
                      >
                        ${i.price}
                      </Typography>

                      <Typography gutterBottom variant="h6" component="div">
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
      
    </div>
  );
}
