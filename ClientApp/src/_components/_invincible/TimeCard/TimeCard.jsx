import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Icon from '@material-ui/core/Icon';
import { Divider } from '@material-ui/core';
import ExitToAppOutlined from '@material-ui/icons/ExitToAppOutlined';
import { Paper, Button, Grid, IconButton } from '@material-ui/core/';
// import { styles } from './TimeCardStyles';
import Typography from '@material-ui/core/Typography';
import HourglassEmptyTwoTone from '@material-ui/icons/HourglassEmptyTwoTone';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import ExpandLessOutlined from '@material-ui/icons/ExpandLessOutlined';
import AlarmOffTwoTone from '@material-ui/icons/AlarmOffTwoTone';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ScrollableLine from '../ScrollableLine';
import constants from '../../../_resources/Constants/Constants';


const styles = (theme) => {
  const unit = theme.spacing.unit;
  return {
    container: {
      display: 'block'
    },
    contentArea: {
      width: '100%',
      boxSizing: 'borderBox',
    },
    statusIcon: {
      height: 50,
      width: 50,
      border: '2px solid gray',
    },
    divider: {
      borderLeft: '1px solid grey',
      height: '20px',
      width: 2,
      margin: '0 2px 0 2px'
    },
    valuesPaper: {
      // width: 'max-content',
      padding: unit,
      margin: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      display: 'inline'
      // display: 'flex',
      // flexDirection: 'row',
      // flexWrap: 'nowrap',
      // alignItems: 'center',
      // justifyContent: 'flex-start',

    },
    paper :{
      width:'100%'
    }

  };
};


class TimeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Title',

      expanded: false,
      description: 'Description goes here'
    };
  }


  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        sfgsfgsfdgs
      </Paper>

    );
  }
}

export default withStyles(styles)(TimeCard);
