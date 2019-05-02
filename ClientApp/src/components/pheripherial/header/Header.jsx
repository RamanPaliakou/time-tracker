import React, { Component, PureComponent } from 'react';
import styles from './Header.scss'

class Header extends React.PureComponent {
    render() {
        return (
            <div>
                <div className={styles.topline}>SomeNotes</div>
            </div>
        )
    }
}

export default Header;