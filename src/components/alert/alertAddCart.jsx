import { Alert, AlertTitle } from "@mui/material";
import { useState } from "react";

import Snackbar from "@mui/material/Snackbar";


const AlertAddCart = ({ stock, name, message }) => {
  const [open, setOpen] = useState(true);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={open}
      onClose={handleClose}
    >
      <Alert
        variant="filled"
        onClose={handleClose}
        severity="success"
        sx={{ width: "100%"}}
      >
        <AlertTitle>¡Added to your cart!</AlertTitle>
        Agregaste "{name}" x{stock} unidades a tu carrito .
      </Alert>
    </Snackbar>
  );
};
export default AlertAddCart;