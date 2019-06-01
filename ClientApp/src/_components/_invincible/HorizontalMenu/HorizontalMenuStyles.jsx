import constants from '../../../_resources/Constants/Constants'
const styles = (theme) => {
    const { unit } = theme.spacing;
    return {
      userDataLarge: {
        width: '78%',
      },
      userControlsLarge: {
        width: '19%',
      },
      userDataSmall: {
        width: '100%',
      },
      userControlsSmall: {
        width: '100%',
      },
      smallLayout: {
        minHeight: 190,
        width: 'inherit',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        boxSizing: 'borderBox',
        marginBottom: unit,
      },
      largeLayout: {
        minHeight: 190,
        width: 'inherit',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'nowrap',
        boxSizing: 'borderBox',
        marginBottom: unit,
      },
      backPaper: {
        minWidth: constants.minAppWidth,
        display: 'block'
      },
      menuElementsContainer: {
          maxWidth: 'inherit',
          fontSize: constants.menuFontSize
       },
       expandButton:{
        margin: 0,
        padding: 0,
        display: 'block',
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        width: '100%',   
        height: 10,
        textAlign: 'center',
        textTransform: 'lowercase'
       },
       expandLogo:{
        margin: '0 auto',
        padding: 0,
        display: 'block',
        fontSize: 12,

       }
    };
  };

  export  {styles};