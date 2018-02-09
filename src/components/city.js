import React, { Component } from 'react';
import './city.css';
class City extends Component{
	constructor(){
		super();
		this.handleC=this.handleC.bind(this);
	}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
	 render(){	
	 	
	 var _this=this;
	 var list=this.props.city.cityList.map(function(ele,idx){
	 				return <b key={idx} onClick={_this.handleC}
	 				 	data-city={ele} >{ele}</b>
	 })
		return (
				<div className="citylist">
				<h3>{this.props.city.nameStr}</h3>
				<ul className="cities">
					<li>{list}</li>

				</ul>
				</div>
			)
	}
	handleC(e){
		this.props.City(e.target.dataset.city)
	}

}

export default City;
