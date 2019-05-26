const styles = function (theme) {
    let unit = theme.spacing.unit;
    return {
        layoutContainer: {
            width: '60%',
            minWidth: '200px',
            maxWidth: '500px',
            margin: '0 auto',
            marginTop: '50px'
        },
        layoutSection: {
            width: '100%'
        },
        upperPaper: {
            padding: unit,
            paddingLeft: 2 * unit,
            paddingRight: 2 * unit,
            width: '100%',
        },
        downPaper: {
            padding: unit,
            paddingLeft: 2 * unit,
            paddingRight: 2 * unit,
            width: '100%',
            textAlign: 'center'
        },
        logo: {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            //width: '100%',
            height: '90px',

        },
        smallTextLink: {
            textTransform: 'none',
            textDecoration: "none",
            fontSize: 12,
            fontFamily: 'sans-serif',
        },
        normalText: {
            textTransform: 'none',
            textDecoration: "none",
            fontSize: 16,
            fontFamily: 'sans-serif'
        },
        centralizer: {
            textAlign: 'center'
        }
    }
};

export {styles};