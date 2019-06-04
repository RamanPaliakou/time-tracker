import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, Grid, InputAdornment, Input } from '@material-ui/core/';
import { styles } from './Registerstyles';
import connect from "react-redux/es/connect/connect";
import {userActions} from "../../Actions";
import spinner from "../../Resources/Images/spinner.gif";

class RegisterAreaUI extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        dispatch(userActions.logout());

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

    dirState = () => {
        console.dir(this.state);
    };

    register = () => {
      const {email, password, fullName, userName} = this.state;
      const {dispatch} = this.props;
      if (email && password) {
        dispatch(userActions.register(email, password, fullName, userName));
      }
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    render() {
        const { classes } = this.props;
        const loggingIn =  this.props.loggingIn || false;
        return (
          <div>
          {
                (!loggingIn)   &&
                <Grid container
                      justify='center' direction='column' alignContent='center' wrap="nowrap"
                      spacing={16}>
                      <Grid item className={classes.centralizer} children={
                          <span className={classes.normalText}> Sign up to see photos from your friends </span>}
                      />
                      <Grid item
                          children={
                              <TextField className={classes.standartInput}
                                  required id="e-mail" placeholder="E-mail"
                                  onChange={this.handleChange('email')} />}
                      />
                      <Grid item
                          children={
                              <TextField className={classes.standartInput}
                                  id="fullName" placeholder="Full Name"
                                  onChange={this.handleChange('fullName')}
                              />}
                      />
                      <Grid item
                          children={
                              <TextField className={classes.standartInput}
                                  required id="userName" placeholder="Username"
                                  onChange={this.handleChange('userName')}
                              />}
                      />
                      <Grid item
                          children={
                              <Input className={classes.password}
                                  required id="password" label="Password" placeholder="Password" type={this.state.showPassword ? 'text' : 'password'}
                                  value={this.state.password}
                                  onChange={this.handleChange('password')}
                                  endAdornment={
                                      <InputAdornment position="end"
                                          children={
                                              <Button aria-label="Toggle password visibility" onClick={this.handleClickShowPassword} onMouseDown={this.handleMouseDownPassword}>
                                                  {!this.state.showPassword ? 'SHOW' : 'HIDE'}
                                              </Button>}
                                      />
                                  } />}
                      />
                      <Grid item children={
                          <Button className={classes.loginButton}
                              variant="contained" color="primary"
                              onClick={this.register}>
                              Sign Up
                          </Button>}
                      />
                </Grid>
            }
            {
              (loggingIn) &&
              <img src={spinner} onClick={this.logState}/>
            }
      </div>
        );
    }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const RegisterArea = connect(mapStateToProps)(RegisterAreaUI);

export default withStyles(styles)(RegisterArea);
