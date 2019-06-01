import React from 'react';
import { withStyles } from '@material-ui/core/styles/index';
import { Paper, Button, TextField, Typography, Grid, IconButton, Input, InputAdornment, Icon } from '@material-ui/core/';
import classNames from 'classnames';
import MediaQuery from 'react-responsive';
import UserProfileDataPanel from './UserProfilePanel';
import ButtonPanel from './ButtonPanel';
import constants from '../../_resources/Constants/Constants'
import DoneAllOutlined from '@material-ui/icons/DoneAllOutlined'

const styles = (theme) => {
  const { unit } = theme.spacing;
  return {
    userDataLarge: {
      width: '78%',
    },
    userControlsLarge: {
      width: '19%',
    },
    userDataSmall: {
      width: '100%',
    },
    userControlsSmall: {
      width: '100%',
    },
    smallLayout: {
      minHeight: 190,
      width: 'inherit',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      boxSizing: 'borderBox',
      marginBottom: unit,
    },
    largeLayout: {
      minHeight: 190,
      width: 'inherit',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'nowrap',
      boxSizing: 'borderBox',
      marginBottom: unit,
    },
    backPaper: {
      margin: constants.marginHome
    }
  };
};

class UserDataControlsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      widthToSmall, widthToLarge, userData, classes, buttonsData, className,
    } = this.props;
    return (
      <Paper className = {classes.backPaper}>
         <Grid container
            justify='space-between' direction='row' alignContent='center' wrap="nowrap"
            spacing={0}> 
        
          
            
              
               
         

        <Button style={{width: '100%'}}>
          2
        </Button>
        <Button style={{width: '100%'}}>
          3
        </Button>
        <Button style={{width: '100%'}}>
          4
        </Button>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(UserDataControlsPanel);
