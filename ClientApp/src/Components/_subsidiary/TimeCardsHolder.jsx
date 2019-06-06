import React, { Component, PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TimeCard from '../TimeCard/TimeCard';
import {appConstants, statusGroups} from '../../Constants';
import spinner from '../../Resources/Images/spinner.gif'
import { getTimeCards } from '../../Helpers/MockData';
import {cardActions} from "../../Actions";
import {connect} from "react-redux";

const styles = (theme) => {
    const unit = theme.spacing.unit;
    return {
        container: {
            minWidth: appConstants.minAppWidth,
            maxWidth: '100%',
            display: 'block',
            marginTop: unit,

        },
        elementStorage: {
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
        },
        element: {
            minWidth: appConstants.minAppWidth,
            width: '100% !important'
        },
        centralizer: {
            margin: '0 auto',
            textAlign: 'center'
        }
    };
};

class TimeCardsHolderUI extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            isLoaded: false
        };
    }

    applyCards = () => {
        let sg = this.props.statusGroup;
        let setState = this.setState;
        if (sg==statusGroups.active)
        {
            var p = new Promise((resolve,reject)=>{
             resolve getTimeCards("active") ;
            });
            p.then(gcards=>{setState({cards: gcards})})
              .then(()=>{resolve getTimeCards("active")})
        }

        // const dispatch = this.props.dispatch;
        //
        // const setState = this.setState.bind(this);
        // let get = new Promise((resolve, reject) => {
        //     const currentUser = JSON.parse(localStorage.getItem('user')) || {};
        //     var cards = dispatch(cardActions.loadCards(currentUser.email));
        //
        //      getTimeCards();//;
        //
        //     resolve(cards);
        // });
        //     get.then(x => x.filter( x => sg.includes(x.status) ))
        //         .then(x=> setState({cards:x, isLoaded: true}));

    }

    startCardCreate = (card) => () => {
        if (!card.started) {
            const cardToAdd = {
                ...card,
                started: true,
                completed: false,
                startedTime: new Date().getTime(),
                timeSpent: 0,
                status: 'inProgress',
            };
            const newCards = this.state.cards.map(el => {
                if (el.id === cardToAdd.id)
                    return cardToAdd
                else return el
            });
            this.setState({ cards: newCards });
        }
    }

    completeCardCreate = (card) => () => {
        if (card.started && !card.completed) {
            const cardToAdd = {
                ...card,
                started: true,
                completed: true,
                startedTime: card.startedTime,
                timeSpent: card.timeSpent,
                status: (card.timeSpent > card.estimate) ? 'badEstimated' : 'completed',
            };
            const newCards = this.state.cards.map(el => {
                if (el.id === cardToAdd.id)
                    return cardToAdd
                else return el
            });
            this.setState({ cards: newCards });
        }
    }

    deleteCardCreate = (card) => () => {
        const newCards = this.state.cards.filter(el =>
            (el.id !== card.id));
        console.log(this.state, newCards);
        this.setState({ ...this.state, cards: newCards });
    }

    componentDidMount() {
        this.applyCards();
    }

    logState = () => {
        console.log(this.state);
    }

    render() {
        const { classes } = this.props;
        const { cards } = this.state;
        return (
            <div className={classes.container} >
                {this.state.isLoaded &&
                    <div className={classes.elementStorage}>
                        {
                            Array.prototype.map.call(cards, c => {
                                return (
                                    <TimeCard id={c.id} title={c.title} estimate={c.estimate} timeSpent={c.timeSpent}
                                        status={c.status} startedTime={c.startedTime} completed={c.completed} started={c.started}
                                        startCard={this.startCardCreate} completeCard={this.completeCardCreate} deleteCard={this.deleteCardCreate}
                                    />

                                )
                            })
                        }
                    </div>
                }
                {
                    <div className={classes.centralizer} children={
                        !this.state.isLoaded && <img src={spinner} onClick={this.logState} />}
                    />
                }
            </div>
        )
    }
};

function mapStateToProps(state) {
    const {users, authentication, cards} = state;
    const {loadedCards, loadCardsFailed} = cards;
    return {
        loadedCards,
        loadCardsFailed
    };
}

const TimeCardsHolder = connect(mapStateToProps)(TimeCardsHolderUI);


export default withStyles(styles)(TimeCardsHolder);
