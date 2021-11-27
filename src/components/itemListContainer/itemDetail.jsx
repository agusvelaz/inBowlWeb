import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import ItemCount from "./itemCount";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const useStyles = makeStyles({
  cardItem: {
    backgroundColor: "#011013",
    color: "#ffffff",
    display: "flex",
  },
  linksRef: {
    color: "white",
    textDecoration: "none",
  },
});

export default function ItemDetail({ currentItems }) {
  const classes = useStyles();
  return (
    <Box >
       
      <Link to="/menu" className={classes.linksRef}>
      <Typography component="div" variant="h6" color="#ffffff"  sx={{ marginTop: 1, marginBottom:1,marginLeft: { sm: 20, xl: 35 },
          marginRight: { sm: 20, xl: 35 },  textAlign: "initial" }}>
               👈Volver al menu
      </Typography>
      </Link>
      <Card
        sx={{
          marginTop: 0,
          marginLeft: { sm: 20, xl: 35 },
          marginRight: { sm: 20, xl: 35 },
        }}
        className={classes.cardItem}
      >
        <CardMedia
          component="img"
          sx={{ width: 500 }}
          image={currentItems.img}
          alt="item img"
        />
        <Box sx={{ display: "flex", flexDirection: "column" , marginLeft: "auto", marginRight: "auto" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h4" color="#ffffff">
              {currentItems.name}
            </Typography>
            <Typography
              variant="h5"
              color="#ffffff"
              component="div"
            >
              ${currentItems.price}
            </Typography>
          </CardContent>
          <Typography>
          {currentItems.info}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
            <ItemCount stock={currentItems.stock} name={currentItems.name} />
          </Box>
        </Box>
      </Card>
      {/* <div>
            
            <CardMedia component="img" image={currentItems.img} alt="green iguana" />
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ marginTop: 2 }}
            >
              ${currentItems.price}
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              {currentItems.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {currentItems.info}
            </Typography>

            <ItemCount stock={currentItems.stock} name={currentItems.name} />
          </div> */}
    </Box>
  );
}
