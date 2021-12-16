import {
  Box,
  Typography,
  Divider,
  Button,
  Modal,
  AlertTitle,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState, useContext } from "react";
import CartContext from "../../contexts/cartContext";
import { Link } from "react-router-dom";
//firebase
import { db } from "../../firebase/firebase";
import {
  collection,
  addDoc,
  getDoc,
  doc,
  writeBatch,
} from "firebase/firestore";
// firebase

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    textAlign: "center",
    color: "#ffffff",
    padding: 0,
    "&": {
      listStyle: "none",
    },
  },
  span: {
    color: "#7d6644",
    fontWeight: "bold",
  },
  iconCheck: {
    color: "#388e3c",
    fontSize: 150,
  },
});
const style = {
  position: "absolute",
  color: "#ffffff",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {xs:350,md:550 },
  bgcolor: "#0a0a0a",
  border: "2px solid #7d6644",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function Checkout() {
  const classes = useStyles();
  const [orderId, setOrderId] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const { setNewOrder, newOrder, clearCart, totalCart } =
    useContext(CartContext);

  console.log(newOrder);

  const confirmarOrden = () => {
    console.log("orden confirmada");
    const ordersCollection = collection(db, "orders");
    // const batch = writeBatch(db);
    // newOrder.items.forEach((product, i) => {
    //   getDoc(doc(db, "products", product.id)).then((productDocument) => {
    //     if (productDocument.data().stock >= newOrder.items[i].quantity) {
    //       batch.update(doc(db, "products", productDocument.id), {
    //         stock: productDocument.data().stock - newOrder.items[i].quantity,
    //       });
    //     }
    //   });
    // });
    addDoc(ordersCollection, newOrder)
      .then(({ id }) => {
        setOrderId(id);
        setTimeout(handleOpen(), 2000);
      })
      .catch((error) => {
        console.log(error, "Error al ejecutar la orden");
      })
      .finally(() => {
        clearCart();
        totalCart();
        setNewOrder();
      });
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
          Checkout
        </Typography>
        <Divider
          variant="middle"
          color="#7d6644"
          sx={{ maxWidth: 1100, marginLeft: "auto", marginRight: "auto" }}
        />
        {newOrder ? (
          <Box sx={{ paddingBottom: 2 }}>
            <Typography
              component="div"
              variant="h6"
              color="#ffffff"
              sx={{
                marginBottom: 1,
                textAlign: "center",
                marginTop: 3,
              }}
            >
              Datos del comprador
            </Typography>
            <Divider
              variant="middle"
              color="#7d6644"
              sx={{ maxWidth: 300, marginLeft: "auto", marginRight: "auto" }}
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <ul className={classes.list}>
                <li>
                  <span className={classes.span}>Nombre:</span>{" "}
                  {newOrder.buyer.nombre}
                </li>
                <li>
                  <span className={classes.span}>Apellido:</span>{" "}
                  {newOrder.buyer.apellido}
                </li>
                <li>
                  <span className={classes.span}>Telefono:</span>{" "}
                  {newOrder.buyer.telefono}
                </li>
                <li>
                  <span className={classes.span}>Correo Electronico:</span>{" "}
                  {newOrder.buyer.email}
                </li>
                <li>
                  <span className={classes.span}>Provincia:</span>{" "}
                  {newOrder.buyer.provincia}
                </li>
                <li>
                  <span className={classes.span}>Localidad:</span>{" "}
                  {newOrder.buyer.localidad}
                </li>
                <li>
                  <span className={classes.span}>Direccion:</span>{" "}
                  {newOrder.buyer.calle}
                </li>
                <li>
                  <span className={classes.span}>Codigo Postal:</span>{" "}
                  {newOrder.buyer.cp}
                </li>
              </ul>
            </Typography>
            <Link
              to="/cart/buyerData"
              // onClick={() => setNewOrder()}
            >
              Editar Datos
            </Link>

            <Box>
              <Typography
                component="div"
                variant="h6"
                color="#ffffff"
                sx={{
                  marginBottom: 1,
                  textAlign: "center",
                  marginTop: 3,
                }}
              >
                Productos en carrito
              </Typography>
              <Divider
                variant="middle"
                color="#7d6644"
                sx={{ maxWidth: 300, marginLeft: "auto", marginRight: "auto" }}
              />
              <Typography id="modal-modal-description" sx={{ m: 2 }}>
                {newOrder.items.map((i) => (
                  <>
                    <Typography color="#ffffff">
                      {i.quantity} {i.name} = ${i.quantity * i.price}
                    </Typography>
                  </>
                ))}
              </Typography>
              <Divider
                variant="middle"
                color="#7d6644"
                sx={{ maxWidth: 300, marginLeft: "auto", marginRight: "auto" }}
              />
              <Typography color="#ffffff" sx={{ marginTop: 2 }}>
                Total: ${newOrder.totalPrice}
              </Typography>
            </Box>

            <Button
              sx={{ backgroundColor: "#8d582ee6", width: 200, marginTop: 3 }}
              variant="contained"
              onClick={() => {
                confirmarOrden();
              }}
            >
              FINALIZAR COMPRA
            </Button>
          </Box>
        ) : (
          <p></p>
        )}
        <Modal
          open={open}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box
              sx={{
                color: "#388e3c",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize:100
              }}
            >
              <CheckCircleIcon />
              <AlertTitle sx={{ margin: 2, fontSize:30 }}>
                ¡Su orden se completo con éxito!
              </AlertTitle>
              <CheckCircleIcon />
            </Box>
            <Typography id="modal-modal-description" sx={{ mt: 1 }} variant="h5">
              Su numero de orden es :
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}variant="h5">
              {orderId}
            </Typography>
            <Link to="/">
              <Button
                sx={{ backgroundColor: "#8d582ee6", width: 200, marginTop: 1 }}
                variant="contained"
              >
                Home
              </Button>
            </Link>
          </Box>
        </Modal>
      </Box>
    </>
  );
}
