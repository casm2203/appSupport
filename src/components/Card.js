import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import { makeStyles } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  cardHome: {
    background:"#00000",
  },
}));

export default function MediaCard() {
     const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://ii.ct-stc.com/1/logos/empresas/2019/06/28/3d171d89750f426eb40b213014591thumbnail.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Technisupport
        </Typography>
        <hr></hr>
        <Typography variant="body2" color="text.secondary">
          <b>API URL:</b>  https://eu215.chat-api.com/instance102304/
        </Typography>
        
        <Typography  variant="body2" color="text.secondary">
        <b>Token:</b> 6ff5f1g1nvuq5t2m
        </Typography>

      <Input placeholder="Número celular"/>

      </CardContent>
      <CardActions>
        <Button className={classes.cardHome} size="small">Enviar</Button>
        </CardActions>
    </Card>
  );
}
