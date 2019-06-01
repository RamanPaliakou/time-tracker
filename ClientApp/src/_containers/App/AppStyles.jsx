import constants from '../../_resources/Constants/Constants'

const styles = function (theme) {
    let unit = theme.spacing.unit;
    return {
        MainApp: {
            minWidth: constants.minAppWidth
        }
    }
}

export { styles };
