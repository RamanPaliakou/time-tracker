import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, } from '@material-ui/core/';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { PureComponent } from "react";
import {styles} from './Logonstyles';
import empire from '../../_resources/empire.png'

class Logon extends PureComponent
{
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container className={classes.layoutContainer}
                    justify='center' direction='column' alignItems='center' alignContent='center' wrap="nowrap"
                    spacing={24}>
                        <Grid item className={classes.layoutSection}>
                            <Paper className={classes.upperPaper}>
                                <Grid container 
                                    justify='center' direction='column' alignContent='center' wrap="nowrap"
                                    spacing={16}>
                                    
                                    <Grid item
                                        children = {
                                            <img src = {empire} className={classes.logo}/>}
                                    />
                                    <Grid item
                                        children ={this.props.children}
                                    />
                                    
                                </Grid>
                            </Paper>
                        </Grid>
                
                <Grid item className={classes.layoutSection}
                    children = {
                        <Paper className={classes.downPaper}>
                            <span className={classes.normalText}> {this.props.alternativeDescription} </span>
                            <a className={classes.normalText} href={this.props.alternativeLink}> 
                                {this.props.alternativeClickText} 
                            </a>
                        </Paper>    
                    }
                />
                </Grid>
        </div>
        )
    }
}

export default withStyles(styles)(Logon);