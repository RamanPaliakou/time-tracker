import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { Divider } from '@material-ui/core';
import ExitToAppOutlined from '@material-ui/icons/ExitToAppOutlined';
import { Paper, Grid, IconButton } from '@material-ui/core/';
import TimeCard from './TimeCard/TimeCard';
import constants from '../../_resources/Constants/Constants';

const styles = (theme) => {
    const unit = theme.spacing.unit;
    return {
        container: {
            minWidth: constants.minAppWidth,
            display: 'block',
            marginTop: unit,
            
        },
        elementStorage:{
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flexWrap: 'nowrap',
            alignItems: 'center',
        },
        element:{
            minWidth:constants.minAppWidth,
            width: '100% !important'
        }
    };
};

class TimeCardsHolder extends PureComponent {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container} >
                <div className={classes.elementStorage}>
                <Paper className={classes.element}>
                    fdgsf
                </Paper>
                <TimeCard className={classes.element} />
                <TimeCard className={classes.element} />
                <TimeCard className={classes.element} />
            </div>
            </div>
        )
    }
}

export default withStyles(styles)(TimeCardsHolder)