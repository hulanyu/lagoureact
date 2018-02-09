import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';
import './App.css';
import Position from './pages/Position';
import Search from './pages/Search';
import Mine from './pages/Mine';
import Head from './components/head';
class APP_index extends Component {
  render() {
    return (
       <div>
         <Head></Head>
          <Router>
              <div>
                  <Switch>
                     <Route path="/app/position" component={Position}></Route>
                     <Route path="/app/search" component={Search}></Route>
                     <Route path="/app/mine" component={Mine}></Route>
                     <Route exact path="/app/position" component={Position} />  
                  </Switch>
               <footer className="footerNav selected">
                    <ul>
                        <li><Link to="/app/position" >职位</Link></li>
                        <li><Link to="/app/search">搜索</Link></li>
                        <li><Link to="/app/mine">我的</Link></li>
                    </ul>
               </footer>
              </div>
          </Router>
      </div>
    );
  }
}

export default APP_index;
