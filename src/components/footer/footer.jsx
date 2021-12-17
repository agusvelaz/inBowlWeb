import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  brandTitle: {
    color: "#7d6644",
    textDecoration: "none",
  },
  linksRef: {
    color: "#9f9f9fcc",
    textDecoration: "none",
    "&:hover": {
      color: "#7d6644",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box
      bgcolor="#0a0a0a"
      sx={{
        height: 200,
        bottom: 0,
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        alignContent: "center",
      }}
    >
      <Typography
        variant="h4"
        noWrap
        component="div"
        sx={{ display: { xs: "block", sm: "block" } }}
        className={classes.brandTitle}
      >
        <Link to="/" className={classes.brandTitle}>
          InBowl
        </Link>
        {/* 🔥 */}
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Link to="/" className={classes.linksRef}>
          <Button color="inherit"> Home</Button>
        </Link>
        <Link to="/menu" className={classes.linksRef}>
          <Button color="inherit"> Menu </Button>
        </Link>
        <Link to="/nosotros" className={classes.linksRef}>
          <Button color="inherit">Nosotros</Button>
        </Link>
      </Box>
      <Typography sx={{ color: "#504e4ecc" }}>
        Copyright © 2021 InBowl - Todos los derechos Reservados -
        info@InBowl.com.
      </Typography>
      <Typography sx={{ color: "#504e4ecc" }}>
        - By{" "}
        <a href="https://github.com/agusvelaz" target="_blank"className={classes.linksRef}>
          AlphaDevs -
        </a>
      </Typography>
    </Box>
  );
}
