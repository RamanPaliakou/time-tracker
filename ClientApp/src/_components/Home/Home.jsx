import React from 'react';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles/index';
import { Grid, Paper } from '@material-ui/core/';
// import { push } from 'react-router-redux';
// import TopPanel from '../LayerComponents/TopPanel';
import AvatarPanel from '../_invincible/AvatarPanel';
// import ImagesPanel from '../LayerComponents/ImagesPanel';
import {styles } from './HomeStyle';
// import { userActions } from '../../Actions/index';
// import ImageLoadDialogue from '../LayerComponents/ImageLoadDialogue';
// import { getStore } from '../../Helpers/Store';
import HorizontalMenu from '../_invincible/HorizontalMenu/HorizontalMenu';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loadFilesModalIsOpen: false,
      ModifyProfileModalIsOpen: false,
    };
  }

  componentDidMount() {
    // this.props.dispatch(userActions.getAll());
  }

  render() {
    const { classes } = this.props;
    const currentUser = JSON.parse(localStorage.getItem('user')) || {};
    return (
      <div className = {classes.ComponentContainer}>
        <AvatarPanel
                alt="avatar"
                avatarImage="https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png"
                patternImage={'url("https://img14.postila.ru/resize?w=660&src=%2Fdata%2F34%2F84%2F33%2Fa8%2F348433a8e32ac170a83318d5b957bfb094c936bccf75a66e21d6561a4122d843.png")'}
        />
        <HorizontalMenu />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
