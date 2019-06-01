import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '@material-ui/core/';

const styles = (theme) => {
  const { unit } = theme.spacing;
  return {
    flexColumn: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: 'space-around',
      alignItems: 'stretch',
    },
    blockFormat: {
      margin: 2,
      padding: unit,
      minWidth: 200,
      borderRadius: 4,
      boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
      boxSizing: 'borderBox',
    },
    buttonElement: {
      margin: 2,
    },
  };
};

class ButtonPanel extends React.PureComponent {
  /* static propTypes = {
    buttonAttributes: PropTypes.array(PropTypes.shape({
        name: PropTypes.string.isRequired,
        action: PropTypes.func.isRequired,
      })
    ).isRequired
  }; */

  render() {
    const { classes, buttonAttributes, className } = this.props;
    return (
      <div
        item
        className={classNames(classes.flexColumn,
          classes.blockFormat, className)}
      >
        {buttonAttributes.map(buttonAttribute => (
          <Button
            variant="contained"
            color="primary"
            className={classes.buttonElement}
            onClick={buttonAttribute.action}
          >
            {buttonAttribute.name}
          </Button>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(ButtonPanel);
