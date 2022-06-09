import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MenuAction from './MenuAction';
import { Divider, Grid } from '@mui/material';
import { makeStyles } from "@mui/styles";
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
//import Input from '@mui/material/Input';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import { styled } from '@mui/material/styles';
//import Collapse from '@mui/material/Collapse';
import { blue, green, red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import VisibilityIcon from '@mui/icons-material/Visibility';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import WarningIcon from '@mui/icons-material/Warning';
import RefreshIcon from '@mui/icons-material/Refresh';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { connect } from "react-redux";
import { updateSesion } from "../../redux/actions/sesionAction";

import axios from 'axios';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

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

const CardInstance = ({ id, name, token, api_url, movil, client, setDataToEdit, deleteData, updateData, sesionActiva }) => {
  const classes = useStyles();
  //const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState('loading');
  const [openAlert, setOpenAlert] = useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios.get(`${api_url}status?token=${token}`)
      .then(res => {
        setStatus(res.data.accountStatus);
      })
      .catch(err => {
        setStatus('error');
      })
  }, [api_url, token]);



  const statusEquip = () => {
    switch (status) {
      case 'loading': return <CircularProgress size={20} color="inherit" />;
      case 'authenticated': return <ConnectedTvIcon sx={{ color: green[500] }} />;
      case 'got qr code': return <QrCode2Icon />;
      case 'error': return <WarningIcon sx={{ color: red[700] }} />;
      default: return <WarningIcon />;
    }
  }

  const handleSendMessage = () => {
    const date = new Date();
    axios.post(`${api_url}sendMessage?token=${token}`, {
      phone: `57${sesionActiva.photoURL}`,
      body: `[*${date.toLocaleDateString()} ${date.toLocaleTimeString()}]* Mensaje de verificación de estado del servicio.`
    }).then(res => {
      console.log("res:", res.data);
      if (res.data.sent) setOpenAlert(true);
    }).catch(err => {
      console.log("err:", err);
    })
  }

  const handleRestart = () => {

    axios.post(`${api_url}reboot?token=${token}`).then(res => {
      console.log("res:", res.data);
      if (res.data.sent) setOpenAlert(true);
    }).catch(err => {
      console.log("err:", err);
    })
  }

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return (
    //<Grid className={classes.content}>

    <Grid key={id} sx={{ marginTop: "15px", display: "flex", justifyContent:"center" }} item xs={12} sm={6} md={4} lg={3} xl={2}>
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
          <Divider />
          <Typography className={classes.tp} variant="body2" color="text.secondary">
            <b>Detalles Instancia</b>
            <IconButton onClick={handleOpen} aria-label="send" >
              <VisibilityIcon fontSize="small" />
            </IconButton>
          </Typography>
          {/* <Typography className={classes.tp} variant="body2" color="text.secondary" >
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
              </Collapse>*/}
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Grid sx={{ display: "flex", alignItems: "center" }} >
            {statusEquip()}
            { <IconButton onClick={handleRestart} aria-label="send" >
                <RefreshIcon />
              </IconButton> }
          </Grid>
          {!sesionActiva.email && (<Grid>
            <MenuAction
              item={{ id, name, token, api_url, movil, client }}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
              updateData={updateData}
            />
            <IconButton aria-label="send" onClick={handleSendMessage}>
              <SendIcon sx={{ color: blue[900] }} />
            </IconButton>
          </Grid>)}

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
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
          Mensaje enviado con éxito.
        </Alert>
      </Snackbar>
    </Grid>

    //</Grid>

  );
}

const mapStateToProps = (state) => {
  return {
    sesionActiva: state.sesion.sesionActiva,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateSesion: (sesion) => dispatch(updateSesion(sesion)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardInstance);
