import React, { Component } from 'react';
import "./SearchList.css";
import City from './city';
import axios from 'axios';
import JobItem from './JobItem';
import Load from './Load';
import SearchJob from './SearchJob';
class SearchList extends Component{
	constructor(){
		super();
		this.state={
			list:[],
			value:'',
			job:[],
			len:6,
			show:'none',
			search:[],
			hide:'none',
			text:'web'
		};
		this.handleCity=this.handleCity.bind(this);
		this.handleCitys=this.handleCitys.bind(this);
		this.handleSearch=this.handleSearch.bind(this);
		this.handleSpan=this.handleSpan.bind(this);
		this.handleJob=this.handleJob.bind(this);
		this.history=this.history.bind(this);
		this.handleDelete=this.handleDelete.bind(this);
	}
	 render() { 
	 	var _this =this
	 	var li=this.state.list.map(function(elem,index){
						//遍历回调函数，并返回新数组
						return <City city={elem} key={index} City={_this.handleCitys}/>;
						});
		var job=this.state.job.map(function(elem,index){
				return <JobItem job={elem} key={index} />
			})	
		var sea=this.state.search.map(function(ele,idx){
			return <SearchJob search={ele} key={idx} ty={_this.state.hide} 
			 onsearch={_this.handleSearch} ondelete={_this.handleDelete}></SearchJob>
		})
	 	  return (<div>
					<div className="contentl">
						<span onClick={this.handleCity} >
							{this.state.value?this.state.value:"全国"}
						</span>
						<input type="text" className="text" 
						placeholder={this.state.text?this.state.text:"搜索职位或公司" }
						onChange={this.handleJob} onClick={this.history} />
						<button className="btnl" 
						onClick={this.handleSearch} >
						</button>				
					</div>	
						{li}
						{sea}
						<ul className="list">
						{job}
						<Load onclick={this.handleSpan} 
							  display={this.state.show}/>
						</ul>		
				 </div>
	 	  	)
	}
	handleCity(e){
		var _this=this;
		//axios异步请求
		axios.post('/api/city').then(function(res){
			//console.log(res.data.list);
			_this.setState({
				list:res.data.list,
				job:[],
				show:"none",
				hide:"block"
			})
		})
	}
	handleCitys(val){
		this.setState({
			value:val,
			list:[]
		})
	}
	handleSearch(txt){
		var _this=this;
		var len=this.state.len,
			text=this.state.text?this.state.text:txt,
			value=this.state.value;
			//console.log(txt)
		//axios异步请求
		axios.post('/api/position').then(function(res){
			//console.log(res.data.list);
			var data=[];
			var reg=new RegExp(text);
			//console.log(reg);
			if(value==="全国"){
				data.push(res.data.list);
			}
			for(let i=0;i<res.data.list.length;i++){
				if(value==res.data.list[i].city && reg.test(res.data.list[i].positionName)){
						data.push(res.data.list[i])
					}	
			}
			_this.setState({
				job:data,
				len:len+6,
				show:'block',
				hide:'none'
				
			})
		})
			var history = localStorage.findHistory ? JSON.parse(localStorage.findHistory) : [];
				if(history.indexOf(this.state.text)==-1){
					history.push(this.state.text);
				}
				history = JSON.stringify(history);
				localStorage.findHistory = history;
		//console.log(history);

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
					job:data,
					len:len+6
				})
		})
	}
	handleJob(e){
		//console.log(e.target.value)
		this.setState({
			text:e.target.value
		})
	}
	history(){
				var history = localStorage.findHistory ? JSON.parse(localStorage.findHistory) : [];		
				this.setState({
					search:history,
					hide:"block",
					job:[],
					show:"none"
				})			
	}
	handleDelete(val){
	var history = localStorage.findHistory ? JSON.parse(localStorage.findHistory) : [];	
		console.log(history)
		history.map(function(ele,idx){
			if(ele==val){
				history.splice(idx,1)
			}
		})
		this.setState({
			search:history
		})
		history = JSON.stringify(history);
		localStorage.findHistory = history;
		//console.log(history)
	}
  
}
export default SearchList;