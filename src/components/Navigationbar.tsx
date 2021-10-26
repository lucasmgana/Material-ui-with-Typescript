import React, { useState } from 'react';
import { InputBase, AppBar, Toolbar, Typography, makeStyles, alpha } from '@material-ui/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const useStyle = makeStyles((theme) => ({
    logoLg:{
        display: "none",
        [theme.breakpoints.up('sm')]:{
            display: "block"
        }
    },

    logoSm:{
        display: "block",
        [theme.breakpoints.up('sm')]:{
            display: "none"
        }
    },

    toolbar:{
        display: "flex",
        justifyContent: "space-between"
    },
    input: {
        color: "white",
        marginLeft: theme.spacing(2),
        width: "100%"
    }, 

    navsearch: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25)
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down('sm')]:{
            display: (props:{open:boolean})=> (props.open? "flex": "none"),
            width: "70%",
        }

    },

    navicons: {
        alignItems: "center",
            display: (props:{open:boolean})=> (props.open? "none": "flex"),
            // display: (props)=> (props.open ? "flex": "none"),
    },

    tagonavsearch: {
        display: "none",
        [theme.breakpoints.down('sm')]:{
            display: (props:{open:boolean})=> (props.open? "none": "flex"),
            cursor: "pointer",
            borderRadius: "50%",
            paddingLeft: "8px",
            paddingRight: "8px",
            backgroundColor: "white",
            color: "blue",
        }
    },

    cancel:{
        cursor: "pointer",
        borderRadius: "50%",
        backgroundColor: "red",
        color: "white",
        paddingLeft: "10px",
        paddingRight: "10px",
        [theme.breakpoints.up('md')]: {
            display: "none",
        }
    },
    topbar: {
        boxShadow: "none",
    }

}));

export default function Navigationbar() {
    const [open, setOpen] = useState(false);
    // const classes = useStyle();
    const classes = useStyle({open});

    return (
        <AppBar className={classes.topbar} position="fixed">
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.logoLg} variant='h6'>
                    Pharmacy
                </Typography>
                <Typography className={classes.logoSm} variant='h6'>
                    PMS
                </Typography>
                <div className={classes.navsearch}>
                    <InputBase placeholder="search..." className={classes.input} />
                    <Typography className={classes.cancel} variant="h6" onClick={()=>setOpen(false)}>x</Typography>
                </div>

                <div className={classes.tagonavsearch} onClick={()=>setOpen(true)} >
                    F
                </div>


                <div className={classes.navicons}>
                    <Typography variant='h6' component='p'>
                        icons side
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    )
}
