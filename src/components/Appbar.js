import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../App.css'
import {Link} from 'react-router-dom'

class Appbar extends Component {
    render() {
        return (
            <div className="app">
            <AppBar position="static">
                <Toolbar>
                <Button component={Link} to="/" className="Home"color="inherit">Home</Button>
                <Typography className="title">Library Books </Typography>
                <Button component={Link} to="/add"className="button"color="inherit">ADD</Button>
                </Toolbar>
            </AppBar>                
            </div>
        );
    }
}

export default Appbar;