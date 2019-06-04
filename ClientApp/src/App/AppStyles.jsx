import {appConstants} from '../Constants'

const styles = function (theme) {
    let unit = theme.spacing.unit;
    return {
        MainApp: {
            minWidth: appConstants.minAppWidth
        }
    }
};

export { styles };
