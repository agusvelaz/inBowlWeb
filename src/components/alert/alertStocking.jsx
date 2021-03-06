import {AlertTitle, Typography, Modal, Box, Button } from "@mui/material";
import { useState } from "react";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
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

const AlertStocking = ({ stock, name }) => {
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
        <Box sx={{ color: "#f57c00",display: "flex", justifyContent: "center", alignItems: "center"}}>
        <WarningAmberIcon/>
        <AlertTitle sx={{ margin:2}}>¡UPS!</AlertTitle>
        <WarningAmberIcon/>
        </Box>
        <Typography
          id="modal-modal-title"
          variant="subtitle1"
          sx={{ color: "#ffffff" }}
        >
          No puedes agregar mas cantidad porque el producto "{name}" cuenta con
          solo {stock} unidades en stock.
        </Typography>
        <Button
            sx={{color: "#f57c00"}}
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
export default AlertStocking;
