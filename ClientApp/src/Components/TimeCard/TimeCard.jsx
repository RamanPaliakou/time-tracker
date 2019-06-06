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
import {appConstants} from '../../Constants/';
import HorizontalMenu from '../HorizontalMenu/HorizontalMenu';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import Work from '@material-ui/icons/Work';
import WorkOff from '@material-ui/icons/WorkOff';
import DirectionsRun from '@material-ui/icons/DirectionsRun';
import Delete from '@material-ui/icons/Delete';
import Summary from '../_subsidiary/Summary';
import {connect} from "react-redux";
import spinner from '../../Resources/Images/spinner.gif'
import {cardService} from "../../Services/CardServices";

class TimeCardUI extends Component {
  constructor(props) {
    super(props);
    this.state ={
      id: props.id,
      cardData:{},
      view: 0, //value for swipeable view
      isLoaded: false,
      isDisplayed: true
    };
  }

  forward = () => {
    if (this.state.view === 1)
      this.setState({ view: 0 })
    else
      this.setState({ view: this.state.view + 1 })
  }

  backward = () => {
    if (this.state.view === 0)
      this.setState({ view: 1 })
    else
      this.setState({ view: this.state.view - 1 })
  }

  setTimePassed = (value) => () => {
    var cardData = {
      ...this.state.cardData,
      timePassed: value
    };
    this.setState({ cardData: cardData });
  };

  Icon = {
    inProgress: <DirectionsRun />,
    waiting: <HourglassEmptyTwoTone />,
    completed: <CheckCircleOutlineTwoTone />,
    badEstimated: <AlarmOffTwoTone />
  };

  getData = () => {
    const id = this.props.id;

    return new Promise((resolve, reject) => {
      var data = cardService.loadCardData(id);
      resolve(data);
    }).then(data => this.setState({cardData: data, isLoaded: true}));
  };

  deleteCard = () => {
    var id = this.state.cardData.id;
    return new Promise((resolve, reject) => {
      var data = cardService.deleteCard(id);
      resolve(data);
    }).then(data => this.setState({isDisplayed: false}));
  };

  startCard = () => {
    if (!this.state.cardData.started) {
      const cardToUpdate = {
        ...this.state.cardData,
        started: true,
        completed: false,
        startedTime: new Date().getTime(),
        timeSpent: 0,
        status: 'inProgress',
      };

      return new Promise((resolve, reject) => {
        var data = cardService.updateCard(cardToUpdate);
        resolve();
      }).then(this.setState({cardData: cardToUpdate, isLoaded: true}));
    }
  };

  completeCard = () => {
    const card = this.state.cardData;
    if (!card.completed && card.started) {

      const cardToUpdate = {
        ...card,
        started: true,
        completed: true,
        startedTime: card.startedTime,
        timeSpent: card.timePassed,
        status: (card.timeSpent > card.estimate) ? 'badEstimated' : 'completed',
      };

      return new Promise((resolve, reject) => {
        var data = cardService.updateCard(cardToUpdate);
        resolve();
      }).then(this.setState({cardData: cardToUpdate, isLoaded: true}));
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    var cardData = this.state.cardData;
    cardData = {
      ...cardData, timePassed: ''
    };

    var cardDataNew = nextState.cardData;
    cardDataNew = {
      ...cardDataNew, timePassed: ''
    };

    const stateNow = JSON.stringify({...this.state, cardData: cardData});
    const stateNew = JSON.stringify({...nextState, cardData: cardDataNew});

    if (stateNow == stateNew && this.props == nextProps) return false;
    return true;
  }

  componentDidMount() {
    setInterval(()=>
    {
      if (!this.state.isLoaded) this.getData();
    }, 3000)
  }

  render() {
    const { classes } = this.props;
    const { isLoaded, view, isDisplayed } = this.state;
    const {title, status, completed, started, startedTime, estimate, timeSpent} = this.state.cardData;

    const HorizontalMenuFields =
      [
        {
          text: 'back',
          callback: this.backward,
          iconComponent: <ArrowLeft />,
          collapseAt: appConstants.applySmallWidth,
        },
        {
          text: 'start',
          callback: this.startCard,
          iconComponent: <Work />,
          collapseAt: appConstants.applySmallWidth,
        },
        {
          text: 'delete',
          callback: this.deleteCard,
          iconComponent: <Delete />,
          collapseAt: appConstants.applySmallWidth,
        },
        {
          text: 'complete',
          callback: this.completeCard,
          iconComponent: <WorkOff />,
          collapseAt: appConstants.applySmallWidth,
        },
        {
          text: 'forward',
          callback: this.forward,
          iconComponent: <ArrowRight />,
          collapseAt: appConstants.applySmallWidth,
        }
      ];

    const summaryValuesCorrect = typeof(timeSpent) !== "undefined";

    return (
    <div className={classes.paper}>
      {isDisplayed && <Paper >
        <div className={classes.formatPaper}>

          <div className={classes.formatViewData}>
            <Avatar className={classes.statusIcon}>
              {!isLoaded && <img className={classes.statusIcon} src={spinner}/>}
              {isLoaded && this.Icon[status]}
            </Avatar>

            <div className={classes.divider}/>

            <div className={classes.contentArea} children={
              <SwipeableViews className={classes.swipeableViews} axis={'x'} index={this.state.view}>
                <div className={classes.tabElement} children={
                  <div className={classes.title}>
                    <Typography variant="h4" gutterBottom styles={{margin: 'auto 0'}}
                                children={title}
                    />
                  </div>}
                />
                <div className={classes.tabElement} children={
                  <Summary isActive={(view === 1)} timeSpent={timeSpent} valuesCorrect={summaryValuesCorrect}
                           callbackTimePassed={this.setTimePassed} estimate={estimate}
                           startedTime={startedTime} started={started} completed={completed}/>}
                />
              </SwipeableViews>}
            />

          </div>

          <HorizontalMenu className={classes.menu} buttonsArray={HorizontalMenuFields}
                          customHeight={22} customFontSize={7} textTransform={'lowercase'} enableSelection={false}
          />
        </div>
      </Paper>}

      {!isDisplayed && <Paper className = {classes.smallPaper}>
        <div className={classes.centralizer}>
          Card was deleted
        </div>
      </Paper>}
    </div>
    );
  }
}

function mapStateToProps(state) {
  const {cards} = state;
  const {loadedCards, loadCardsOk} = cards;
  return {
    loadedCards,
    loadCardsOk
  };
}

const TimeCard = connect(mapStateToProps)(TimeCardUI);

export default withStyles(styles)(TimeCard);
