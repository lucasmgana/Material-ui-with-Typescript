import React from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faDollyFlatbed, faHome, faMusic, faPhotoVideo } from '@fortawesome/free-solid-svg-icons';

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
    icona:{
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
          <FontAwesomeIcon className={classes.icona} icon={ faHome } size="1x" />
          <Typography className={classes.text} variant="body2">
              Home
          </Typography>
      </div>
      <div className={classes.item}>
          <FontAwesomeIcon icon={ faMusic } className={classes.icona} size="1x" />
          <Typography className={classes.text} variant="body2">
              Music
          </Typography>
      </div>
      <div className={classes.item}>
          <FontAwesomeIcon icon={ faDollyFlatbed } className={classes.icona} size="1x" />
          <Typography className={classes.text} variant="body2">
              Disco
          </Typography>
      </div>
      <div className={classes.item}>
          <FontAwesomeIcon icon={ faCameraRetro } className={classes.icona} size="1x" />
          <Typography className={classes.text} variant="body2">
              Photography
          </Typography>
      </div>
      <div className={classes.item}>
          <FontAwesomeIcon icon={ faPhotoVideo } className={classes.icona} size="1x" />
          <Typography className={classes.text} variant="body2">
              Captures
          </Typography>
      </div>
  </Container>
    )
}

export default Leftbar
