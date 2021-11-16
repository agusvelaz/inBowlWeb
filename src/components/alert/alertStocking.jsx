import {Alert, AlertTitle} from "@mui/material";
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const AlertStocking = ({stock, name, message}) =>{
    const [open, setOpen] = useState(true);  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    return(
        <Snackbar open={open}  onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            El producto {name} cuenta con solo {stock} unidades en stock
        </Alert>
        </Snackbar>
    )
  }
  export default AlertStocking;



