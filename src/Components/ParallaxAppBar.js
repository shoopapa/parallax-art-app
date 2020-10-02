import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useAuthState } from 'react-firebase-hooks/auth';
import {firebase} from '../Firebase/firebase'




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  UserIcon:{
    borderRadius: '50%',
    marginLeft: theme.spacing(2),
    blockSize:'5vh'
  }
}));

export default function ParallaxAppBar({login}) {
  const classes = useStyles();

  const [user, loading] = useAuthState(firebase.auth());

  const loginStatusRender = () => {
    if (user){
      return (
        <img alt=":)" className={classes.UserIcon} src={user.photoURL} aria-label="menu"></img>
      )
      
    } else if (loading){
      return null
    }
    else {
      return (
        <Button 
          onClick={login}
          color="inherit"
        >
        Login
        </Button>
      )
    }
  }

  return (
    <div className={classes.root}>
      <AppBar color="transparent" style={{backgroundColor:"transparent", color:"gray", boxShadow:"none"}} position="fixed" >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Parallax Art
          </Typography>
          {loginStatusRender()}
        </Toolbar>
      </AppBar>
    </div>
  );
}
