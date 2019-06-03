import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { styles } from './TimeCardStyles';
import Typography from '@material-ui/core/Typography';
import createTimeDiferenceFunction from '../../_resources/Helpers/TimeHelper'

class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDisplay: '0',
            startedTime: this.props.startedTime || new Date().getTime(),
            completed: (typeof props.completed !== "undefined") ? props.completed : false,
            started: (typeof props.started !== "undefined") ? props.started : false,
            estimate: (typeof props.estimate !== "undefined") ? props.estimate : 0,
            isActive: props.isActive || false
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
                const msToString = createTimeDiferenceFunction(diffTime);

                const cd = msToString();

                this.props.callbackTimePassed(diffTime)();
                this.setState({ currentDisplay: cd });
            }, 1000)
        
    }

    componentWillReceiveProps(nextProps) {
        const newState = {
            currentDisplay: this.state.currentDisplay,
            startedTime: nextProps.startedTime || new Date().getTime(),
            completed: (typeof nextProps.completed !== "undefined") ? nextProps.completed : this.state.completed,
            started: (typeof nextProps.started !== "undefined") ? nextProps.started : this.state.started,
            estimate: (typeof nextProps.estimate !== "undefined") ? nextProps.estimate : this.state.estimate,
            isActive: nextProps.isActive || false
        }
        this.setState(newState);
    }


    shouldComponentUpdate(nextProps, nextState) {
        const value = this.state.isActive && (this.state.started && !this.state.completed)
        return value;
    }

    render() {
        const { currentDisplay, completed, estimate } = this.state;
        const { timeSpent } = this.props;
        const estimatedTime = createTimeDiferenceFunction(estimate);
        return (
            <div className={this.props.summary} styles={{}} >
                <Typography variant="h5" gutterBottom styles={{ margin: 'auto 0' }}>
                    Estimated as: {estimatedTime()}
                </Typography>
                <Typography variant="h5" gutterBottom styles={{ margin: 'auto 0' }}>
                    Time Passed: {completed ? createTimeDiferenceFunction(timeSpent)() : currentDisplay}
                </Typography>
            </div>
        )

    }
}
export default Summary;