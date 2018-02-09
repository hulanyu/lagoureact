import React, { Component } from 'react';
import axios from 'axios';
import JobItem from '../components/JobItem';
import './Position.css';
import Load from '../components/Load';
class Position extends Component{
	constructor(){
		super();
		this.state={
			list:[],
			len:6,
			style:"block",
			hide:'none'
		};
		var _this=this;
		var j=this.state.len;
		//axios异步请求
		axios.post('/api/position').then(function(res){
			var data=[];
			for(let i=0;i<j;i++){
				data.push(res.data.list[i])
			}
				_this.setState({
					list:data,
					len:j+6
				})
			
		})
		this.handleSpan=this.handleSpan.bind(this);
		this.handleL=this.handleL.bind(this);
		this.handleW=this.handleW.bind(this);

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
	 render(){	
	    var li=this.state.list.map(function(elem,index){
			//遍历回调函数，并返回新数组
			return <JobItem job={elem} key={elem.positionId} />;
		});
	
		return (
				<ul className="list"> 
				<p className="infol"><span className="hed">10秒钟定制职位</span> 
				<span className="hedr" onClick={this.handleL} 
				style={{display:this.state.style}}>去登录</span>
				<span className="hedr" style={{display:this.state.hide}} onClick={this.handleW}>编辑</span></p>
					{li}
				<Load  onclick={this.handleSpan}/>
				</ul>
			)
	}
	handleL(){
		window.location="/login"
	}
	handleSpan(){
		var _this=this;
		//axios异步请求
		//console.log("1")
		var len=this.state.len;
		axios.post('/api/position').then(function(res){
			var data=[];
			for(let i=0;i<len;i++){
				data.push(res.data.list[i])
			}
				_this.setState({
					list:data,
					len:len+6
				})
		})
	}
	handleW(){
		var id=window.location.search.slice(1)
		window.location="/write?"+id
	}

}
export default Position;