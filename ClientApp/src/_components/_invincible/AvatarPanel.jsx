import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import constants from '../../_resources/Constants/Constants'

const styles = (theme) => {
  const unit = theme.spacing.unit;
  return {
    avatar: {
      height: 150,
      width: 150,
      border: '2px solid gray',
      // float: 'right',
    },
    patternBox: {
      margin: constants.marginHome,
      width: 'inherit',
      minWidth: 200,
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
      <div className={classes.patternBox} style={{ backgroundImage: this.props.patternImage }}>
        <Avatar
          alt={this.props.alt}
          src={this.props.avatarImage}
          className={classes.avatar}
        />
      </div>
    );
  }
}

export default withStyles(styles)(AvatarPanel);
