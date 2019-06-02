import React, { Component } from 'react';
// import styles from './Layout.sass';
import constants from "../../_resources/Constants/Constants";
import MediaQuery from "react-responsive";
import { withStyles } from '@material-ui/core/styles/index';

const styles = (theme) => {
  const { unit } = theme.spacing;
  const sizeunit = 200;
  return {
    layout: {
      display: 'inline',
      textAlign: 'center',
      width: 6 * sizeunit,
      height: 20 * sizeunit,
      background: 'white',
    },
    applySidePaddings: {
      paddingLeft: constants.sidePadding,
      paddingRight: constants.sidePadding,
    }
  };
};

class Layout extends Component {
  displayName = Layout.name

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Layout}>
        <MediaQuery maxWidth={constants.applySidePaddings}
          children={this.props.children}
        />
        <MediaQuery minWidth={constants.applySidePaddings + 1}
          children={
            <div className={classes.applySidePaddings}
              children={this.props.children}
            />
          }
        />

      </div>
    );
  }
}

export default withStyles(styles)(Layout);