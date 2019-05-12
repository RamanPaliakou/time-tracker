import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import  Welcome  from './components/Welcome/Welcome';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Welcome} />
        {/* <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} /> */}
      </Layout>
    );
  }
}
