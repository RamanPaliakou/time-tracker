import {appConstants} from '../../Constants'
const styles = (theme) => {
    const { unit } = theme.spacing;
    return {
        backPaper: {
            minWidth: appConstants.minAppWidth,
            display: 'block',
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
        },
        menuElementsContainer: {
            maxWidth: 'inherit',
            fontSize: appConstants.menuFontSize
        },
    };
};

export { styles };