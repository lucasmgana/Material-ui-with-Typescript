import React from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    item: {
        display: "flex",
        alignIitems: "center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down("sm")]: {
            cursor: "pointer",
            marginBottom: theme.spacing(3)
        }
    },
    text: {
        color: "black",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        }
    },
    container: {
        height: "100vh",
        backgroundColor:theme.palette.primary.main,
        color: "white",
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: "0px",
        [theme.breakpoints.up("sm")]:{
            backgroundColor: "white",
            color: "#555",
            border: "1px solid #9e9"
        }
    },
    icon:{
        paddingRight: theme.spacing(1),
        [theme.breakpoints.down("sm")]:{
            fontSize: "14px",
            margin: "auto",
    }
}
}))

const Leftbar =()=>{
    const classes = useStyles();

    return (
  <Container className={classes.container}>
      <div className={classes.item}>
          <Typography className={classes.icon} variant="h5">H</Typography>
          <Typography className={classes.text} variant="h6">
              Home
          </Typography>
      </div>
      <div className={classes.item}>
          <Typography className={classes.icon} variant="h5">M</Typography>
          <Typography className={classes.text} variant="h6">
              Music
          </Typography>
      </div>
      <div className={classes.item}>
          <Typography className={classes.icon} variant="h5">D</Typography>
          <Typography className={classes.text} variant="h6">
              Disco
          </Typography>
      </div>
      <div className={classes.item}>
          <Typography className={classes.icon} variant="h5">P</Typography>
          <Typography className={classes.text} variant="h6">
              Photography
          </Typography>
      </div>
      <div className={classes.item}>
          <Typography className={classes.icon} variant="h5">C</Typography>
          <Typography className={classes.text} variant="h6">
              Captures
          </Typography>
      </div>
  </Container>
    )
}

export default Leftbar
