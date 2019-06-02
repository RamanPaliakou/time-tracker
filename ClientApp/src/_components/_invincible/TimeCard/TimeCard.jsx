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
import { styles } from './TimeCardStyles';
import Typography from '@material-ui/core/Typography';
import HourglassEmptyTwoTone from '@material-ui/icons/HourglassEmptyTwoTone';
import CheckCircleOutlineTwoTone from '@material-ui/icons/CheckCircleOutlineTwoTone';
import AlarmOffTwoTone from '@material-ui/icons/AlarmOffTwoTone';
import PortraitOutlined from '@material-ui/icons/PortraitOutlined';
import ExpandLessOutlined from '@material-ui/icons/ExpandLessOutlined';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ScrollableLine from '../ScrollableLine';
import constants from '../../../_resources/Constants/Constants';
import HorizontalMenu from '../HorizontalMenu/HorizontalMenu';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import FlightLand from '@material-ui/icons/FlightLand';
import Delete from '@material-ui/icons/Delete';
import Summary from '../Summary';

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
      description: 'Description goes here',
      value: 0,
      initialDate: new Date()
    };
  }

  increaseChange = () => {
    if (this.state.value === 1)
      this.setState({ value: 0 })
    else
      this.setState({ value: this.state.value + 1 })
  }

  dereaseChange = () => {
    if (this.state.value === 0)
      this.setState({ value: 1 })
    else
      this.setState({ value: this.state.value - 1 })
  }
  donothing = () => { console.log('donothing') }
  getTime = () => {

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
    const { title, description, status } = this.state;
    const donothing = this.donothing;

    const HorizontalMenuFields =
      [
        {
          text: 'back',
          callback: this.dereaseChange,
          iconComponent: <ArrowLeft />,
          collapseAt: constants.applySmallWidth,
        },
        {
          text: 'start',
          callback: donothing,
          iconComponent: <FlightTakeoff />,
          collapseAt: constants.applySmallWidth,
        },
        {
          text: 'delete',
          callback: donothing,
          iconComponent: <Delete />,
          collapseAt: constants.applySmallWidth,
        },
        {
          text: 'complete',
          callback: donothing,
          iconComponent: <FlightLand />,
          collapseAt: constants.applySmallWidth,
        },
        {
          text: 'forward',
          callback: this.increaseChange,
          iconComponent: <ArrowRight />,
          collapseAt: constants.applySmallWidth,
        }
      ];

    return (
      
      <Paper className={classes.paper}>
        <div className={classes.formatPaper}>

          <div className={classes.formatViewData}>
            <Avatar className={classes.statusIcon} children={
              this.Icon[status]} />

            <div className={classes.divider} />

            <div className={classes.contentArea} children={
              <SwipeableViews className={classes.swipeableViews} axis={'x'} index={this.state.value}>
                <div className={classes.tabElement} children=
                  {<this.Title title='Create a card title' />} />
                <div className={classes.tabElement} children=
                  {
                    <Summary isActive = {(this.state.value === 1)} estimate={3} initialDate={this.state.initialDate} started={true} completed={false}/>
                  } />
              </SwipeableViews>
            } />

          </div>

          <HorizontalMenu className={classes.menu} buttonsArray={HorizontalMenuFields}
            customHeight={22} customFontSize={7} textTransform={'lowercase'} enableSelection={false} />
        </div>
      </Paper >

    );
  }
}

export default withStyles(styles)(TimeCard);
