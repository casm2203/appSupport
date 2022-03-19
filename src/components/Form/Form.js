import React, { useState, useEffect } from "react";
//UI
import { makeStyles } from "@mui/styles";
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material';
import Save from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/Clear";
import PublicIcon from '@mui/icons-material/Public';
import { blue } from '@mui/material/colors';


const initialForm = {
    name: "",
    movil: "",
    api_url: "",
    token: "",
    mensaje:"",
    id: null,
};
const Form = ({
    createData,
    updateData,
    dataToEdit,
    setDataToEdit,
    responsive,
}) => {
    const useStyles = makeStyles((theme) => ({
        gridItems: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        content: {
            width: "40%",
            margin: "auto",
            padding: "20px",
        },
        avatar: {
            backgroundColor: "#121858",
        },
        gridButton: {
            marginTop: "15px",
            display: "flex",
            justifyContent: "space-between",
        },
    }));

    const classes = useStyles();
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initialForm);
        }
    }, [dataToEdit]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.enlaceEmbed.value, "validando donde aparece");
        if (!form.name || !form.descripcion) {
            alert("Datos incompletos");
            return;
        }

        if (dataToEdit) {
            updateData({ ...form, enlaceEmbed: e.target.enlaceEmbed.value });
        } else {
            createData({ ...form, enlaceEmbed: e.target.enlaceEmbed.value });
        }
        handleReset();
    };

    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    };

    return (
        <Grid className={classes.gridItems} item xs={12}>
            <Paper className={classes.content} elevation={5}>
                <Grid align="center">
                    <Avatar className={classes.avatar}>
                        <PublicIcon />
                    </Avatar>
                    {dataToEdit ? <h2>Editar Instancia</h2> : <h2>Agregar Instancia</h2>}
                </Grid>
                <form onSubmit={handleSubmit}>
                    <Grid container justify="space-between" spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="Nombre de la instancia"
                                placeholder="Nombre dela instancia"
                                value={form.name}
                                name="name"
                                fullWidth
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="API URL"
                                placeholder="API URL"
                                type="text"
                                value={form.api_url}
                                onChange={handleChange}
                                name="api_url"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="Token"
                                placeholder="Token"
                                type="text"
                                value={form.token}
                                onChange={handleChange}
                                name="token"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="Movil"
                                placeholder="Movil"
                                type="text"
                                value={form.movil}
                                onChange={handleChange}
                                name="movil"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                label="Mensaje Predeterminado"
                                placeholder="Mensaje Predeterminado"
                                type="text"
                                value={form.mensaje}
                                onChange={handleChange}
                                name="mensaje"
                                fullWidth
                                required
                            />
                        </Grid>

                        <Grid className={classes.gridButton} item xs={12}>
                            <Button
                                variant="contained"
                                color="inherit"
                                startIcon={<ClearIcon />}
                                type="reset"
                                onClick={handleReset}
                            >
                                Limpiar
                            </Button>

                            <Button
                                variant="contained"
                                sx={{ background: blue[900] }}
                                startIcon={<Save />}
                                type="submit"
                            >
                                Guardar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    );
};

export default Form;
