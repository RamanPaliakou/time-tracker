import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { styles } from './TimeCardStyles';
import Typography from '@material-ui/core/Typography';


class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDisplay: '0',
            initialDate: this.props.initialDate || new Date(),
        }
    }
    static propTypes = {
        yearStarted: PropTypes.bool.isRequired,
        completed: PropTypes.bool.isRequired,
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            let cr = new Date();

            const diffTime = Math.abs(cr.getTime() - this.state.initialDate.getTime());
            let diffSeconds = parseInt(diffTime / 1000);
            let diffMinutes = parseInt(diffSeconds / 60);
            let diffHours = parseInt(diffMinutes / 60);
            let diffDays = parseInt(diffHours / 24);

            diffSeconds = diffSeconds%60;
            diffMinutes = diffMinutes%60;
            diffHours = diffHours%24;

            var cd = '';
            if (diffDays !== 0) {
                cd += (diffDays + ' days ');
            }
            if (diffHours !== 0 ) {
                cd += (diffHours + ' hours ');
            }
            if (diffMinutes !== 0 ) {
                cd += (diffMinutes + ' minutes ');
            }
            cd += (diffSeconds + ' seconds');
            this.setState({ currentDisplay: cd });
        }, 500)
    }

    shouldComponentUpdate(nextProps, nextState) {
        const value = nextProps.isActive && (nextProps.started || !nextProps.completed)
        return value;
    }

    render() {
        return (
            <div className={this.props.summary} styles={{}} >
                <Typography variant="h5" gutterBottom styles={{ margin: 'auto 0' }}>
                    Estimated as: {this.props.estimate}
                </Typography>
                <Typography variant="h5" gutterBottom styles={{ margin: 'auto 0' }}>
                    Time Passed: {this.state.currentDisplay}
                </Typography>
            </div>
        )

    }
}
export default Summary;