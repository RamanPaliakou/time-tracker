import React from 'react';
import { withStyles } from '@material-ui/core/styles/index';
import { Paper, Grid, Divider, Button } from '@material-ui/core/';
import DoneAllOutlined from '@material-ui/icons/DoneAllOutlined';
import HorizontalMenuButton from '../HorizontalMenuButton';
import WatchLaterOutlined from '@material-ui/icons/WatchLaterOutlined';
import TimelineOutlined from '@material-ui/icons/TimelineOutlined';
import PortraitOutlined from '@material-ui/icons/PortraitOutlined';
import { styles } from './HorizontalMenuStyles';
import constants from '../../../_resources/Constants/Constants';
import CollapseSection from '../CollapseSection';
class UserDataControlsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonSelected: 0
    };
  }

  handleClick = (number) => () => {
    this.setState({ buttonSelected: number });
    console.log('handle button click');
  };

  showState = () => {
    console.log(this.state);
  };

  render() {
    const { classes } = this.props;
    const activeNumber = this.state.buttonSelected;
    const collapseAt = constants.applySmallWidth;
    console.log('rendring horizontal menu');
    console.log(this.state);

    return (
      <Paper className={classes.backPaper}>
        <Grid container className={classes.menuElementsContainer}
          justify='center' direction='row' alignContent='center' wrap="nowrap"
        >
          <HorizontalMenuButton
            queryWidth={collapseAt} ButtonText={'COMPLETED'} ButtonIconComponent={<DoneAllOutlined />}
            onClick={this.handleClick(1)} isSelected={(this.state.buttonSelected === 1)} />
          <HorizontalMenuButton
            queryWidth={collapseAt} ButtonText={'ACTIVE'} ButtonIconComponent={<WatchLaterOutlined />}
            onClick={this.handleClick(2)} isSelected={this.state.buttonSelected === 2} />
          <HorizontalMenuButton
            queryWidth={collapseAt} ButtonText={'STATISTICS'} ButtonIconComponent={<TimelineOutlined />}
            onClick={this.handleClick(3)} isSelected={this.state.buttonSelected === 3} />
          <HorizontalMenuButton
            queryWidth={collapseAt} ButtonText={'MANAGE PROFILE'} ButtonIconComponent={<PortraitOutlined />}
            onClick={this.handleClick(4)} isSelected={(this.state.buttonSelected === 4)} />
        </Grid>
        <Divider styles={{ borderBottom: '1px solid grey', margin: 0 }} />
        <CollapseSection />
      </Paper>
    );
  }
}

export default withStyles(styles)(UserDataControlsPanel);
