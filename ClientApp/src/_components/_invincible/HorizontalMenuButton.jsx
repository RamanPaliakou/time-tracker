import React, { Component, PureComponent } from "react";
import { Button } from "@material-ui/core/";
import MediaQuery from "react-responsive";

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
    return (
      <Button style={{ width: "100%", fontSize: 'inherit' }}
        color={this.color()} variant = {this.variant()}
        onClick={this.props.onClick}>

        <MediaQuery minWidth={this.props.queryWidth + 1} children={
          this.props.ButtonText} />

        <MediaQuery maxWidth={this.props.queryWidth} children={
          this.props.ButtonIconComponent} />

      </Button>
    );
  }
};

export default HorizontalMenuButton;