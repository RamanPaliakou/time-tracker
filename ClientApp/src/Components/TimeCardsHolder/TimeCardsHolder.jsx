import React, { Component, PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TimeCard from '../TimeCard/TimeCard';
import {appConstants, statusGroups} from '../../Constants';
import spinner from '../../Resources/Images/spinner.gif'
import { getTimeCards } from '../../Helpers/MockData';
import {cardActions} from "../../Actions";
import {connect} from "react-redux";
import {styles} from './TimeCardsHolderStyles';

class TimeCardsHolderUI extends PureComponent {
    constructor(props) {
        super(props);
    }

    applyCards = () => {
        const dispatch = this.props.dispatch;

        let get = new Promise((resolve, reject) => {
            const currentUser = JSON.parse(localStorage.getItem('user')) || {};
            dispatch(cardActions.loadCards(currentUser.email));
        });
        get.then();
    };

    componentDidMount() {
        this.applyCards();
    }

    render() {
        const { classes } = this.props;
        const cards = typeof(this.props.loadedCards) === "undefined" ? [] : this.props.loadedCards;
        const isLoaded = typeof(this.props.loadCardsOk) === "undefined" ? false : this.props.loadCardsOk;
        return (
            <div className={classes.container} >
                {isLoaded &&
                    <div className={classes.elementStorage}>
                        {
                            Array.prototype.map.call(cards, c => {
                                return (
                                    <TimeCard id={c.id} shouldDisplayByStatus = {2} />

                                )
                            })
                        }
                    </div>
                }
                {
                    <div className={classes.centralizer} children={
                        !isLoaded && <img src={spinner} onClick={this.logState} />}
                    />
                }
            </div>
        )
    }
};

function mapStateToProps(state) {
    const {cards} = state;
    const {loadedCards, loadCardsOk} = cards;
    return {
        loadedCards,
        loadCardsOk
    };
}

const TimeCardsHolder = connect(mapStateToProps)(TimeCardsHolderUI);

export default withStyles(styles)(TimeCardsHolder);
