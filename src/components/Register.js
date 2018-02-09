import React, { Component } from 'react';
import './Register.css';
import axios from 'axios';
class Register extends Component{
	constructor(){
		super();
		this.state={
			userId:"",
			pwd:""
		};
		this.submit=this.submit.bind(this);
		this.handleLogin=this.handleLogin.bind(this);
	}

	 render() {
	 	  return (
	 	  		<div className="container">
	 	  		  <header className="form_header">
	 	  		  		<h2>注册拉勾</h2>
	 	  		  		<span className="brother_link" onClick={this.handleLogin}>登陆</span>
	 	  		  </header>
				  <div className="form-group" >
				    
				    <input type="text" value={this.state.userId} onChange={(e)=>{this.handleUserId(e)}}  className="form-control" id="exampleInputEmail1"  placeholder="请输入手机号或邮箱" />
				  </div>
				  <div className="form-group">
				   
				    <input type="password" value={this.state.pwd} onChange={(e)=>{this.handlePwd(e)}}  className="form-control" id="exampleInputPassword1" placeholder="请输入密码" />
				  </div>
				  <button onClick={this.submit} className="btn btn-lg btn-block">注册</button>

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
	handleLogin(){
		this.props.history.replace("/login")
	}
	submit(e){
		var _this=this;
		var {userId,pwd}=this.state;
		if(!userId || !pwd){
			alert("不能为空！");
			return
		};
		console.log(this.state);
		//axios异步
		axios.post('/api/register',{
			userId,
			pwd
		}).then(function(res){
			if(!res.code){
				//页面跳转，路由的切换user
				_this.props.history.replace(`/login`)
			}
		})
		
	}
	
  
}
export default Register;