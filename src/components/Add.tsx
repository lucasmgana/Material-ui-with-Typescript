import React, { useState } from 'react'
import { Container, Fab, Modal, makeStyles, Tooltip, Typography } from '@material-ui/core'



const useStyle = makeStyles((theme) => ({
    tooltip: {
        paddingTop: theme.spacing(10)
    },
    fab:{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "0",
        margin: "0",
    },
    fabcenter:{
        position: "absolute",
        top: "0px",
        fontSize: 36,
    }, 
    container: {
        height: "500px",
        width: "500px",
        backgroundColor: "white",

        position: "absolute",
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
        margin: "auto",

        [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh",
        }
    }
}))


const Add =()=>{
    const [openModal, setOpenModal] = useState(false);
    const classes = useStyle();
    return (
        <div>
        <Tooltip title="add" aria-label="add" className={classes.tooltip} >
                <Fab color="primary" className={classes.fab} onClick={()=>setOpenModal(true)}>
                <Typography variant="h6" className={classes.fabcenter}>+</Typography>
                </Fab>
        </Tooltip>
        <Modal open={openModal}>
            <Container className={classes.container}>modal now</Container>
        </Modal>
    </div>
    )
}

export default Add;
