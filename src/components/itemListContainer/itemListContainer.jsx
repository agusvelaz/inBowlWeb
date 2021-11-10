

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AddShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import ItemCount from "./itemCount";

const useStyles = makeStyles({
  cardContent: {
    padding: 0,
  },
});

export default function ItemListContainer() {
  const classes = useStyles();

  let listaProductos = [
    {
      id: "0",
      name: "Vegetable Kakiage Bowl",
      price: 620,
      cat: "",
      img: "img/products/",
      stock: 5,
    },

    {
      id: "1",
      name: "Pork and Vegetable Bowl ",
      price: 718,
      cat: "",
      img: "img/products/",
      stock: 3,
    },

    {
      id: "2",
      name: "Spicy Fried Chicken Bowl",
      price: 829,
      cat: "",
      img: "img/products/",
      stock: 4,
    },

    {
      id: "3",
      name: "Chicken Teriyak Bowl",
      price: 830,
      cat: "",
      img: "img/products/",
      stock: 5,
    },
  ];



  const items = listaProductos.map((i) => (
    <Card sx={{ maxWidth: 300, minWidth: 300 }} className="card">
      <CardMedia
        component="img"
        image="https://cdn.waso.tokyo/uploads/dish_item/image/246/w980_f50805e6-8882-4107-b11c-a98346e22833.jpg"
        alt="green iguana"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="div">
          {i.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ marginTop: 2 }}
        >
          ${i.price}
        </Typography>
      </CardContent>

       <ItemCount stock={i.stock} name={i.name} />

    </Card>
  ));

  return (
    <div>
      <Typography variant="h3" color="white" sx={{ margin: 2 }}>
        Menu
      </Typography>
      <div className="cardUl"> {items}</div>
    </div>
  );
}
