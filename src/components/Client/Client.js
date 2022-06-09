import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles";
import Typography from '@mui/material/Typography';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import Box from '@mui/material/Box';
import CardInstance from '../CardInstance/CardInstance';
import Spinner from '../Pages/Spinner';
import Divider from '@mui/material/Divider';
import { Snackbar, TextField } from '@mui/material';
import { Alert } from "@mui/material";


const CONTENTBASE = {
    display: "flex",
    width: "90%",
    margin: "auto",
    alignItems: "center",
    height: "180px",
}

const useStyles = makeStyles((theme) => ({
    content: {
        ...CONTENTBASE,
        boxShadow: 2,
        borderRadius: 2,
    },
    contentClient: {
        ...CONTENTBASE,
    },
    contentDiagnostico: {
        ...CONTENTBASE,
        height: "70px",
    },
    img: {
        borderRadius: "20%",
    },
}));



const Client = ({
    data,
    setDataToEdit,
    deleteData,
    updateData,
    testGlobal,
    searcher,
}) => {
    const classes = useStyles();
    const [copied, setCopied] = useState(false);

    const handleCloseNotify = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setCopied(false);
    };


    return (
        <Grid container className={classes.content} >
            <Box
                sx={{
                    width: "100%",
                    boxShadow: 2,
                    borderRadius: 2,
                }}
            >
                <Grid className={classes.contentClient} item xs={12}>
                    <Grid sx={{ display: "flex", justifyContent: "center" }} item xs={3}>
                        <a
                            href="https://www.linkedin.com/in/cristian-suarez2203"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="https://www.whoson.com/img/product/api/chat-api.png"
                                alt="Tex"
                                width="169"
                                height="150"
                                className={classes.img}
                            />
                        </a>

                    </Grid>
                    <Grid item xs={9}>
                        <Typography gutterBottom variant="h4" >
                            Chat API
                            <Divider />
                        </Typography>
                        <Typography gutterBottom variant="body2" >
                            WhatsApp Business API
                        </Typography>
                    </Grid>
                </Grid>
                <Typography gutterBottom variant="body2" >
                    <Divider />
                </Typography>
                <Grid className={classes.contentDiagnostico} item xs={12}  >
                    <Grid item xs={4}  >
                        <Typography gutterBottom variant="h6" >
                            Prueba de diagnostico de WhatsApp
                        </Typography>
                    </Grid>
                    <Grid item xs={4} >
                        <Button variant="contained" onClick={() => { testGlobal(); setCopied(true) }} sx={{ background: blue[900] }} endIcon={<MobileScreenShareIcon />} >
                            Iniciar test
                        </Button>
                    </Grid>
                    <Grid item xs={4} >
                        <form>
                        <TextField id="standard-basic" onChange={searcher} fullWidth label="Buscar instancia" variant="standard" />
                        </form>
                    </Grid>
                </Grid>
            </Box>
            <Snackbar
                open={copied}
                autoHideDuration={2000}
                onClose={handleCloseNotify}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert sx={{ background: blue[900], color: 'white', border: 'solid' }} severity="info">Mensajes Enviados</Alert>
            </Snackbar>
            <Grid container >

                {(data.length > 0) ? (<>
                    {data.map((el) => (
                        <CardInstance
                            key={el.id}
                            {...el}
                            setDataToEdit={setDataToEdit}
                            deleteData={deleteData}
                            updateData={updateData}
                        />
                    ))}
                </>) : (<Spinner />)
                }
            </Grid>
        </Grid>
    )
}


export default Client;