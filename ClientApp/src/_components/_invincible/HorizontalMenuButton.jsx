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
    middle : {
      borderRadius: 0,
    }
  };
}

class HorizontalMenuButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonColor: 'default',
    };
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.activeColor !== undefined) {
      this.setState({ buttonColor: nextProps.activeColor });
    }
    else {
      this.setState({ buttonColor: 'primary' });
    }
  }

  color = () => {
    return this.props.isSelected
      ? this.state.buttonColor
      : 'default'
  }

  variant = () => {
    return this.props.isSelected
      ? 'contained'
      : 'default'
  }

  render() {
    const { classes } = this.props;

    const className = () => {
      if (typeof this.props.align == undefined) return {};
      return (this.props.align === 'left')
        ? classes.left
        : (this.props.align === 'right')
          ? classes.right
          : classes.middle;
    }

    return (
      <Button className={className()} style={{ width: "100%", fontSize: 'inherit' }}
        color={this.color()} variant={this.variant()}
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