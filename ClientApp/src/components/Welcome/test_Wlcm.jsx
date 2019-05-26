import React, { Component, PureComponent } from 'react';
import styles from './Welcome.sass';
import { empireLogo } from './empire.png'
class Welcome extends React.PureComponent {
    state = {
        collapsed: false
    };

    componentWillMount() {
        this.setState({
            collapsed: true
        });
    }

    toggleCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        const { collapsed } = this.state;
        const style = {maxWidth: 320}
        return (
            <div className={styles.mainContainer}>
                <div
                    className={styles.mainLogo}
                    onClick={this.toggleCollapse}>
                </div>
                <Card
                    style={style}
                    // className={styles.collapsedContainer}
                    >
                    <CardTitle
                        title="Hello"
                        subTitle="there"/>
                    <Collapse
                        className={styles.collapsedSection}
                        collapsed={collapsed}>
                        <span>Here goes some text</span>
                    </Collapse>
                </Card>

            </div>
        )
    }
}

export default Welcome;