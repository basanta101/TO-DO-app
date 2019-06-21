import React,{ Component } from "react";
import Cookies from 'js-cookie';
import { message } from 'antd';
import { connect } from 'redux-saga';
class Logout extends Component{
    constructor(props){
        super(props);
        message.info('User Logged Out Succesfully');
        Cookies.remove("token");
        props.storeUser({});
        props.history.push('/')
    }
    render(){
        return (true);
    }
}

export default Logout;