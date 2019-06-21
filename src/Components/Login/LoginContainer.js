import React, {  Component } from "react";
import Login from './Login';
import axios from 'axios';
import Cookies from 'js-cookie';
import { message } from 'antd';
import actions from './Actions';
import { connect } from 'react-redux';
import { stat } from "fs";

class LoginContainer  extends Component{
    constructor(props){
        super(props);
        this.state={
            email: "",
            password: ""
        }

        if(Cookies.set('token')){
           props.history.push('/dashboard');
        }

    }
    
    handleLogin = (e) => {
      e.preventDefault();
      this.props.userLogin(this.state.email);
    }
    componentDidUpdate(){
        if(Cookies.get('token')){
            this.props.history.push('/dashboard');
        }
    }
    handleEmail = (e) =>{
      this.setState({
          email: e.target.value
      })
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }




    render(){
        const {email, password, errmsg}= this.state;
        return (
          <Login
            email= {email}
            password= {password}
            errmsg= {errmsg}
            handleEmail= {this.handleEmail}
            handleLogin = {this.handleLogin}
            handlePassword ={this.handlePassword}
          />
        );
    }
}
const mapStateToProps = (state) =>({
     user: state.user
});

const mapDispatchToProps = {
    userLogin: actions.userLogin
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);