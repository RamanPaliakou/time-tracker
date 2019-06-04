import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, Grid, Input, InputAdornment } from '@material-ui/core/';
import { styles } from './Loginstyles'
import {userActions} from "../../Actions";
import connect from "react-redux/es/connect/connect";
import spinner from "../../Resources/Images/spinner.gif";

class LoginAreaUI extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        dispatch(userActions.logout());

        this.state = {
            showPassword: false,
            password: "",
            email: ""
        }
    };

    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    dirState = () => {
        console.dir(this.state);
    };

    login = () => {
      const { email, password } = this.state;
      const { dispatch } = this.props;
      if (email && password) {
        dispatch(userActions.login(email, password));
      }
    };


    handleChange = prop => event => {
        this.setState({ [prop]: event.currentTarget.value });
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
                (!loggingIn) &&
                <Grid container
                      justify='center' direction='column' alignContent='center' wrap="nowrap"
                      spacing={16}>
                  <Grid item
                        children={
                          <TextField className={classes.standartInput}
                                     id="e-mail"
                                     placeholder="E-mail"
                                     onChange={this.handleChange('email')} />}
                  />
                  <Grid item
                        children={
                          <Input className={classes.password}
                                 id="password" label="Password" placeholder="Password" type={this.state.showPassword ? 'text' : 'password'}
                                 value={this.state.password}
                                 onChange={this.handleChange('password')}

                                 endAdornment={
                                   <InputAdornment position="end"
                                                   children={
                                                     <Button className={classes.passwordShowButton} onClick={this.handleClickShowPassword} onMouseDown={this.handleMouseDownPassword}>
                                                       {!this.state.showPassword ? 'SHOW' : 'HIDE'}
                                                     </Button>
                                                   } />
                                 }
                          />

                        }
                  />
                  <Grid item
                        children={
                          <Button className={classes.loginButton} variant="contained" color="primary"
                                  onClick={this.login}>
                            Log In
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

const LoginArea = connect(mapStateToProps)(LoginAreaUI);

export default withStyles(styles)(LoginArea);