import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core/';
import { styles } from './TimeCardStyles';
import Typography from '@material-ui/core/Typography';
import HourglassEmptyTwoTone from '@material-ui/icons/HourglassEmptyTwoTone';
import CheckCircleOutlineTwoTone from '@material-ui/icons/CheckCircleOutlineTwoTone';
import AlarmOffTwoTone from '@material-ui/icons/AlarmOffTwoTone';
import SwipeableViews from 'react-swipeable-views';
import constants from '../../../_resources/Constants/Constants';
import HorizontalMenu from '../HorizontalMenu/HorizontalMenu';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import FlightLand from '@material-ui/icons/FlightLand';
import DirectionsRun from '@material-ui/icons/DirectionsRun';
import Delete from '@material-ui/icons/Delete';
import Summary from '../Summary';
import createCardCreationFunction from '../../../_resources/Helpers/TimeCardHelper';

class TimeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title || 'Title',
      status: props.status || 'waiting',
      value: 0,
      timePassed: 0,
      timeSpent: props.timeSpent || 0,
      startedTime: props.startedTime || 0,
      completed: (typeof props.completed !== "undefined") ? props.completed : false,
      started: (typeof props.started !== "undefined") ? props.started : false,
      estimate: (typeof props.estimate !== "undefined") ? props.estimate : 0,
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

  setTimePassed = (value) => () => {
    this.setState({ timePassed: value });
  }

  displayTimePassed = () => {
    console.log('Function is not asssigned on this button. Displaying current time state')
    console.log(this.state.timePassed)
  }

  createCardAction = (func) => {
    console.log('start card timeCard', this.state, this.props);
    const card = createCardCreationFunction(this.state)();
      func(card)(); 
  }
  startCard = () => {
    const card = createCardCreationFunction(this.state)();
    this.props.startCard(card)(); 
  }

  completeCard = () => {
    const card = createCardCreationFunction(this.state)();
    this.props.completeCard(card)(); 
  }

  deleteCard = () => {
      const card = createCardCreationFunction(this.state)();
      this.props.deleteCard(card)(); 
  }

  Icon = {
    inProgress: <DirectionsRun />,
    waiting: <HourglassEmptyTwoTone />,
    completed: <CheckCircleOutlineTwoTone />,
    badEstimated: <AlarmOffTwoTone />
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

  componentWillReceiveProps(nextProps) {
    const newState = {
      id: nextProps.id,
      title: nextProps.title || this.state.title,
      status: nextProps.status || this.state.status,
      value: 0,
      timePassed: this.state.timePassed,
      timeSpent: nextProps.timeSpent || this.state.timeSpent,
      startedTime: nextProps.startedTime || this.state.startedTime,
      completed:  nextProps.completed || this.state.completed,
      started: nextProps.started || this.state.started,
      estimate: nextProps.estimate || this.state.estimate,
    }
    this.setState(newState);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const stateExNow = JSON.stringify({ ...this.state, timePassed: '' });
    const stateExNew = JSON.stringify({ ...nextState, timePassed: '' });

    if (stateExNow == stateExNew && this.props == nextProps) return false;
    return true;
  }

  render() {
    const { classes } = this.props;
    const { title, status, completed, started, startedTime, estimate, timeSpent } = this.state;    
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
          callback: this.startCard,
          iconComponent: <FlightTakeoff />,
          collapseAt: constants.applySmallWidth,
        },
        {
          text: 'delete',
          callback: this.deleteCard,
          iconComponent: <Delete />,
          collapseAt: constants.applySmallWidth,
        },
        {
          text: 'complete',
          callback: this.completeCard,
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
                <div className={classes.tabElement} children={
                  <this.Title title={title} />}
                />
                <div className={classes.tabElement} children={
                  <Summary isActive={(this.state.value === 1)} timeSpent={timeSpent}
                    callbackTimePassed={this.setTimePassed} estimate={estimate}
                    startedTime={startedTime} started={started} completed={completed} />}
                />
              </SwipeableViews>}
            />

          </div>

          <HorizontalMenu className={classes.menu} buttonsArray={HorizontalMenuFields}
            customHeight={22} customFontSize={7} textTransform={'lowercase'} enableSelection={false}
          />
        </div>
      </Paper >

    );
  }
}

export default withStyles(styles)(TimeCard);
