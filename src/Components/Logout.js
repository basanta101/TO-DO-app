import React,{ Component } from "react";
import Cookies from 'js-cookie';
import { message } from 'antd';
import { connect } from 'react-redux';
import actions from "./Login/Actions";
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
const mapDispatchToProps={
    storeUser: actions.storeUser
}

export default connect( undefined,mapDispatchToProps)(Logout);