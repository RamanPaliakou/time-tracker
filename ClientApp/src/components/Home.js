import React, { Component } from 'react';
import Header from './pheripherial/header/Header';
import Welcome from './Welcome/Welcome';
export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div >
              <Welcome/>
      </div>
    );
  }
}
