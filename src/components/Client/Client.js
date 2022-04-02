import React from 'react'
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles";
import Typography from '@mui/material/Typography';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CardInstance from '../CardInstance/CardInstance';

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



const Client = () => {
    const classes = useStyles();


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
                                src="https://ii.ct-stc.com/1/logos/empresas/2019/06/28/3d171d89750f426eb40b213014591thumbnail.jpg"
                                alt="Tex"
                                width="169"
                                height="150"
                                className={classes.img}
                            />
                        </a>

                    </Grid>
                    <Grid item xs={9}>
                        <Typography gutterBottom variant="h4" >
                            Technisupport
                            <hr></hr>
                        </Typography>
                        <Typography gutterBottom variant="body2" >
                            Sector tecnologia
                        </Typography>


                    </Grid>
                </Grid>
                <Typography gutterBottom variant="body2" >
                    <hr></hr>
                </Typography>
                <Grid className={classes.contentDiagnostico} item xs={12}  >
                    <Grid item xs={3}  >
                        <Typography gutterBottom variant="h6" >
                            Prueba de diagnostico
                        </Typography>

                    </Grid>
                    <Grid item xs={9} >
                        <Button variant="contained" endIcon={<MobileScreenShareIcon />}>
                            Iniciar test
                        </Button>

                    </Grid>
                </Grid>
            </Box>
            <Grid className={classes.contentClient} item xs={12}>
                  <CardInstance /> 
                </Grid>
        </Grid>
    )
}


export default Client;