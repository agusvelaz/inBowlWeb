import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBarCat from "../navBar/navCat";
import Card from "@mui/material/Card";

import data from "../../dataItems";
import {
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Box,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const dataItems = data.items;

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!dataItems) reject(new Error("Error al devolver los datos"));

      resolve({ dataItems });
    }, 2000);
  });
};

async function GetDataItems() {
  try {
    const dataItemsObj = await getData();
    return dataItemsObj.dataItems;
  } catch (err) {
    console.log(err);
  }
}

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

export default function ItemListContainer({ setCurrentItems }) {
  const classes = useStyles();
  const [category, setCategory] = useState({});

  const [itemsList, setItems] = useState([]);
  const [showItemList, setShowItemList]= useState([])
  useEffect(() => {
    GetDataItems().then((resp) => {
      setItems(resp)
      setShowItemList(resp)
    });
  }, []);
  console.log(itemsList);
  console.log(showItemList)
  useEffect(() => {
    setItems(itemsList);
  }, []);
  return (
    <div>
      <NavBarCat itemsList={itemsList} setCategory={setCategory} setShowItemList={setShowItemList} />
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
                <Link
                  to={`/menu/${i.id}`}
                  className={classes.linkCard}
                  onClick={() => setCurrentItems(i) }
                  
                >
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
