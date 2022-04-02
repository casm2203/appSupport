import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  ip: {
    marginTop: "10px",
  },
  tp: {
    display: "flex",
    width: "100%",
    marginTop: "5px",
    justifyContent: "space-between",
    alignItems: "center"
  },
  content: {
    display: "flex",
    width: "100%",
    margin: "auto",
    padding: "20px",
  },
  cardItem: {
    marginRight: "10px"
  },
  colapsee: {
    padding: "0px",
  },
  link: {
    textDecoration: "none",
    marginLeft: "5px",
    display: "flex",
    width: "100%",
    color: "black",
  }
}));


const CardInstance = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.content}>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card sx={{ maxWidth: 250, width: 300 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://ii.ct-stc.com/1/logos/empresas/2019/06/28/3d171d89750f426eb40b213014591thumbnail.jpg"
            alt="green iguana"
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              Technisupport
            </Typography>

          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "end" }}>
            <Typography gutterBottom variant="body2" component="div">
              <NavLink className={classes.link} to="/">
                Ir a las instancias</NavLink>
            </Typography>


          </CardActions>
        </Card>

      </Grid>
    </Grid>

  );
}

export default CardInstance;