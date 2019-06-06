import {appConstants} from "../../Constants";

export const styles = (theme) => {
  const unit = theme.spacing.unit;
  return {
    container: {
      minWidth: appConstants.minAppWidth,
      maxWidth: '100%',
      display: 'block',
      marginTop: unit,
    },
    elementStorage: {
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    },
    element: {
      minWidth: appConstants.minAppWidth,
      width: '100% !important'
    },
    centralizer: {
      margin: '0 auto',
      textAlign: 'center'
    }
  };
};