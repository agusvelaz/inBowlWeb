import {AlertTitle, Typography, Modal, Box, Button } from "@mui/material";
import { useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
const style = {
  position: "absolute",
  color: "#ffffff",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#0a0a0a",
  border: "2px solid #7d6644",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const AlertItemIncart = ({name}) => {
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
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ color: "#0288d1",display: "flex", justifyContent: "center", alignItems: "center"}}>
        <InfoIcon />
        <AlertTitle sx={{ margin:2}}>¡UPS!</AlertTitle>
        <InfoIcon />
        </Box>
        <Typography
          id="modal-modal-title"
          variant="subtitle1"
          sx={{ color: "#ffffff" }}
        >
        "{name}" ya se encuentra en tu carrito, puedes dirigirte alli si deseas modificar sus detalles.
        </Typography>
        <Button
            sx={{color: "#0288d1"}}
            variant="text"
            disableElevation
            size="small"
            onClick={handleClose}
          >
            cerrar
          </Button>
      </Box>
    </Modal>
  );
};
export default AlertItemIncart;