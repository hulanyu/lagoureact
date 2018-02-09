import React, { Component } from 'react';

class JobItem extends Component{
	constructor(){
		super();
		this.handleJobs=this.handleJobs.bind(this);
	}
	render(){
		//console.log(this.props);
		let {positionName,companyName,salary,createTime,city,positionId,companyLogo}=this.props.job;
		return (
			<li className="activeable list-item" data-positionid={positionId} data-companyid="12179" onClick={this.handleJobs}>
	            <img src={"https://static.lagou.com/"+companyLogo}  className="item-logo" />
	            <div className="item-desc">
	                <h2 className="item-title">{companyName}</h2>
	                <p className="item-info">
	                    <span className="item-pos">
	                        {positionName} [ {city} ]
	                    </span>
	                    <span className="item-salary">{salary}</span>
	                </p>
	                <p className="item-time">{createTime}</p>
	            </div>
	        </li>

			)
	}
	handleJobs(e){
		var _this=this;
		var {positionName,companyName,salary,createTime,city,positionId,companyLogo}=_this.props.job;
		console.log(_this.props.job)
		window.location=`/job?${positionId}`
		 
		
	}

	
}
export default JobItem;