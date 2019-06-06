import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { styles } from './TimeCardStyles';
import Typography from '@material-ui/core/Typography';
import {timeDiferenceFunction} from '../../Helpers'

class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDisplay: '0'
        }
    }
    static propTypes = {
        completed: PropTypes.bool.isRequired,
        callbackTimePassed: PropTypes.func.isRequired,
        timeSpent: PropTypes.number.isRequired,
        estimate: PropTypes.number.isRequired
    };

    componentDidMount() {
            this.interval = setInterval(() => {
                let cr = new Date();

                const diffTime = Math.abs(cr.getTime() - this.props.startedTime);

                const cd = timeDiferenceFunction(diffTime);

                this.props.callbackTimePassed(diffTime)();
                if (this.props.started && !this.props.completed)
                    this.setState({ currentDisplay: cd });
            }, 1000)
    }

    shouldComponentUpdate(nextProps, nextState) {
        // const value = t
        //   && (nextProps != this.props && nextState != this.state);
        // return value;
        if (!this.props.summaryValuesCorrect) return true;
        if (!this.props.isActive) return false;
        if (nextProps.timeSpent === this.props.timeSpent && this.state.currentDisplay === nextState.currentDisplay) return false;
        return true;
    }

    render() {
        console.log(this.props);
        const { currentDisplay,  } = this.state;
        const { timeSpent, estimate, completed } = this.props;
        console.log(this.props);
        const estimatedTime = typeof(estimate) != "undefined" ? timeDiferenceFunction(estimate) : "";
        return (
            <div className={this.props.summary}>
                <Typography variant="h5" gutterBottom styles={{ margin: 'auto 0' }}>
                    Estimated as: {estimatedTime}
                </Typography>
                <Typography variant="h5" gutterBottom styles={{ margin: 'auto 0' }}>
                    Time Passed: {completed ? timeDiferenceFunction(timeSpent) : currentDisplay}
                </Typography>
            </div>
        )
    }
}
export default Summary;