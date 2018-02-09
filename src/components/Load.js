import React, { Component } from 'react';

class Load extends Component{
	constructor(){
		super();
		this.handleSpan=this.handleSpan.bind(this);

	}
	render(){
		//console.log(this.props)
		return (
				<span className="spn" onClick={this.handleSpan}
				style={{display:this.props.display}}>加载更多...</span>	
			)
	}
	handleSpan(){
	this.props.onclick();
	}
}
export default Load;