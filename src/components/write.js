import React, { Component } from 'react';
import './write.css';
import City from './city';
import axios from 'axios';
class Write extends Component{
	constructor(){
		super();
		this.state={
			show:'block',
			Pname:["产品经理","Java","运营","Android","PHP","UI","ios","编辑","BD"],
			list:"",
			hide:'none',
			location:'none',
			money:'none',
			sty:'none',
			cityshow:'none',
			salaryshow:'none',
			companyshow:'none',
			city:[],
			val:'',
			cityval:'',
			salaryval:'',
			companysty:'',
			salary:["没有要求","2K以下","2K-5K","5k-10k","15-20K","20-25K","25-50K","50K以上"],
			company:['没有要求','初创型','成长型','成熟型','上市公司']
		}
		this.handleF=this.handleF.bind(this);
		this.handleJ=this.handleJ.bind(this);
		this.handleCityval=this.handleCityval.bind(this);
		this.handleM=this.handleM.bind(this);
		this.handleC=this.handleC.bind(this);
		this.handleBack=this.handleBack.bind(this);
	}
	componentWillMount(){
		var _this = this
		axios.post('/api/city').then(function(res){
			//console.log(res)
			_this.setState({
				city:res.data.list
			})
		})
	}
	render(){
		var _this=this;
		//console.log(this.state.city)
		var li=this.state.Pname.map(function(ele,idx){
			return <li key={idx} className="item" onClick={_this.handleJ} data-job={ele}>{ele}</li>
		})
		var city = this.state.city.map(function(ele,idx){
			return <City city={ele} key={idx} City={_this.handleCityval}/>
		})
		var moneys=this.state.salary.map(function(ele,idx){
			return <li key={idx} className="item" onClick={_this.handleM} data-money={ele}>{ele}</li>
		})
		var companys=this.state.company.map(function(ele,idx){
			return <li key={idx} className="item" onClick={_this.handleC} data-company={ele}>{ele}</li>
		})

		return (
			<div>
				<header id="headers">
						设置定制信息
						<a className="left" href="javascript:history.back(-1)">&lt;</a>
				</header>
				<div className="infos" style={{display:this.state.show}}>
		                    想找什么职位？
       		    </div>
       		    <div className="rinputer">
				        <input className="inputer" placeholder="输入你想定制的职位" 
				        onFocus={this.handleF} />
				        <span className="button" onClick={this.handleBack}>OK</span>
			    </div>

			     <div style={{display:this.state.hide}} className="styl" >
			     		职位类型:{this.state.list}
			     </div>

			     <div className="styl" style={{display:this.state.location}}>
			     		工作地点:{this.state.cityval}
			     </div>

			      <div className="styl" style={{display:this.state.money}}>
			     		期望薪水:{this.state.salaryval}
			     </div>

			      <div className="styl" style={{display:this.state.sty}}>
			     		公司规模:{this.state.companysty}
			     </div>
			     <div className="styl" style={{display:this.state.sty}} onClick={this.handleBack}>
			     		完成定制
			     </div>
			    <div id="cont">
			        <ul className="custom-info" style={{display:this.state.show}}>
			            {li}
			        </ul> 

			        <div style={{display:this.state.cityshow}}>{city}</div> 
			        <ul className="custom-info" style={{display:this.state.salaryshow}}>{moneys}</ul> 
			         <ul className="custom-info" style={{display:this.state.companyshow}}>{companys}</ul>
			    </div>

		    </div>
			)
	}
	handleF(){
		this.setState({
			show:'none'
		})
	}
	handleJ(e){
		//console.log(e.target.dataset.job)
		//console.log(e.target)
		this.setState({
			list:e.target.dataset.job,
			show:'none',
			hide:'block',
			cityshow:'block'
		})

	}
	handleCityval(val){
		//console.log(val)
		this.setState({
			cityval:val,
			location:'block',
			cityshow:'none',
			salaryshow:'block'

		})
	}
	handleM(e){
		//console.log(e.target.dataset.money);
		this.setState({
			salaryshow:'none',
			money:'block',
			companyshow:'block',
			salaryval:e.target.dataset.money

		})

	}
	handleC(e){
		this.setState({
			companysty:e.target.dataset.company,
			companyshow:'none',
			sty:'block'


		})
	}
	handleBack(){
		console.log("1");
		var id=window.location.search.slice(1)
		window.location='/app/position?'+id
	}
}
export default Write;