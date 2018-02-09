import React, { Component } from 'react';
import axios from 'axios';
import './Login.css'
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';

class Login extends Component{
	constructor(){
		super();
		this.state={
			userId:"",
			pwd:""
		};
		this.submit=this.submit.bind(this);
		this.handleRegister=this.handleRegister.bind(this);
		
	}

	 render() {
	 	  return (
	 	  	<div className="container">
	 	  		  <header className="form_header">
	 	  		  		<h2>登录拉勾</h2>
	 	  		  		<span className="brother_link" onClick={this.handleRegister}>注册</span>
	 	  		  </header>
				  <div className="form-group" >
				    
				    <input type="text" value={this.state.userId} onChange={(e)=>{this.handleUserId(e)}} className="form-control" id="exampleInputEmail1"  placeholder="请输入已验证的手机号或邮箱" />
				  </div>
				  <div className="form-group">
				   
				    <input type="password" value={this.state.pwd} onChange={(e)=>{this.handlePwd(e)}} className="form-control" id="exampleInputPassword1" placeholder="请输入密码" />
				  </div>
				  <button onClick={this.submit} className="btn btn-lg btn-block">登录</button>

            </div>
	 	  	)
	}
	handleUserId(e){
		this.setState({
			userId:e.target.value
		})
	}
	handlePwd(e){
		this.setState({
			pwd:e.target.value
		})
	}
	handleRegister(){
		this.props.history.replace("/register")
	}
	submit(e){
		var _this=this;
		var {userId,pwd}=this.state;
		if(!userId || !pwd){
			alert("不能为空！");
			return
		};
		axios.post('/api/login',{
			userId,
			pwd
		}).then(function(res){
			if(!res.code){
				//页面跳转，路由的切换user
				_this.props.history.replace(`/app/position?username=${userId}`)
			}
		})
		
	}
	
  
}
export default Login;