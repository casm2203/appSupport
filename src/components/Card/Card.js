import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import MenuAction from './MenuAction';
import { Grid } from '@mui/material';
import { makeStyles } from "@mui/styles";
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import { blue } from '@mui/material/colors';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const useStyles = makeStyles((theme) => ({
  ip: {
    marginTop: "10px",
  },
  tp: {
    marginTop: "5px",
  },
  content: {
    display: "flex",
    width: "100%",
    margin: "auto",

    padding: "20px",
  },
  cardItem: {
    marginRight: "10px"
  }

}));


export default function MediaCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid className={classes.content}>
      <Grid className={classes.cardItem} item xs={12} sm={6} md={4} lg={3} xl={2}>
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
            <Typography className={classes.tp} variant="body2" color="text.secondary">
              <b>Detalles Instancia</b>
            </Typography>
            <Typography className={classes.tp} variant="body2" color="text.secondary">
              <b>API URL:</b>  https://eu215.chat-api.com/instance102304/
            </Typography>

            <Typography className={classes.tp} variant="body2" color="text.secondary">
              <b>Token:</b> 6ff5f1g1nvuq5t2m
            </Typography>
            <Typography className={classes.tp} variant="body2" color="text.secondary">
              <b>Enlace WhatsApp:</b> <a href="https://api.whatsapp.com/send?phone=573015748542"
                target="_blank"
                rel="noreferrer">https://api.whatsapp.com/send?phone=573015748542</a>
            </Typography>

            <Typography className={classes.tp} variant="body2" color="text.secondary">
              <b>Movil:</b> 573015748542
            </Typography>
            <hr></hr>
            <Typography className={classes.tp} variant="body2" color="text.secondary">
              <b>Cuerpo del mensaje</b>
            </Typography>
            <Input className={classes.ip} fullWidth placeholder="Número celular" />
            <Input className={classes.ip} fullWidth placeholder="Mensaje personalizado" />

          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button sx={{ color: blue[900] }} size="small">Enviar</Button>
            <MenuAction />
          </CardActions>
        </Card>
      </Grid>

      <Grid className={classes.cardItem} item xs={12} sm={6} md={4} lg={3} xl={2} >
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
            <Typography className={classes.tp} variant="body2" color="text.secondary">
              <b>Detalles Instancia</b>
            </Typography>
            <Typography className={classes.tp} variant="body2" color="text.secondary">
              <b>API URL:</b>  https://eu215.chat-api.com/instance102304/
            </Typography>

            <Typography className={classes.tp} variant="body2" color="text.secondary">
              <b>Token:</b> 6ff5f1g1nvuq5t2m
            </Typography>
            <Typography className={classes.tp} variant="body2" color="text.secondary">
              <b>Enlace WhatsApp:</b> <a href="https://api.whatsapp.com/send?phone=573015748542"
                target="_blank"
                rel="noreferrer">https://api.whatsapp.com/send?phone=573015748542</a>
            </Typography>

            <Typography className={classes.tp} variant="body2" color="text.secondary">
              <b>Movil:</b> 573015748542
            </Typography>
            <hr></hr>
            <Typography className={classes.tp} variant="body2" color="text.secondary">
              <b>Cuerpo del mensaje</b>
            </Typography>
            <Input className={classes.ip} fullWidth placeholder="Número celular" />
            <Input className={classes.ip} fullWidth placeholder="Mensaje personalizado" />

          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "end" }}>
            <MenuAction />
            <IconButton  aria-label="send" >
              <SendIcon sx={{ color: blue[900] }} />
            </IconButton>
          </CardActions>
        </Card>

      </Grid>
      {/* card expand */}
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
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
            <Typography className={classes.tp} variant="body2" color="text.secondary">
              <b>Detalles Instancia</b> <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </Typography>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography className={classes.tp} variant="body2" color="text.secondary">
                  <b>API URL:</b>  https://eu215.chat-api.com/instance102304/
                </Typography>

                <Typography className={classes.tp} variant="body2" color="text.secondary">
                  <b>Token:</b> 6ff5f1g1nvuq5t2m
                </Typography>
                <Typography className={classes.tp} variant="body2" color="text.secondary">
                  <b>Enlace WhatsApp:</b> <a href="https://api.whatsapp.com/send?phone=573015748542"
                    target="_blank"
                    rel="noreferrer">https://api.whatsapp.com/send?phone=573015748542</a>
                </Typography>

                <Typography className={classes.tp} variant="body2" color="text.secondary">
                  <b>Movil:</b> 573015748542
                </Typography>
              </CardContent>
            </Collapse>

            <Typography className={classes.tp} variant="body2" color="text.secondary">
              <b>Cuerpo del mensaje</b>
            </Typography>
            <Input className={classes.ip} fullWidth placeholder="573015748542" />
            <Input className={classes.ip} fullWidth placeholder="Mensaje personalizado" />

          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "end" }}>
            <MenuAction />
            <IconButton  aria-label="send" >
              <SendIcon sx={{ color: blue[900] }} />
            </IconButton>

          </CardActions>
        </Card>
      </Grid>
    </Grid>

  );
}
