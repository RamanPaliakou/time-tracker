import React, { Component, PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TimeCard from './TimeCard/TimeCard';
import constants from '../../_resources/Constants/Constants';
import { statusGroups } from '../../_resources/Constants/StatusGroups';
import spinner from '../../_resources/Images/spinner.gif'
import { getTimeCards } from '../../_resources/Helpers/GetDataHelper';

const styles = (theme) => {
    const unit = theme.spacing.unit;
    return {
        container: {
            minWidth: constants.minAppWidth,
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
            minWidth: constants.minAppWidth,
            width: '100% !important'
        },
        centralizer: {
            margin: '0 auto',
            textAlign: 'center'
        }
    };
};

class TimeCardsHolder extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            isLoaded: false
        };
    }

    applyCards = () => {
        let sg = statusGroups[this.props.statusGroup];
        const setState = this.setState.bind(this);
        let get = new Promise((resolve, reject) => {
            var cards = getTimeCards();//;

            resolve(cards);    
        });
            get.then(x => x.filter( x => sg.includes(x.status) ))
                .then(x=> setState({cards:x, isLoaded: true}));
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

    componentDidUpdate(prevProps, prevState) {
        console.log('didUpdate', this.state);
    }

    componentDidMount() {
        this.applyCards();
        // if (!this.state.isLoaded) {
        //     return new Promise((resolve, reject) => ) setTimeout(() => this.setValues(), 500);
        // }
    }

    logState = () => {
        console.log(this.state);
    }

    render() {
        const { classes } = this.props;
        const { cards } = this.state;
        console.log('dsf'); (Array.prototype.map.call(cards, x => console.log(x)));
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


export default withStyles(styles)(TimeCardsHolder)