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
        <Snackbar 
            anchorOrigin={{ 
                vertical: 'top',
                horizontal: 'center',}}
            open={open}  
            onClose={handleClose}>
        <Alert variant="filled" onClose={handleClose} severity="info" sx={{ width: '100%' , height: "300"}}>
            <AlertTitle>¡UPS!</AlertTitle>
            No puedes agregar mas cantidad porque el producto {name} cuenta con solo {stock} unidades en stock.
        </Alert>
        </Snackbar>
    )
  }
  export default AlertStocking;



