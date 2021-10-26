import React from 'react'
import { Container, makeStyles } from '@material-ui/core'


const useStyle = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: 'sticky',
        top: "0px",
    }
}))
const Rightbar =()=>{
    const classes = useStyle();
    return (
        <Container className={classes.container}>
            right side
        </Container>
    )
}

export default Rightbar
