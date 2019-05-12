import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import styles from './Layout.sass';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <div className={styles.Layout}>
        {this.props.children}
      </div>
    );
  }
}
