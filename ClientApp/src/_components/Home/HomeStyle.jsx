import constants from "../../_resources/Constants/Constants";

const styles = (theme) => {
  const { unit } = theme.spacing;
  return {
    userProfileSection: {
      minHeight: 190,
      width: 'inherit',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'nowrap',
      boxSizing: 'borderBox',
      marginBottom: unit,
    },
    userControlsSection: {
      minHeight: 50,
      boxSizing: 'borderBox',
      borderRadius: 4,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    },
    layoutContainer: {
      minWidth: 200,
      width: '99%',
      maxWidth: 1000,
      margin: '0 auto',
      boxSizing: 'borderBox',
    },
    paperBlock: {
      padding: unit,
      paddingLeft: 2 * unit,
      paddingRight: 2 * unit,
      minHeight: 260,
      boxSizing: 'borderBox',
    },
    divider: {
      marginBottom: unit,
      boxSizing: 'borderBox',
    },
    linearElement: {
      display: 'inline-block',
      height: '100%',
    },
    ComponentContainer :{
      minWidth: constants.minAppWidth,
      paddingLeft: constants.marginHome,
      paddingRight: constants.marginHome,
    }
  };
};

export { styles };
