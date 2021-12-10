import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import ItemCount from "./itemCount";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import Loading from "../loading/loading";
import CartContext from "../../contexts/cartContext";

//firebase
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
// firebase

const useStyles = makeStyles({
  cardItem: {
    backgroundColor: "#0a0a0a",
    color: "#ffffff",
    display: "flex",
  },
  linksRef: {
    color: "white",
    textDecoration: "none",
  },
});

export default function ItemDetail() {
  const classes = useStyles();
  let { id } = useParams();
  const [Loader, setLoader] = useState(true);
  // console.log(id);
  const [showItemDetail, setShowItemDetail] = useState([]);
  const {totalQuantity} = useContext(CartContext);

  useEffect(() => {
    totalQuantity()
    setLoader(true);
    const itemsCollection = doc(db, "items", id);

    getDoc(itemsCollection)
      .then((snapshot) => {
        const dataItemsDetail = { id: snapshot.id, ...snapshot.data() };
        setShowItemDetail(dataItemsDetail);
        // dataItemsDetail.map((doc) => console.log(doc));
      })
      .catch((error) => {
        console.log("Error al encontrar producto", error);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [id]);

  return (
    <>
      {Loader ? (
        <Loading />
      ) : (
        <Box>
          <Link to="/menu" className={classes.linksRef}>
            <Typography
              component="div"
              variant="h6"
              color="#504e4ecc"
              sx={{
                marginTop: 3,
                marginBottom: 1,
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "initial",
                maxWidth: 1200,
                // margin:"auto"
              }}
            >
              {"< "}Volver al menu
            </Typography>
          </Link>
          <Card
            sx={{
              marginTop: 0,
              marginBottom: 2,
              // marginLeft: { sm: 20, xl: 35 },
              // marginRight: { sm: 20, xl: "auto" },
              maxWidth: { xl: 1200, lg: 1100 },
              margin: "auto",
            }}
            className={classes.cardItem}
          >
            <CardMedia
              component="img"
              sx={{ width: { xl: 700, lg: 550 } }}
              image={showItemDetail.img}
              alt="item img"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "50px",
                justifyContent: "space-around",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: 0,
                }}
              >
                <Typography component="div" variant="h4" color="#ffffff" sx={{textAlign: "start"}}>
                  {showItemDetail.name.toUpperCase()}
                </Typography>
                <Typography
                  variant="h4"
                  color="#ffffff"
                  component="div"
                  sx={{ marginTop: 5 }}
                >
                  ${showItemDetail.price}
                </Typography>
                <Typography sx={{ marginTop: 5, textAlign: "initial" }}>
                  {showItemDetail.info}
                </Typography>
              </CardContent>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ItemCount
                  stock={showItemDetail.stock}
                  name={showItemDetail.name}
                  item={showItemDetail}
                />
              </Box>
            </Box>
          </Card>
        </Box>
      )}
    </>
  );
}
