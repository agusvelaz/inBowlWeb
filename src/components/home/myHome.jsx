import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import { Container, Box, Typography} from "@mui/material";

import HomeLogo from "../../assets/img/homeImg3.png";
import ChefOne from "../../assets/img/chef1.jpg";

const useStyles = makeStyles((themeConfig) => ({
  linksRef: {
    color: "white",
    textDecoration: "none",
  },
  homeLogo: {
    maxWidth: 1500,
    padding: 0,
    width: "100%",
    magin: "0 auto",
  },
  homeImg: {
    width: "100%",
    height: "auto",
  },
  homeInfo: {
    alignItems: "center",
    display: "flex",
    width: "3100px",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.homeLogo}>
        <img src={HomeLogo} className={classes.homeImg} alt="homeImg"></img>
      </Container>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#0a0a0a",
          width: { xl: 1500 },
          margin: { xl: "auto" },
          flexDirection: {sm:"column", md:"row"},
          overflow: "hidden"
        }}
      >
        <Box
          sx={{
            paddingTop: 10,
            paddingBottom: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            component="div"
            variant="h3"
            color="#ffffff"
            sx={{ margin: 5 }}
          >
            "InBowl sabe mejor"
          </Typography>
          <Typography
            component="div"
            variant="subtitle"
            color="#ffffff"
            sx={{ paddingLeft: 15, paddingRight: 15 }}
          >
            Abrimos nuestras puertas en el año 2020, con nuestro primer resto,
            delivery {"&"} take away, en la Ciudad de Buenos Aires, ofreciendo
            máxima calidad al mejor precio posible. Gracias al apoyo de nuestros
            clientes, experimentamos una explosión de crecimiento en el mercado.
            Somos diseñadores del buen gusto, y nos esforzamos para que
            absolutamente cada ingrediente componga una pieza perfecta.
          </Typography>
          <Typography
            component="div"
            variant="h6"
            color="#ffffff"
            sx={{ margin: 5 }}
          >
            <Link to="/menu" className={classes.linksRef}>
              {" "}
              Visita Nuestro Menu
            </Link>
          </Typography>
        </Box>
        <Box className={classes.homeInfo}>
          <img src={ChefOne} className={classes.homeImg} alt="chefImg"></img>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#0a0a0a",
          width: { xl: 1500 },
          margin: { xl: "auto" },
        }}
      >
        <Box className={classes.homeInfo}>
          <img src={ChefOne} className={classes.homeImg} alt="chefImg"></img>
        </Box>
        <Box
          sx={{
            paddingTop: 10,
            paddingBottom: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            component="div"
            variant="h3"
            color="#ffffff"
            sx={{ margin: 5 }}
          >
            "InBowl sabe mejor"
          </Typography>
          <Typography
            component="div"
            variant="subtitle"
            color="#ffffff"
            sx={{ paddingLeft: 15, paddingRight: 15 }}
          >
            Abrimos nuestras puertas en el año 2020, con nuestro primer resto,
            delivery & take away, en la Ciudad de Buenos Aires, ofreciendo
            máxima calidad al mejor precio posible. Gracias al apoyo de nuestros
            clientes, experimentamos una explosión de crecimiento en el mercado.
            Somos diseñadores del buen gusto, y nos esforzamos para que
            absolutamente cada ingrediente componga una pieza perfecta.
          </Typography>
          <Typography
            component="div"
            variant="h6"
            color="#ffffff"
            sx={{ margin: 5 }}
          >
            <Link to="/menu" className={classes.linksRef}>
              {" "}
              Visita Nuestro Menu
            </Link>
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}
