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
import CheckCircleOutlineTwoTone from '@material-ui/icons/CheckCircleOutlineTwoTone';
import AlarmOffTwoTone from '@material-ui/icons/AlarmOffTwoTone';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import ExpandLessOutlined from '@material-ui/icons/ExpandLessOutlined';
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
    paper: {
      maxWidth: 550,
      width: '100%',
      minWidth: constants.minAppWidth,
      height: 80
    },
    formatContent: {
      minWidth: constants.minAppWidth,
      maxWidth: 'inherit',
      maxHeight: 'inherit',
      boxSizing: 'border-box',

      padding: unit,
      margin: 0,

      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,

      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    contentArea: {
      maxWidth: '99%',
      minWidth: 200,
      maxHeight: '-webkit-fill-available',
      boxSizing: 'borderBox',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
      wrap: 'nowrap',
      position: 'relative'
    },
    statusIcon: {
      height: 40,
      width: 40,
      border: '2px solid gray',
    },
    divider: {
      borderLeft: '1px solid grey',
      height: '40px',
      width: 2,
      margin: '0 3px 0 3px'
    },
    test: {
      width: '100%'
    },
    title: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: 60
    }

  };
};

const Description = (props) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom children={
        props.description}
      />
    </div>
  )
}
class TimeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Title',
      status: 'inProgress',
      description: 'Description goes here'
    };
  }

  Icon = {
    inProgress: <HourglassEmptyTwoTone />,
    completed: <CheckCircleOutlineTwoTone />,
    notCoped: <AlarmOffTwoTone />
  }

  Title = (props) => {
    return (
      <div className={this.props.title} styles={{}} >
        <Typography variant="h4" gutterBottom styles={{ margin: 'auto 0' }}
          children={
            props.title}
        />
      </div>
    )
  }

  render() {
    const { classes } = this.props;
    const {title, description, status} = this.state;
    
    return (
      <Paper className={classes.paper}>
        <div className={classes.formatContent}>
          <Avatar className={classes.statusIcon}>
            {this.Icon[status]}
          </Avatar>
          <div className={classes.divider} />
          <div className={classes.contentArea}>
            <ScrollableLine
              ElementOne={<this.Title title={title}/>}
              ElementTwo={<Description description={description}/>}
              ElementThree={<div><HourglassEmptyTwoTone /><CheckCircleOutlineTwoTone /><AlarmOffTwoTone /></div>}
            />
          </div>
        </div>
      </Paper >

    );
  }
}

export default withStyles(styles)(TimeCard);
