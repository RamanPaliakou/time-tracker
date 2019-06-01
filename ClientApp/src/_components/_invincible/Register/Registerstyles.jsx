const styles = function (theme) {
    let unit = theme.spacing.unit;
    return {
        standartInput: {
            width: '95%',
        },
        password: {
            width: '95%',
            height: '30px'
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