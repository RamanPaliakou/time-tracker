import React from 'react';
import { withStyles } from '@material-ui/core/styles/index';
import { Paper, Button, TextField, Typography, Grid, IconButton, Input, InputAdornment, Icon } from '@material-ui/core/';
import classNames from 'classnames';
import MediaQuery from 'react-responsive';
import UserProfileDataPanel from './UserProfilePanel';
import ButtonPanel from './ButtonPanel';
import constants from '../../_resources/Constants/Constants'
import DoneAllOutlined from '@material-ui/icons/DoneAllOutlined'

const HorizontalMenuButton = (props) => {
    return (
        render(
            <Button style={{width: '100%'}}>
                <MediaQuery query="(min-width: 521px)">1   
            </MediaQuery>
            <MediaQuery query="(max-width: 520px)">  
            <DoneAllOutlined />
            </MediaQuery> 
            </Button>
        )
    )


}