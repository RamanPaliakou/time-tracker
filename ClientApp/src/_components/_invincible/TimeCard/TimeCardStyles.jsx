import constants from '../../../_resources/Constants/Constants';

const styles = (theme) => {
    const unit = theme.spacing.unit;
    return {
      paper: {
        maxWidth: 435,
        width: '100%',
        minWidth: constants.minAppWidth,
        height: 100,
        marginBottom: 10,
      },
      formatPaper: {
        height: '100%',
        minWidth: constants.minAppWidth,
      },
      formatViewData: {
        minWidth: constants.minAppWidth,
        maxWidth: 'inherit',
        maxHeight: 'inherit',
        boxSizing: 'border-box',
        height: 78,
        padding: unit,
        margin: 0,
  
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
  
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
  
      contentArea: {
        maxWidth: '99%',
        minWidth: 200,
        maxHeight: '-webkit-fill-available',
        boxSizing: 'borderBox',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        wrap: 'nowrap',
        position: 'relative'
      },
      statusIcon: {
        height: 40,
        width: 40,
        border: '2px solid gray',
      },
      divider: {
        borderLeft: '1px solid grey',
        height: '40px',
        width: 2,
        margin: '0 3px 0 3px'
      },
      test: {
        width: '100%'
      },
      title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 60
      },
      summary: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 60
      },
      menu: {
        height: 20
      }
  
    };
  };

export { styles }