import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid,Button } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import MenuAction from "../CardInstance/MenuAction";
import LinkIcon from '@mui/icons-material/Link';
import { blue } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    width: "100%",
    margin: "auto",
    padding: "20px",
  },
  cardItem: {
    marginRight: "10px",
    paddingTop:"5px",
  },
  colapsee: {
    padding: "0px",
  },
  link: {
    display: "flex",
    width: "100%",
    color: "black",
    marginLeft: "5px",
    textDecoration: "none",
  }
}));


export default function MediaCard() {
  const classes = useStyles();

  return (
    <Grid className={classes.content}>

      <Grid className={classes.cardItem} item xs={12} sm={6} md={4} lg={3} xl={2}>
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
          <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
            <MenuAction />
            <Typography  variant="body2" >
              <NavLink className={classes.link} to="/">
                <Button size="small" variant="contained" endIcon={<LinkIcon />} sx={{fontSize: "12px", textTransform:"lowercase", background: blue[900] }} >
                  Ir a Instancias
                </Button>
              </NavLink>
            </Typography>
          </CardActions>
        </Card>

      </Grid>
    </Grid>

  );
}
