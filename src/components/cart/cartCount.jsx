import { CardActions, Button, Box, Typography } from "@mui/material";

import { useState, useEffect } from "react";
import AlertStocking from "../alert/alertStocking";
import { makeStyles } from "@material-ui/core/styles";
import CartContext from "../../contexts/cartContext";
import { useContext } from "react";

const useStyles = makeStyles({
  buttonCart: {
    color: "#ffffff",
    margin: "10px",
    backgroundColor: "#8d582ee6",
    minWidth: 35,
    height: 30,
  },
});
export default function CartCount({ stock, name, quantity, id, price }) {
  const { deleteItemCart, setNewQuantityItem, totalQuantity, totalCart } =
    useContext(CartContext);
  const classes = useStyles();
  const [newQuantity, setNewQuantity] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setNewQuantity(quantity);
  }, []);
  useEffect(() => {
    setNewQuantityItem(id, newQuantity);
    totalQuantity();
    totalCart();
  }, [newQuantity]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <CardActions
        sx={{
          padding: 0,
          paddingRight: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          display="flex"
          sx={{ alignItems: "center", flexDirection: "column" }}
        >
          <Box display="flex" sx={{ alignItems: "center" }}>
            <Button
              className={classes.buttonCart}
              onClick={() => {
                if (newQuantity > 1) {
                  setNewQuantity((newQuantity) => newQuantity - 1);
                  totalQuantity();
                } else {
                  setNewQuantity(1);
                }
              }}
            >
              -
            </Button>
            <Typography margin={1}>{newQuantity}</Typography>
            <Button
              className={classes.buttonCart}
              onClick={() => {
                if (newQuantity < stock) {
                  setNewQuantity((newQuantity) => newQuantity + 1);
                  totalQuantity();
                } else {
                  setErrorMessage("error");
                }
              }}
            >
              +
            </Button>
          </Box>
          <Typography>({stock} disponibles)</Typography>
        </Box>

        <Button
          className="add  Cart"
          sx={{
            marginTop: 1,
            backgroundColor: "#8d582ee6",
            minWidth: 30,
            height: 35,
          }}
          variant="contained"
          disableElevation
          size="large"
          onClick={() => {
            deleteItemCart(id);
            totalQuantity();
          }}
        >
          Eliminar
        </Button>
        {errorMessage && (
          <AlertStocking
            stock={stock}
            name={name}
            message={setTimeout(() => {
              setErrorMessage("");
            }, 9000)}
          />
        )}
      </CardActions>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Typography component="div" variant="h4">
          ${newQuantity * price}
        </Typography>
      </Box>
    </Box>
  );
}
