import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles/index';
import { Paper, Grid, Divider, Button, Input } from '@material-ui/core/';
import { styles } from './HorizontalMenuStyles';
import HorizontalMenuButton from '../HorizontalMenuButton';
import constants from '../../../_resources/Constants/Constants';
import PropTypes from 'prop-types';
// import CollapseSection from '../CollapseSection';

class HorizontalMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonSelected: 0,
      height: props.customHeight || 'unset',
      fontSize: props.customFontSize || 'unset',
      textTransform: props.textTransform || 'unset',
      enableSelection: (typeof (props.enableSelection !== undefined) ? (props.enableSelection === false ? false : true) : true),
    };
  }


  handleClick = (number, callback) => () => {
    this.setState({ buttonSelected: number });
    callback();
  };

  render() {
    const { classes } = this.props;
    const { height, fontSize, textTransform, enableSelection } = this.state;
    const activeNumber = this.state.buttonSelected;
 
    return (
      <Paper className={classes.backPaper}>
        <Grid container className={classes.menuElementsContainer}
          justify='center' direction='row' alignContent='center' wrap="nowrap"
        >
          {
            this.props.buttonsArray.map(b => {
              const i = Array.prototype.indexOf.call(this.props.buttonsArray, b);
              const l = this.props.buttonsArray.length - 1;
              return (
                <HorizontalMenuButton collapseAt={b.collapseAt} isSelected={enableSelection && (activeNumber === i)}
                  ButtonText={b.text} ButtonIconComponent={b.iconComponent}
                  customHeight={height} customFontSize={fontSize} textTransform={textTransform}
                  onClick={this.handleClick(i, b.callback)} align={i === 0 ? 'left' : (i === l ? 'right' : 'center')}
                />)
            })
          }

        </Grid>
        {/* <Divider styles={{ borderBottom: '1px solid grey', margin: 0 }} /> */}
        {/* <CollapseSection/> */}
      </Paper>
    );
  }
}

export default withStyles(styles)(HorizontalMenu);
