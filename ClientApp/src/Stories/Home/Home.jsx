import React from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {Grid, Paper} from '@material-ui/core/';
import AvatarPanel from '../../Components/_subsidiary/AvatarPanel';
import HorizontalMenu from '../../Components/HorizontalMenu/HorizontalMenu';
import TimeCardsHolder from '../../Components/_subsidiary/TimeCardsHolder';
import {appConstants} from "../../Constants";
import WatchLaterOutlined from '@material-ui/icons/WatchLaterOutlined';
import TimelineOutlined from '@material-ui/icons/TimelineOutlined';
import PortraitOutlined from '@material-ui/icons/PortraitOutlined';
import DoneAllOutlined from '@material-ui/icons/DoneAllOutlined';
import {styles} from './HomeStyles';
import DiagramHolder from '../../Components/_subsidiary/DiagramHolder';
import {connect} from 'react-redux';
import { userService } from '../../Services';
import {userActions} from "../../Actions";
import {_timeCards} from "../../Mock/TimeCardData";

class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loadFilesModalIsOpen: false,
      ModifyProfileModalIsOpen: false,
      area: 'completed'
    };
  }

  logout = () => {
    this.props.dispatch(userActions.logoutNRedirect());
  };

  componentDidMount() {
    //this.props.dispatch(userActions.getAll());
  }

  doTestQuery = () => {
    console.log(JSON.stringify(_timeCards));
  };

  render() {
    const {classes} = this.props;
    const currentUser = JSON.parse(localStorage.getItem('user')) || {};


    const HorizontalMenuFields =
      [
        {
          text: 'COMPLETED',
          callback: () => {
            this.setState({area: 'completed'})
          },
          iconComponent: <DoneAllOutlined/>,
          collapseAt: appConstants.applySmallWidth,
        },
        {
          text: 'ACTIVE',
          callback: () => {
            this.setState({area: 'active'})
          },
          iconComponent: <WatchLaterOutlined/>,
          collapseAt: appConstants.applySmallWidth,
        },
        {
          text: 'STATISTICS',
          callback: () => {
            this.setState({area: 'statistics'})
          },
          iconComponent: <TimelineOutlined/>,
          collapseAt: appConstants.applySmallWidth,
        },
        {
          text: 'MANAGE PROFILE',
          callback: () => {
            this.doTestQuery();
          },
          iconComponent: <PortraitOutlined/>,
          collapseAt: appConstants.applySmallWidth,
        }
      ];

    return (
      <div className={classes.ComponentContainer}>
        <AvatarPanel
          alt="avatar"
          buttonClickAction = {this.logout}
          avatarImage="https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png"
          patternImage={'url("https://img14.postila.ru/resize?w=660&src=%2Fdata%2F34%2F84%2F33%2Fa8%2F348433a8e32ac170a83318d5b957bfb094c936bccf75a66e21d6561a4122d843.png")'}
        />
        <HorizontalMenu buttonsArray={HorizontalMenuFields} customHeight={40} customFontSize={17}/>

        {(this.state.area === 'completed') && <TimeCardsHolder statusGroup='completed'/>}
        {(this.state.area === 'active') && <TimeCardsHolder statusGroup='active' addButton={true}/>}
        {(this.state.area === 'statistics') && <DiagramHolder/>}
        {(this.state.area === 'profile') && <span>Here goes profile editor</span>}


      </div>
    );
  }
}


function mapStateToProps(state) {
  const {users, authentication} = state;
  const {user} = authentication;
  return {
    user,
    users
  };
}

const Home = connect(mapStateToProps)(HomePage);


export default withStyles(styles)(Home);
