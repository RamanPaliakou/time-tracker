import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from '../Components/Layout/Layout';
import Logon from '../Stories/Logon/Logon';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import Home from '../Stories/Home/Home'
import { styles } from './AppStyles'
import { withStyles } from '@material-ui/core/styles';
import connect from "react-redux/es/connect/connect";

const LoginPage = function() {
  return <Logon alternativeDescription="Don't have an account?" alternativeLink="/register" alternativeClickText="Register"
                children={<Login />} />;
};

const RegisterPage = function() {
  return <Logon alternativeDescription="Already have an account?" alternativeLink="/login" alternativeClickText="Login"
                children={<Register />} />;
};

class AppUI extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;

  }

  displayName = AppUI.name;

  render() {
    return (
      <Layout className={styles.MainApp}>
        <Route path='/home' component={Home} />

        <Route path='/login' component={LoginPage} />

        <Route path='/register' component={RegisterPage} />

      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

const connectedApp = withStyles(styles)(connect(mapStateToProps)(AppUI));
export { connectedApp as App };
