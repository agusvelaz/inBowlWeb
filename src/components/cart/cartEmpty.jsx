
import { Box, Typography,Button } from "@mui/material";
import { Link } from "react-router-dom";



export default function CartEmpty() {
    return (<>
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
        Tu carrito está vacío :(
      </Typography>
      <Typography
        component="div"
        variant="subtitle1"
        color="#ffffff"
        sx={{
          marginTop: 1,
          marginBottom: 1,
          textAlign: "center",
          
          // margin:"auto"
        }}
      >
        ¿No sabés qué comprar? <Link to="/menu" className="linksRef">
              <Button color="inherit"> Visita nuestro Menu </Button>
            </Link>
      </Typography>
     </> 
    )
}