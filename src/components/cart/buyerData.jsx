import { Box, Typography, Divider, Button } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import CartContext from "../../contexts/cartContext";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  inputs: {
    color: "#ffffff",
    backgroundColor: "#2b2b2b",
    border: "none",
    borderBottom: "3px solid #7d6644",
    overflow: "hidden",
    borderRadius: 4,
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    margin: "10px",
    "&:focus": {
      // color:"#7d6644",
      backgroundColor: "#0a0a0a",
      border: "none",
    },
  },
  label: {
    color: "#ffffff",
  },
  list: {
    textAlign: "center",
    "&": {
      listStyle: "none",
    },
  },
  span: {
    color: "#7d6644",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#8d582ee6",
    width: 200,
    marginTop: "15px",
    marginBottom: "15px",
  },
  link:{
    textDecoration: "none"
  }
});

export default function BuyerData() {
  const classes = useStyles();
  const {
    itemsInCart,
    totalQuantityInCart,
    totalCartPrice,
    setNewOrder,
    newOrder,
  } = useContext(CartContext);
  const [buyerDataForm, setBuyerDataForm] = useState({});

  const checkData = () => {
    if (newOrder) setNewOrder();
  };
  useEffect(() => {
    checkData();
  }, []);

  const handleChange = (event) => {
    // console.log(buyerDataForm);
    setBuyerDataForm({
      ...buyerDataForm,
      [event.target.name]: event.target.value,
    });
  };
  console.log(newOrder);

  const setOrder = (event) => {
    event.preventDefault();
    const timestamp = new Date(Date.now()).toString();

    const order = {
      buyer: buyerDataForm,
      items: itemsInCart,
      totalQuantity: totalQuantityInCart,
      totalPrice: totalCartPrice,
      date: timestamp,
    };
    setNewOrder(order);
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#0a0a0a",
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography
          component="div"
          variant="h4"
          color="#ffffff"
          sx={{
            marginTop: 5,
            paddingTop: 5,
            marginBottom: 1,
            textAlign: "center",

            // margin:"auto"
          }}
        >
          Datos del comprador
        </Typography>
        <Divider
          variant="middle"
          color="#7d6644"
          sx={{ maxWidth: 1100, marginLeft: "auto", marginRight: "auto" }}
        />
        <Box
          component="form"
          onSubmit={setOrder}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: 5,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "0.2fr 0.2fr" },
              gap: 1,
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <label for="name" className={classes.label}>
              Nombre
              <input
                className={classes.inputs}
                id="name"
                type="text"
                name="nombre"
                required
                onChange={handleChange}
              />
            </label>
            <label for="lastName" className={classes.label}>
              Apellido
              <input
                className={classes.inputs}
                id="lastName"
                type="text"
                name="apellido"
                required
                onChange={handleChange}
              />
            </label>
            <label for="phone" className={classes.label}>
              Telefono
              <input
                className={classes.inputs}
                id="phone"
                type="number"
                onChange={handleChange}
                name="telefono"
                required
              ></input>
            </label>
            <label for="email" className={classes.label}>
              Correo Electronico
              <input
                className={classes.inputs}
                id="email"
                type="text"
                onChange={handleChange}
                name="email"
                required
              ></input>
            </label>
            <label for="province" className={classes.label}>
              Provincia
              <input
                className={classes.inputs}
                id="province"
                type="text"
                onChange={handleChange}
                name="provincia"
                required
              ></input>
            </label>
            <label for="location" className={classes.label}>
              Localidad
              <input
                className={classes.inputs}
                id="location"
                type="text"
                onChange={handleChange}
                name="localidad"
                required
              ></input>
            </label>
            <label for="street" className={classes.label}>
              Direccion
              <input
                className={classes.inputs}
                id="street"
                type="text"
                onChange={handleChange}
                name="calle"
                required
              ></input>
            </label>
            <label for="postalCode" className={classes.label}>
              Codigo Postal
              <input
                className={classes.inputs}
                id="postalCode"
                type="number"
                onChange={handleChange}
                name="cp"
                required
              ></input>
            </label>
          </Box>
          <textarea
            className={classes.inputs}
            placeholder="Indicaciones adicionales para tu pedido"
            name="indicaciones adicionales"
            rows="5"
            cols="50"
            onChange={handleChange}
          ></textarea>
          <Button variant="text" type="outlined" sx={{color: "#ffffff", border: "2px solid #7d6644", margin: 2}}>
            CONFIRMAR DATOS
          </Button>
          {newOrder ? (
            <Link to="/cart/checkout" className={classes.link}>
              <Button
                className={classes.button}
                variant="contained"
                type="submit"
              >
                CONTINUAR COMPRA
              </Button>
            </Link>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </>
  );
}
