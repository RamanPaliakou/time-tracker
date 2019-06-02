import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core/';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import SwipeableViews from 'react-swipeable-views';

const styles = (theme) => {
    const unit = theme.spacing.unit;
    return {
        container: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            width: '100%',
            minWidth: '100%',
            height: 'inherit',
        },
        tabElement: {
            height: '100%',
            display: 'block',
            width: '100%',
            margin: 0,
            padding: 0,
        },
        expandButtonLeft: {
            margin: 0,
            padding: 0,
            display: 'block',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            width: 10,
            minWidth: 10,
            height: '100%',
            textAlign: 'center',
            textTransform: 'lowercase'
        },
        swipeableViews: {
            height: 'inherit',
            padding: unit,
            display: 'flex',
            flexDirection:'row',
            alignItems: 'center'
        },
        expandButtonRight: {
            margin: 0,
            padding: 0,
            display: 'block',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            width: 10,
            minWidth: 10,
            height: '100%',
            textAlign: 'center'
        },
        expandLogo: {
            margin: 'auto 0',
            height: 'inherit',
            padding: 0,
            display: 'block',
            fontSize: 12,
        }
    };
};

class ScrollableLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Title',
            value: 0,
            expanded: false,
            description: 'Description goes here'
        };
    }
    increaseChange = () => {
        if (this.state.value === 2)
            this.setState({ value: 0 })
        else
            this.setState({ value: this.state.value + 1 })
    }
    dereaseChange = () => {
        if (this.state.value === 0)
            this.setState({ value: 2 })
        else
            this.setState({ value: this.state.value - 1 })
    }
    handleChangeIndex = (index) => {
        this.setState({ value: index });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <Button classes={{ root: classes.expandButtonLeft }} onClick={this.dereaseChange} children={
                    <ArrowLeft classes={{ root: classes.expandLogo }} />}
                />
                <SwipeableViews className={classes.swipeableViews} axis={'x'} index={this.state.value}>
                    <div className={classes.tabElement}>
                        {this.props.ElementOne}
                    </div>
                    <div className={classes.tabElement}>
                        {this.props.ElementTwo}
                    </div>
                    <div className={classes.tabElement}>
                        {this.props.ElementThree}
                    </div>
                </SwipeableViews>
                <Button classes={{ root: classes.expandButtonRight }} onClick={this.increaseChange} children={
                    <ArrowRight classes={{ root: classes.expandLogo }} />}
                />
            </div>
        )

    }
}

export default withStyles(styles)(ScrollableLine);