import React from "react";
import {
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import PublicIcon from '@mui/icons-material/Public';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  gridItems: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  content: {
    width: "50%",
    margin: "auto",
    padding: "20px",
  },
  link: {
    textDecoration: "none",
  },
  buttonMenu: {
    marginTop: "2rem",
  },
  contentTitle: {
    justifyContent: "center",
    marginBottom: "20px",
  },
  backMenu: {
    marginTop: "20px",
  },
  titleYT: {
    marginTop: "20px",
  },
  iconYT: {
    background: "#121858",
    borderRadius: "0.25rem",
    color: "white",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
}));

const Nosotros = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.gridItems}>
      <Paper className={classes.content} elevation={5}>
        <Grid className={classes.contentTitle} container xs={12}>
          <Typography variant="h1" color="initial">
            404
          </Typography>
        </Grid>

        <Grid container justifyContent="center" xs={12}>
          <Typography align="center" variant="h5" color="initial">
            ¡Lo sentimos! 😕<br></br> Esta página no existe o<br></br> no ha
            podido ser encontrada.
          </Typography>
        </Grid>
        <Grid container xs={12} justifyContent="center" className={classes.backMenu}>
          <NavLink className={classes.link} exact to="/">
            <Button variant="contained">Volver al inicio</Button>
          </NavLink>
        </Grid>
        <Grid className={classes.titleYT} container xs={12} justifyContent="center">
          <Typography variant="h6" className={classes.iconYT}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <PublicIcon />
            </IconButton>
            AppSupport
          </Typography>
        </Grid>
        <Grid container justifyContent="center" xs={12} className={classes.backMenu}>
          <Typography variant="Body" align="center" color="initial">
            www.AppSupport.co | +57 301 574 8542 | me@appsupport.com
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default Nosotros;
