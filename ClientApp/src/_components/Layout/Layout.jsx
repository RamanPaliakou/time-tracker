import React, { Component } from 'react';
import styles from './Layout.sass';

class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <div className={styles.Layout}>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;