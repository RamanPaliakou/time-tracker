import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, Grid, Input, InputAdornment } from '@material-ui/core/';
import { styles } from './Loginstyles'

class LoginArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            password: "",
            email: ""
        }
    };

    static propTypes = {
        classes: PropTypes.object.isRequired,
    }

    dirState = () => {
        console.dir(this.state);
    }

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
        return (
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
                            onClick={this.dirState}>
                            Log In
                    </Button>}
                />
            </Grid>
        );
    }
}

export default withStyles(styles)(LoginArea);