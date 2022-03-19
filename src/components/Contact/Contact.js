import React, { useState } from "react";
import { Grid, Paper, TextField, Button, Typography } from '@mui/material';
import SendIcon from "@mui/icons-material/Send";
import SimpleModal from "../Pages/SimpleModal";
import { makeStyles } from "@mui/styles";
import { helpHttp } from "../../helpers/helpHttp";
import { blue } from '@mui/material/colors';


const initialForm = {
    name: "",
    mensaje: "",
    asunto: "",
    correo: "",
};

let api = helpHttp(),
    urlForm = "https://formsubmit.co/ajax/casm2203@gmail.com";

const Contact = () => {
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
        avatar: {
            backgroundColor: "red",
        },

        gridButton: {
            marginTop: "20px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
        },
    }));

    const classes = useStyles();
    const [openn, setOpenn] = useState(false);
    const [form, setForm] = useState(initialForm);


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.mensaje) {
            alert("Datos incompletos");
            return;
        }

        sendFormContact(form);
        handleReset();
        handleModal();
    };

    const handleReset = (e) => {
        setForm(initialForm);
    };

    const handleModal = () => {
        setOpenn(!openn);
    };

    const sendFormContact = (data) => {
        let options = {
            body: data,
            headers: { "content-type": "application/json" },
        };

        api.post(urlForm, options).then((res) => {
            if (!res.err) {
                console.log(null);
            } else {
                console.log(res);
            }
        });
    };

    return (
        <Grid className={classes.gridItems}>
            <Paper className={classes.content} elevation={5}>
                <SimpleModal open={openn} setOpen={setOpenn} formContact={1} />
                <form onSubmit={handleSubmit}>
                    <Grid container justify="space-between" spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant="h6" color="initial">
                                <b>Contactame</b>
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" color="initial">
                                Hola, si quieres conocerme puedes enviar un email
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                variant="outlined"
                                label="Nombre"
                                placeholder="Nombre"
                                value={form.name}
                                name="name"
                                fullWidth
                                required
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                variant="outlined"
                                label="Correo"
                                placeholder="Correo"
                                type="text"
                                name="correo"
                                value={form.correo}
                                fullWidth
                                required
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                // className={classes.mensaje}
                                label="Asunto"
                                placeholder="Asunto"
                                name="asunto"
                                value={form.asunto}
                                fullWidth
                                required
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                // className={classes.mensaje}
                                label="Mensaje"
                                placeholder="Mensaje"
                                name="mensaje"
                                value={form.mensaje}
                                multiline
                                rows={6}
                                fullWidth
                                required
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid className={classes.gridButton} item xs={12}>
                            <Button
                                variant="contained"
                                sx={{ background: blue[900] }}
                                startIcon={<SendIcon />}
                                type="submit"
                            >
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    );
};


export default Contact;