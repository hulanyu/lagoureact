import React, { Component } from 'react';
import './Mine.css';
class Mine extends Component{
	constructor(){
		super();
		this.state={
			style:"block",
			hide:'none'
		}	
	}
	componentWillMount(){
	 	var id=window.location.search.slice(1).slice(0,8);
	 	console.log(id)
	 	if(id=='username'){
	 		this.setState({
	 			style:'none',
	 			hide:'block'
	 		})
	 	}
	 }  
	 render() {
	 	  return (
	 	  		<div className="content">
	 	  			<div className="logininfo">
	 	  				{/*未登陆*/}
	 	  				<div className="nologin center">
	 	  					<div className="loginbut" style={{display:this.state.style}}>
	 	  						<span className="likes" onClick={this.handleLo}>登录</span>/
	 	  						<span className="likes" onClick={this.handleRe}>注册</span>
	 	  					</div>
	 	  				</div>
	 	  			</div>
	 	  			<div className="buttons">
						<div className="button deliver">
							<span className="likes" onClick={this.handleLo}>投递</span>
						</div>
						<div className="button interview" >
							<span className="likes" onClick={this.handleLo}>面试</span>
						</div>
						<div className="button invitation" >
							<span className="likes" onClick={this.handleLo}>邀约</span>
						</div>	
						<div className="button collect" >
							<span className="likes" onClick={this.handleLo}>收藏</span>
						</div>		

	 	  			</div>
	 	  			<a href="/app/mine"  className="loginout" style={{display:this.state.hide}}>退出登录</a>
	 	  		</div>
	 	  	)
	}
	handleLo(){
		window.location="/login"
	}
	handleRe(){
		window.location="/register"
	} 
}
export default Mine;