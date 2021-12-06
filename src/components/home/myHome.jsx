import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import { Container, Box, Typography, MenuItem } from "@mui/material";
import Loading from "../loading/loading";


const useStyles = makeStyles(themeConfig =>({

  linksRef: {
    color: "white",
    textDecoration: "none",

  },
  homeLogo:{
    paddingLeft: 200, 
    paddingRight: 200,

  }
  
}));

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Loading/>
      <CssBaseline />
      <Container className={classes.homeLogo}>
        <section className="home"></section>
      </Container>
      <Box sx={{ display: "flex", backgroundColor: "#011013",width: {xl: 1500}, margin: {xl: "auto"}}}>
        <Box sx={{ paddingTop: 10, paddingBottom: 10, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography
            component="div"
            variant="h3"
            color="#ffffff"
            sx={{ margin: 5 }}
          >
            "inBowl sabe mejor"
          </Typography>
          <Typography
            component="div"
            variant="subtitle"
            color="#ffffff"
            sx={{ paddingLeft: 15, paddingRight: 15 }}
          >
            Abrimos nuestras puertas en el año 2020, con
            nuestro primer resto, delivery & take away, en la Ciudad de Buenos Aires,
            ofreciendo máxima calidad al mejor precio posible. Gracias al apoyo
            de nuestros clientes, experimentamos una explosión de crecimiento en
            el mercado. Somos diseñadores del buen gusto, y nos esforzamos para
            que absolutamente cada ingrediente componga una pieza perfecta.

          </Typography>
          <Typography
            component="div"
            variant="h6"
            color="#ffffff"
            sx={{ margin: 5 }}
          >
            <Link to="/menu" className={classes.linksRef}> Visita Nuestro Menu</Link>
          </Typography>
        </Box>
        <Box className="homeInfo"></Box>
      </Box>
      <Box sx={{ display: "flex", backgroundColor: "#011013",width: {xl: 1500}, margin: {xl: "auto"}}}>
        <Box className="homeInfo"></Box>
        <Box sx={{ paddingTop: 10, paddingBottom: 10, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography
            component="div"
            variant="h3"
            color="#ffffff"
            sx={{ margin: 5 }}
          >
            "inBowl sabe mejor"
          </Typography>
          <Typography
            component="div"
            variant="subtitle"
            color="#ffffff"
            sx={{ paddingLeft: 15, paddingRight: 15 }}
          >
            Abrimos nuestras puertas en el año 2020, con
            nuestro primer resto, delivery & take away, en la Ciudad de Buenos Aires,
            ofreciendo máxima calidad al mejor precio posible. Gracias al apoyo
            de nuestros clientes, experimentamos una explosión de crecimiento en
            el mercado. Somos diseñadores del buen gusto, y nos esforzamos para
            que absolutamente cada ingrediente componga una pieza perfecta.

          </Typography>
          <Typography
            component="div"
            variant="h6"
            color="#ffffff"
            sx={{ margin: 5 }}
          >
            <Link to="/menu" className={classes.linksRef}> Visita Nuestro Menu</Link>
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}
