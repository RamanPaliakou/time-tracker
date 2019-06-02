import constants from '../../../_resources/Constants/Constants'
const styles = (theme) => {
    const { unit } = theme.spacing;
    return {
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
    };
};

export { styles };