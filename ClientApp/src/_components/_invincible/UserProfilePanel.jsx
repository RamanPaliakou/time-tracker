import React from 'react';
import classNames from 'classnames';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles/index';

const styles = (theme) => {
  const unit = theme.spacing.unit;
  return {
    flexColumn: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
    },
    blockFormat: {
      margin: 2,
      padding: unit,
      minWidth: 200,
      borderRadius: 4,
      boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
      boxSizing: 'borderBox',
    },
  };
};

class UserProfilePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: 'User full name',
      credo: 'lorem ipsum',
      numberOfAlbums: 'No',
      userName: 'User alias',
    };
  }

  render() {
    const { classes, className, userAttributes } = this.props;
    return (
      <div className={classNames(classes.flexColumn, classes.blockFormat, className)}>
        <h3>
          { userAttributes.userName }
        </h3>
        <div>
          { userAttributes.userAlbums }
        </div>
        <div>
          { userAttributes.userFullName }
        </div>
        <Divider />
        <q>
          { userAttributes.userCredo }
        </q>
      </div>
    );
  }
}

export default withStyles(styles)(UserProfilePanel);
