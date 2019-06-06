import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {withStyles} from '@material-ui/core/styles';
import {Paper} from '@material-ui/core/';
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
import {Button, TextField, Grid, InputAdornment, Input} from '@material-ui/core/';
import MediaQuery from "react-responsive";


export const styles = (theme) => {
  const unit = theme.spacing.unit;
  return {
    backPaper: {
      marginTop: 5,
      marginBottom: 5,
      minWidth: appConstants.minAppWidth,
      display: 'block',
      minHeight: 50,
    },
    elementStorage: {
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'nowrap',
      alignItems: 'center',
      margin: unit,
    },
    elementStorageVertical: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      flexWrap: 'nowrap',
      alignItems: 'stretch',
      marginTop: unit,
      marginBottom: unit
    },
    elementStorageSmall: {
      width: '30%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'nowrap',
      alignItems: 'center',
      margin: unit,
    },
    elementStorageSmallVertical: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'nowrap',
      alignItems: 'center',
      marginTop: unit,
      marginBottom: unit
    },
    word: {
      flexGrow: 3,
      margin: unit,
    },
    wordSmall: {
    },
    title: {
      width: '40%',
      margin: unit,
    },
    titleVertical: {
      margin: unit,
    },
    small: {
      margin: unit,
    },
    createButton: {
      width: '20%',
      margin: unit,
    },
    createButtonVertical: {
      margin: unit,
    },
    centralizer: {
      margin: '0 auto',
      textAlign: 'center'
    }
  };
};


class CardCreatorUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours:0,
      minutes:0,
      seconds:0,
      title:''
    }
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  createCard = () => {
    const {hours, minutes, seconds, title} = this.state;
    let user = JSON.parse(localStorage.getItem('user'));
    const email = user.email;
    const estimate = ((seconds + minutes*60 + hours * 60 * 60)*1000).toString();
    const data = email + ' ' + title + estimate;

      return new Promise((resolve, reject) => {
        var data = cardService.createCard(data);
        resolve();
      }).then();
}


  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.backPaper}>
        <MediaQuery minWidth={appConstants.applySmallWidth + 1}>
          <div className={classes.elementStorage}>
            <TextField className={classes.title} placeholder="Title"
                       onChange={this.handleChange('title')}/>
            <div className={classes.elementStorageSmall}>
              <div className={classes.wordSmall}>HH:</div>
              <TextField className={classes.small} placeholder="HH"
                         onChange={this.handleChange('hours')}/>

              <div className={classes.wordSmall}>MM:</div>
              <TextField className={classes.small} placeholder="MM"
                         onChange={this.handleChange('minutes')}/>

              <div className={classes.wordSmall}>SS:</div>
              <TextField className={classes.small} placeholder="SS"
                         onChange={this.handleChange('seconds')}/>

            </div>
            <Button className={classes.createButton} variant="contained" color="primary"
                    onClick={this.createCard}>
              Create Card
            </Button>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={appConstants.applySmallWidth}>
          <div className={classes.elementStorageVertical}>
            <TextField className={classes.titleVertical} placeholder="Title"
                       onChange={this.handleChange('title')}/>
            <div className={classes.elementStorageSmallVertical}>
              <div className={classes.wordSmall}>HH:</div>
              <TextField className={classes.small} placeholder="HH"
                         onChange={this.handleChange('hours')}/>

              <div className={classes.wordSmall}>MM:</div>
              <TextField className={classes.small} placeholder="MM"
                         onChange={this.handleChange('minutes')}/>

              <div className={classes.wordSmall}>SS:</div>
              <TextField className={classes.small} placeholder="SS"
                         onChange={this.handleChange('seconds')}/>

            </div>
            <Button className={classes.createButtonVertical} variant="contained" color="primary"
                    onClick={this.createCard}>
              Create Card
            </Button>
          </div>
        </MediaQuery>

      </Paper>
    )
  }
}

export default withStyles(styles)(CardCreatorUI);