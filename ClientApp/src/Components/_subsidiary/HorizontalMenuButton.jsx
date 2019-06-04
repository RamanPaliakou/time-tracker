import React, { Component, PureComponent } from "react";
import { Button } from "@material-ui/core/";
import { withStyles } from '@material-ui/core/styles';
import MediaQuery from "react-responsive";

const styles = (theme) => {
  const unit = theme.spacing.unit;
  return {
    right: {
      padding:0,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    left: {
      padding:0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    center: {
      padding:0,
      borderRadius: 0,
    }
  };
}

class HorizontalMenuButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonActiveColor: 'primary',
      buttonColor: 'default',
      align: props.align || {},
      fontSize: props.customFontSize || 'unset',
      height: props.customHeight || 'unset',
      textTransform:  props.textTransform || 'unset'
    };
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    if (typeof (nextProps.activeColor) !== "undefined") {
      if (this.props.buttonActiveColor !== nextProps.buttonActiveColor)
        nextState = { ...nextState, buttonActiveColor: nextProps.buttonActiveColor };
    }
    else nextState = { ...nextState, buttonActiveColor: 'primary' };

    return true;
  }

  render = () => {
    const { classes, isSelected, align } = this.props;
    const { buttonActiveColor, buttonColor, fontSize, height, textTransform } = this.state;
    const className = classes[align];
    return (
      <Button  className={className}
        style={{ width: "100%", height: height, fontSize: fontSize, textTransform: textTransform }} 
        variant = {isSelected ? 'contained' : 'text'}color={isSelected ? buttonActiveColor : buttonColor}
        onClick={this.props.onClick}>

        <MediaQuery minWidth={this.props.collapseAt + 1} children={
          this.props.ButtonText} />

        <MediaQuery maxWidth={this.props.collapseAt} children={
          this.props.ButtonIconComponent } />

      </Button>
    );
  };
}
export default withStyles(styles)(HorizontalMenuButton);