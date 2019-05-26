const styles = function (theme) {
    let unit = theme.spacing.unit;
    return {
        standartInput: {
            width: '100%',
        },
        password: {
            width: '100%',
        },
        loginButton: {
            width: '100%',
            textTransform: 'none',
            color: '#fff'
        },
        normalText: {
            textTransform: 'none',
            textDecoration: "none",
            fontSize: '16px',
            fontFamily: 'sans-serif'
        },
        centralizer: {
            textAlign: 'center'
        },
    }
};

export {styles};