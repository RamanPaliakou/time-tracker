import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography, Grid, IconButton, InputAdornment, Input } from '@material-ui/core/';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {styles} from './Registerstyles';

class RegisterArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            someProp: 0,
            showPassword: false,
            password: "",
            email: "",
            fullName: "",
            userName: ""
        }
    };

    static propTypes = {
        classes: PropTypes.object.isRequired,
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    dirState = event => {
        console.dir(this.state);
    }

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    render() {
        const { classes } = this.props;
        return (
            <Grid container
            justify='center' direction='column' alignContent='center' wrap="nowrap"
            spacing={16}>
                <Grid item className={classes.centralizer} children = {
                    <span className={classes.normalText}> Sign up to see photos from your friends </span>}
                />
                <Grid item
                    children = {
                        <TextField className={classes.standartInput}
                            required id="e-mail" placeholder="E-mail"
                            onChange={this.handleChange('email')} />}
                />
                <Grid item
                    children = {
                        <TextField className={classes.standartInput}
                            id="fullName" placeholder="Full Name"
                            onChange={this.handleChange('fullName')}
                        />}
                />
                <Grid item
                    children = {
                        <TextField className={classes.standartInput}
                            required id="userName" placeholder="Username"
                            onChange={this.handleChange('userName')}
                        />}
                />
                <Grid item 
                    children = {
                        <Input className={classes.password}
                            required id="password" label="Password" placeholder="Password" type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end" 
                                    children = {
                                        <Button aria-label="Toggle password visibility" onClick={this.handleClickShowPassword} onMouseDown={this.handleMouseDownPassword}>
                                            {!this.state.showPassword ? 'SHOW' : 'HIDE'}{/* {this.state.showPassword ? <VisibilityOff /> : <Visibility />} */}
                                        </Button>}
                                />
                            }/>}
                />
                <Grid item  children = {
                    <Button className={classes.loginButton}
                        variant="contained" color="primary"
                        onClick={this.dirState}>
                        Sign Up
                    </Button>}
                />
            </Grid>
        );
    }
}

export default withStyles(styles)(RegisterArea);