import React from 'react'
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles";
import Typography from '@mui/material/Typography';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CardInstance from '../CardInstance/CardInstance';
import { blue } from '@mui/material/colors';
import Spinner from '../Pages/Spinner';


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
}) => {
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
                            <hr />
                        </Typography>
                        <Typography gutterBottom variant="body2" >
                            WhatsApp Business API
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
                        <Button variant="contained" sx={{ background: blue[900] }} endIcon={<MobileScreenShareIcon />} >
                            Iniciar test
                        </Button>

                    </Grid>
                </Grid>
            </Box>

            {/* <Grid className={classes.contentClient} item xs={12}>
            </Grid> */}
            {(data.length > 0) ? (<>
                <CardInstance
                    data={data}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                    updateData={updateData}
                /><CardInstance
                data={data}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                updateData={updateData}
            />
            <CardInstance
                    data={data}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                    updateData={updateData}
                />
                <CardInstance
                    data={data}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                    updateData={updateData}
                />
                <CardInstance
                    data={data}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                    updateData={updateData}
                />
            </>):(<Spinner/>)
            }
        </Grid>
    )
}


export default Client;