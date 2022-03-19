import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import persona from "../../assets/cris.jpg";
import steven from "../../assets/steven.jpg";
import andres from "../../assets/andres.jpg";
import Tex from "../../assets/TE.jpg";
import { makeStyles } from "@mui/styles";

const We = () => {

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
            color: "white",
            marginLeft: "5px",
        },
        ButtonLink: {
            color: "Red",
        },
        buttonMenu: {
            marginTop: "2rem",
        },
        contentTitle: {
            justifyContent: "center",
            marginBottom: "20px",
        },
        name: {
            background: "#121858",
            borderRadius: "0.25rem",
            color: "white",
            padding: "5px",
        },
        contentCris: {
            marginTop: "20px",
            marginBottom: "20px",
        },
        
    }));

    const classes = useStyles();
    return (
        <Grid className={classes.gridItems}>
            <Paper className={classes.content} elevation={5}>
                <Grid className={classes.contentTitle} container>
                    <Typography variant="h4" color="initial">
                        Hola <span className={classes.name}>Somos Technoexperience</span>,
                        Mucho gusto.
                    </Typography>
                </Grid>
                <Grid container justify="center">
                    <Typography align="justify" variant="body1" color="initial">
                        Somos un grupo de estudiantes de ingenieria de sistemas en septimo semestre de la universidad de la costa ubicada en Barranquilla/Colombia, 
                        creamos este proyecto con el fin de afianzar conocimientos de las diferentes asignaturas que presentamos este semestre.
                    </Typography>
                </Grid>

                <Grid className={classes.contentCris} container justifyContent="center">
                    <a
                        href="https://www.linkedin.com/in/cristian-suarez2203"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={Tex}
                            alt="Tex"
                            width="189"
                            height="170"
                        />
                    </a>
                </Grid>
                <Grid container>
                    <Typography variant="body1" color="initial">
                        <b>Nuestro equipo:</b>
                    </Typography>
                </Grid>
                <Grid container justifyContent="space-around" sx={{ marginTop: "20px" }}>
                    <a
                        href="https://www.sutherlandglobal.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={persona} alt="sutherland" width="160" height="140" />
                    </a>
                    <a href="https://www.sagicc.co/" target="_blank" rel="noreferrer">
                        <img src={steven} alt="steven" width="160" height="140" />
                    </a>
                    <a href="https://www.gocargo.co/" target="_blank" rel="noreferrer">
                        <img src={andres} alt="andres" width="160" height="140" />
                    </a>
                </Grid>
            </Paper>
        </Grid>
    );
};



export default We;