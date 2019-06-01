import constants from '../../_resources/Constants/Constants';

const styles = (theme) => {
    const unit = theme.spacing.unit;
    return {
      paper: {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
      },
      avatar: {
        height: 150,
        width: 150,
        border: '2px solid gray',
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

  export {styles}