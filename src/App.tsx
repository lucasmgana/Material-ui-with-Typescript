import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Add from './components/Add';
import Feed from './components/Feed';
import Leftbar from './components/Leftbar';
import Navigationbar from './components/Navigationbar';
import Rightbar from './components/Rightbar';

const useStyle = makeStyles((theme)=> ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    }
  }
}))

export default function App() {
  const classes = useStyle();
  return (
    <div>
      <Navigationbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={6} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      
      <Add />
    </div>
  )
}
