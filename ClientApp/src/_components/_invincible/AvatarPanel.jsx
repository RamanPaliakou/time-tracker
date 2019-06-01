import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import constants from '../../_resources/Constants/Constants';
import Icon from '@material-ui/core/Icon';
import { Fab } from '@material-ui/core';
import ExitToAppOutlined from '@material-ui/icons/ExitToAppOutlined';
import { Paper, Grid, IconButton } from '@material-ui/core/';


const styles = (theme) => {
  const unit = theme.spacing.unit;
  return {
    avatar: {
      height: 150,
      width: 150,
      border: '2px solid gray',
      // float: 'right',
      position: 'absoulte', 
      right: -15
    },
    logOutButton: {
      background: 'rgba(255, 255, 255, 0.5)',
      
    },
    patternBox: {
      width: 'inherit',
      minWidth: constants.minAppWidth,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      borderRadius: 4,
      boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
      boxSizing: 'borderBox',
    },
  };
};

class AvatarPanel extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    alt: PropTypes.string.isRequired,
    avatarImage: PropTypes.string.isRequired,
    patternImage: PropTypes.string.isRequired,
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container
        style={{ backgroundImage: this.props.patternImage }}
        justify='flex-end' direction='row' alignItems='flex-end' wrap="nowrap">
        <Grid item children={
          <Avatar
            alt={this.props.alt}
            src={this.props.avatarImage}
            className={classes.avatar}
          />}
        />

        <Grid item children={
          <IconButton color='primary' classes={{root: classes.logOutButton}} styles={{position: 'absoulte', top:'auto', right: 0}}>
            <ExitToAppOutlined size="small" style={{ fontSize: 20}} />
          </IconButton>}
        />

      </Grid>
    );
  }
}

export default withStyles(styles)(AvatarPanel);
