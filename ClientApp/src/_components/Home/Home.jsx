import React from 'react';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles/index';
import { Grid, Paper } from '@material-ui/core/';
// import { push } from 'react-router-redux';
// import TopPanel from '../LayerComponents/TopPanel';
import UserDataControlsPanel from '../_invincible/UserDataControlsPanel';
import AvatarPanel from '../_invincible/AvatarPanel';
// import ImagesPanel from '../LayerComponents/ImagesPanel';
import styles from './HomeStyle';
// import { userActions } from '../../Actions/index';
// import ImageLoadDialogue from '../LayerComponents/ImageLoadDialogue';
// import { getStore } from '../../Helpers/Store';

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
      <div>{/*id="HomepageMaster"*/}
        <AvatarPanel
                alt="avatar"
                avatarImage="https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png"
                patternImage={'url("https://img14.postila.ru/resize?w=660&src=%2Fdata%2F34%2F84%2F33%2Fa8%2F348433a8e32ac170a83318d5b957bfb094c936bccf75a66e21d6561a4122d843.png")'}
        />
        <UserDataControlsPanel
                widthToSmall={520}
                widthToLarge={522}
                userData={{
                  userName: currentUser.userName || 'testUserName',
                  userFullName: currentUser.fullName || 'testFullUserName',
                  userAlbums: 'No albums',
                  userCredo: 'Lorem ipsum credo',
                }}
                buttonsData={[
                  {
                    name: 'Send Message',
                    action: (() => {
                    })
                  },
                  {
                    name: 'Edit profile',
                    action: (() => {})//getStore().dispatch(push('/test2'))),
                  },
                  {
                    name: 'Add images',
                    action: (() => {})//this.setState({ ...this.state, loadFilesModalIsOpen: true }),
                  },
                  {
                    name: 'Claim',
                    action: (() => console.log(this.state)),
                  }]}
              />
              {/* <TopPanel /> */}
        {/* <Grid
          container
          justify="center"
          direction="column"
          wrap="nowrap"
          className={classes.layoutContainer}
          spacing={24}
        >
          <Grid item className={classes.layoutSection}>
            <Paper className={classes.paperBlock}>
              
              
              <Divider className={classes.divider} />
            </Paper>
          </Grid> */}
          {/* <Grid item>
            <ImagesPanel />
          </Grid> */}
        {/* </Grid> */}
        {/* <ImageLoadDialogue
          modalIsOpen={this.state.loadFilesModalIsOpen}
          afterOpenModal={() => {
          }}
          modalCloseCallback={() => this.setState({ ...this.state, loadFilesModalIsOpen: false })}
          masterElement={document.getElementById('HomepageMaster')}
        /> */}
      </div>
    );
  }
}

export default withStyles(styles)(Home);
