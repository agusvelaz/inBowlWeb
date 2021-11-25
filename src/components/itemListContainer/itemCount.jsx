
import {CardActions, Button} from "@mui/material";
import { AddShoppingCart } from "@material-ui/icons";
import { useState } from "react";
import AlertStocking from "../alert/alertStocking"



export default function ItemCount({ stock, name }) {
    const [initial, setInitial] = useState(1);
    const [errorMessage, setErrorMessage] = useState("")
    console.log(errorMessage)
    
    
    return (
      
      <CardActions className="cardAction">


        <div className="stockActions">
          <Button
            className="buttonCart"
            sx={{ minWidth: 35 }}
            onClick={() => {
              initial > 1 
                ? setInitial(initial - 1) 
                : setInitial(1);
            }}
          >
            -
          </Button>
          <p>{initial}</p>
          <Button
            className="buttonCart"
            sx={{ minWidth: 35 }}
            onClick={() => {
              initial < stock
                ? setInitial(initial + 1)
                : setErrorMessage("error")
                // alert(`*¡UPS!* - El producto ${name} cuenta con solo ${stock} unidades en stock`);
            }}
          >
            +
          </Button>
        </div>
        <Button
          className="buttonCart"
          variant="contained"
          disableElevation
          endIcon={<AddShoppingCart />}
          onClick={() => {
            console.log(initial)
            alert(`Add ${name} x${initial} to cart`);
          }}
        >
          Add to Cart
        </Button>
        {errorMessage &&  
          <AlertStocking stock={stock} name={name} message={setTimeout(() => {
            setErrorMessage("")
          }, 10000)}/>
          
        }
      </CardActions> 
    );

  }

