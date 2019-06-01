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
            display: 'block',
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
        },
        menuElementsContainer: {
            maxWidth: 'inherit',
            fontSize: constants.menuFontSize
        },
        search: {
            marginTop: 'auto',
            marginBottom: 'auto',
            boxSizing: 'border-box',
            with: '100%',
            display: 'inline',
        }
    };
};

export { styles };