import { CardActions, Button, Box, Typography } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import AlertStocking from "../alert/alertStocking";
import { makeStyles } from "@material-ui/core/styles";
import CartContext from "../../contexts/cartContext";
import { useContext } from "react";

const useStyles = makeStyles({
  buttonCart: {
    color: "#ffffff",
    margin: "10px",
    backgroundColor: "#000",
    minWidth: 35,
  },
});
export default function CartCount({ stock, name, quantity, id, price }) {
  const { deleteItemCart, totalQuantity, totalQuantityInCart} = useContext(CartContext);
  const classes = useStyles();
  const [newQuantity, setNewQuantity] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setNewQuantity(quantity);
    totalQuantity()
  }, []);

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
          paddingRight:5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          display="flex"
          sx={{ alignItems: "center", flexDirection: "column" }}
        >
          <Box display="flex"  function = {totalQuantity()} sx={{ alignItems: "center" } }>
            <Button
              className={classes.buttonCart}

              onClick={() => {
                newQuantity > 1
                  ? setNewQuantity(newQuantity - 1)
                  : setNewQuantity(1);
                
              }}
            >
              -
            </Button>
            <Typography margin={1}>{newQuantity}</Typography>
            <Button
              className={classes.buttonCart}
              onClick={() => {
                newQuantity < stock
                  ? setNewQuantity(newQuantity + 1)
                  : setErrorMessage("error");

              }}
            >
              +
            </Button>
          </Box>
          <Typography>({stock} disponibles)</Typography>
        </Box>

        <Button
          className="add  Cart"
          sx={{ marginTop: 1, backgroundColor: "#000" }}
          variant="contained"
          disableElevation
          // endIcon={<DeleteIcon />}
          size="large"
          onClick={() => {
            deleteItemCart(id);
            totalQuantity()
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
