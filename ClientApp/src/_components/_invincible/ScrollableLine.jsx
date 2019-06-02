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
            justifyContent: 'center',
            alignItems: 'stretch',
            width: '100%',
            maxWidth:'inherit',
            height: 'inherit',
            // border: '1px solid red'
        },
        expandButtonLeft: {
            margin: 0,
            padding: 0,
            width: 15,
            minWidth: 15,
            display: 'block',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            textAlign: 'center'
        },
        swipeableViews: {
            height: 'inherit',
            padding: 0,
            paddingTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            overflow:'hidden'
        },
        expandButtonRight: {
            margin: 0,
            padding: 0,
            display: 'block',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            width: 15,
            minWidth: 15,
            textAlign: 'center'
        },
        expandLogo: {
            margin: 'auto 0',
            height: 'inherit',
            maxHeight: '100%',
            padding: 0,
            display: 'block',
            fontSize: 12,
        },
        tabElement: {
            height: '100%',
            padding: 0,
            // width: '100%',
            display: 'inline',
            margin: 0,
        },
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
                <Button className={classes.expandButtonLeft} variant={'contained'}
                    onClick={this.dereaseChange} children={
                        <ArrowLeft className={classes.expandLogo} />}
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
                <Button classes={{ root: classes.expandButtonRight }} variant={'contained'}
                    onClick={this.increaseChange} children={
                        <ArrowRight classes={{ root: classes.expandLogo }} />}
                />
            </div>
        )

    }
}

export default withStyles(styles)(ScrollableLine);