import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
import { blue, green, yellow } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import VisibilityIcon from '@mui/icons-material/Visibility';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import WarningIcon from '@mui/icons-material/Warning';
import RefreshIcon from '@mui/icons-material/Refresh';

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
  }
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CardInstance = ({
  data,
  setDataToEdit,
  deleteData,
  updateData,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [status] = useState(2);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(data, "cardinstance")


  const statusEquip = () => {
    switch(status) {
      case 0:   return <ConnectedTvIcon sx={{ color: green[500]}} />;
      case 1:   return <QrCode2Icon />;
      case 2:   return <WarningIcon sx={{ color: yellow[700]}} />;
      default:      return <WarningIcon />;
    }
  }


  return (
    //<Grid className={classes.content}>
    <>
      {data.map(({ id, name, token, api_url, movil, client, message }) => (
        <Grid key={id} sx={{ marginTop: "10px" }} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card sx={{ maxWidth: 250, width: 300 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://ii.ct-stc.com/1/logos/empresas/2019/06/28/3d171d89750f426eb40b213014591thumbnail.jpg"
              alt="green iguana"
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <hr></hr>
              <Typography className={classes.tp} variant="body2" color="text.secondary">
                <b>Detalles Instancia</b>
                <IconButton onClick={handleOpen} aria-label="send" >
                  <VisibilityIcon fontSize="small" />
                </IconButton>
              </Typography>
              <Typography className={classes.tp} variant="body2" color="text.secondary" >
                <strong>Cuerpo del mensaje</strong>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="mostrar más"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </Typography>
              <Collapse in={expanded} timeout="auto" unmountOnExit className={classes.colapsee} >
                <Input className={classes.ip} fullWidth placeholder="573015748542" />
                <Input className={classes.ip} fullWidth placeholder="Mensaje personalizado" />
              </Collapse>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent:"space-between" }}>
              <Grid sx={{ display: "flex", alignItems:"center" }} >
                {statusEquip() }
                <IconButton aria-label="send" >
                  <RefreshIcon  />
                </IconButton>
              </Grid>
              <Grid>
                <MenuAction
                  item={{ id, name, token, api_url, movil, client, message }}
                  setDataToEdit={setDataToEdit}
                  deleteData={deleteData}
                  updateData={updateData}
                />
                <IconButton aria-label="send" >
                  <SendIcon sx={{ color: blue[900] }} />
                </IconButton>
              </Grid>
            </CardActions>
          </Card>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography variant="h6" color="text.secondary">
                <b>Instancia:</b>  {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>API URL:</b>  {api_url}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                <b>Token:</b> {token}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Enlace WhatsApp:</b> <a href={`https://api.whatsapp.com/send?phone={movil}`}
                  target="_blank"
                  rel="noreferrer">{`https://api.whatsapp.com/send?phone=${movil}`}</a>
              </Typography>

              <Typography variant="body2" color="text.secondary">
                <b>Movil:</b> {movil}
              </Typography>
            </Box>
          </Modal>
        </Grid>

      ))}
    </>
    //</Grid>

  );
}

export default CardInstance;