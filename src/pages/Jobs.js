import React, { Component } from 'react';
import axios from 'axios';

import './Jobs.css'
class Jobs extends Component{
  	  constructor(){
   	  	  super();
   	  	  	this.state={
   	  	  		job:{}
   	  	  	};
   	  }
   	  componentWillMount(){
   	  	var _this=this;
   	  	var id=window.location.search.slice(1);
       // console.log(id);
   	  	axios.post("/api/position").then(function(res){
   	  		res.data.list.map(function(ele,idx){
   	  			if(id==ele.positionId){
   	  				_this.setState({
   	  					job:res.data.list[idx]
   	  				})
   	  			}
   	  		})
   	  	})
   	  }
   	  render(){
  let {positionName,companyName,salary,createTime,city,positionId,companyLogo}=this.state.job;
        return ( 

          <div id="content">
          <div className="headerl">
          		职位详情
          		<a className="left" href="javascript:history.back(-1)">&lt;</a>

          </div>
        <div className="postitle">
            <h2 className="title">{positionName}</h2>
            <div className="collicon activeable">
                <span className="icon notcoll"></span>
                <span className="text"> 未收藏 </span>
            </div>
        </div>
        <div className="detail">
            <div className="items">
                        <span className="item salary">
                        <em className="icon"></em>
                        <span className="text">{salary}</span>
                    </span>
                       <span className="item workaddress">
                        <em className="icon"></em>
                        <span className="text">{city}</span>
                    </span>
                   <span className="item jobnature">
                        <em className="icon"></em>
                        <span className="text">全职</span>
                    </span>
                     <span className="item workyear">
                        <em className="icon"></em>
                        <span className="text">3-5年</span>
                    </span> 
                    <span className="item education">
                        <em className="icon"></em>
                        <span className="text">本科及以上</span>
                    </span>
                            </div>
               <div className="temptation">
                职位诱惑：发展平台,技术氛围,免费班车,加班补贴
            </div>
        </div>
        <div className="company activeable" data-lg-tj-id="19v6" data-lg-tj-no="0030" data-lg-tj-cid="50702">
            <img src={"https://static.lagou.com/"+companyLogo}  alt="" className="logo" />
            <div className="desc">
                <div className="dleft">
                    <h2 className="title">{companyName}</h2>
                    <p className="info"> 移动互联网,O2O/ D轮及以上/2000人以上</p>
                </div> <span className="dright"></span></div>
        </div>
        <div className="positiondesc">
            <header className="header">
                职位描述
            </header>
            <div className="content">
                <p>工作职责<br/>1、后台相关业务的系统设计开发；<br/>
                2、项目的需求分析、概要设计、详细设计，技术文档的编写；<br/>
                3、开发框架的搭建、改进；<br/>
                4、指导软件工程师的日常开发工作，解决开发中的技术问题。</p>
                <p>任职要求<br/>
                1、扎实的计算机专业基本功，强大的写码能力；<br/>
                2、熟练掌握&nbsp;Java&nbsp;及面向对象设计开发，对部分&nbsp;Java&nbsp;技术有深入研究，研究过优秀开源软件的源码并有心得者优先；<br/>
                3、了解&nbsp;SOA&nbsp;架构理念、实现技术；熟悉常见设计模式，熟练掌握Spring、myBatis&nbsp;等框架；<br/>
                4、熟练掌握&nbsp;MySQL&nbsp;应用开发、数据库原理和常用性能优化和扩展技术，以及&nbsp;NoSQL，Queue&nbsp;的原理、使用场景以及限制；<br/>
                5、研究过&nbsp;http&nbsp;协议、搜索引擎、缓存、jvm&nbsp;调优、序列化、nio、RPC&nbsp;调用框架等，有相应实践经验者优先；<br/>
                6、参与过大型复杂分布式互联网（特别是电商）&nbsp;用户端&nbsp;WEB&nbsp;/&nbsp;API&nbsp;系统的设计开发者优先；<br/>
                7、拥有和工作年限相称的广度和（或）深度，有较强的逻辑/概率思维能力，善于分析、归纳、描述、沟通、和解决问题；<br/>
                8、高度的创业心和投入度，既能搞定牛逼的技术难题，同时又热切地关注业务，用技术力贡献于业务成功。</p>

            </div>
        </div>
        <div className="positioneval">
            <div className="eval-title">
                面试评价
            <span id="total">(<span></span>)</span>
            </div>
        </div>
        <button id="button_bottom" onClick={this.handleTou}>投递简历</button>
      </div>)
   	  }
   	  
   	  handleTou(){
   	  	window.location="/login"
   	  }
  }

  export default Jobs;