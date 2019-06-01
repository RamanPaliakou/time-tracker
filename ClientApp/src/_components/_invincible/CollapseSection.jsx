import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Collapse } from '@material-ui/core/';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import ExpandLessOutlined from '@material-ui/icons/ExpandLessOutlined';

const styles = (theme) => {
    return {
        expandButton: {
            margin: 0,
            padding: 0,
            display: 'block',
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            width: '100%',
            height: 10,
            textAlign: 'center',
            textTransform: 'lowercase'
        },
        expandLogo: {
            margin: '0 auto',
            padding: 0,
            display: 'block',
            fontSize: 12,
        }
    };
};



class CollapseSection extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };
    };

    handleExpandClick = () => {
        this.setState(state => ({ collapsed: !state.collapsed }));
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Collapse in={!this.state.collapsed} timeout="auto" unmountOnExit> 
                    {this.props.children}
                </Collapse>
                <Button classes={{ root: classes.expandButton }} onClick={this.handleExpandClick}>
                    additional
                    {this.state.collapsed 
                        ? <ExpandMoreOutlined classes={{ root: classes.expandLogo }} />
                        : <ExpandLessOutlined classes={{ root: classes.expandLogo }} />
                    } 
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(CollapseSection);