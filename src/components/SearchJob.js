import React, { Component } from 'react';
class SearchJob extends Component{
	constructor(){
		super();

		this.handleDetal=this.handleDetal.bind(this);
		this.handleSearch=this.handleSearch.bind(this);
		}
		render(){
			//console.log(this.props)
			return (<div style={{display:this.props.ty}} className="history">
					<span className="txt" onClick={this.handleSearch}
					>{this.props.search}</span>
					<span className="deli" onClick={this.handleDetal}
					data-delete={this.props.search}>×</span>
					</div>)
		}
		handleDetal(e){
			//console.log(e.target.dataset.delete);
			this.props.ondelete(e.target.dataset.delete);


		}
		handleSearch(){
			//console.log(this.props);
			this.props.onsearch(this.props.search)
		}
	}
export default SearchJob;