import { AlertTitle, Typography, Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const style = {
  position: "absolute",
  color: "#ffffff",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#0a0a0a",
  border: "2px solid #7d6644",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const AlertItemAdded = ({ stock, name }) => {
  const [open, setOpen] = useState(true);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Modal
      open={open}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ color: "#388e3c",display: "flex", justifyContent: "center", alignItems: "center"}}>
          <CheckCircleIcon />
          <AlertTitle sx={{ margin:2}}>
            ¡Agregado a tu carrito!
          </AlertTitle>
          <CheckCircleIcon />
        </Box>
        <Typography
          id="modal-modal-title"
          variant="subtitle1"
          sx={{ color: "#ffffff" }}
        >
          Agregaste {stock}  "{name}" a tu carrito .
        </Typography>
        <Box sx={{ marginTop: 1 }}>
        <Link to="/cart" >
          <Button
            sx={{ margin: 1, backgroundColor: "#8d582ee6", width: 200 }}
            variant="contained"
            disableElevation
            size="small"
            onClick={handleClose}
          >
            Ver carrito
          </Button>
          </Link>
          <Link to="/menu" >
          <Button
            sx={{ margin: 1, backgroundColor: "#8d582ee6", width: 200 }}
            variant="contained"
            disableElevation
            size="small"
            onClick={handleClose}
          >
            Seguir comprando
          </Button>
          </Link>
        </Box>
      </Box>
    </Modal>
  );
};
export default AlertItemAdded;
