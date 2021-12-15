import { Box, Typography, Divider, Button, Modal } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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
  iconCheck:{
    color: "#7d6644",
    fontSize: 150
  }
});
const style = {
  position: 'absolute',
  color: "#ffffff",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#0a0a0a',
  border: '2px solid #7d6644',
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function Checkout() {
  const classes = useStyles();
  const [orderId, setOrderId] = useState()
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
        setTimeout(handleOpen(), 2000)
       
        
      })
      .catch((error) => {
        console.log(error, "Error al ejecutar la orden");
      })
      .finally(() => {
        
        clearCart();
        totalCart();
        setNewOrder()
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
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
            </Box>

            <Button
              sx={{ backgroundColor: "#8d582ee6", width: 200, marginTop: 1 }}
              variant="contained"
              onClick={() => {
                confirmarOrden()
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
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Su compra ha sido realizada con exito 
              </Typography>
              <CheckCircleIcon className={classes.iconCheck}/>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Su numero de orden es : {orderId}
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
