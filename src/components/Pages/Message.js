import { Grid, makeStyles } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";
const useStyles = makeStyles((theme) => ({
  gridItems: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const Message = ({ msg, bgColor }) => {
  const classes = useStyles();
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlig: "center",
    color: "white",
    fontWeight: "bold",
    background: bgColor,
  };
  return (
    <Grid className={classes.gridItems} xs={12}>
      <div style={styles}>
        <Typography component={'span'} variant={'body2'}>
          {msg}
        </Typography>
      </div>
    </Grid>
  );
};

export default Message;
