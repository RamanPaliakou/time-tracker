import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import styles from './Layout.scss'

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      // <Grid fluid>
      //   <Row>
      //     <Col sm={3}>
      //       <NavMenu />
      //     </Col>
      //     <Col sm={9}>
            <div className={styles.Layout}>
              {this.props.children}
            </div>
      //     </Col>
      //   </Row>
      // </Grid>
    );
  }
}
