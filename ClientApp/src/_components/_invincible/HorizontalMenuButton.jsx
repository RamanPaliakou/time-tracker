import React, { Component, PureComponent } from "react";
import { Button } from "@material-ui/core/";
import { withStyles } from '@material-ui/core/styles';
import MediaQuery from "react-responsive";

const styles = (theme) => {
  const unit = theme.spacing.unit;
  return {
    right: {
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    left: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    center: {
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
      align: (typeof (this.props.align) !== undefined)
        ? this.props.align
        : {}
    };
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    if (typeof (nextProps.activeColor) !== undefined) {
      if (this.props.buttonActiveColor !== nextProps.buttonActiveColor)
        nextState = { ...nextState, buttonActiveColor: nextProps.buttonActiveColor };
    }
    else nextState = { ...nextState, buttonActiveColor: 'primary' };

    return true;
  }

  render = () => {
    const { classes, isSelected, align } = this.props;
    const { buttonActiveColor, buttonColor } = this.state;
    const className = classes[align];
    return (
      <Button className={className}
        style={{ width: "100%", fontSize: 'inherit' }} variant={isSelected ? 'contained' : 'buttonColor'} color={isSelected ? buttonActiveColor : buttonColor}
        onClick={this.props.onClick}>

        <MediaQuery minWidth={this.props.queryWidth + 1} children={
          this.props.ButtonText} />

        <MediaQuery maxWidth={this.props.queryWidth} children={
          this.props.ButtonIconComponent} />

      </Button>
    );
  };
}
export default withStyles(styles)(HorizontalMenuButton);