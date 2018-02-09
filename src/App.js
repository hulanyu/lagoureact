import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import APP_index from './APP_index';
import Login from './components/Login';
import Register from './components/Register';
import Jobs from './pages/Jobs';
import Write from './components/write';

class App extends Component {
  render() {
    return (
       <div>
       
          <Router>
              <div className="App">
                  <Switch>
                     <Route path="/login" component={Login}></Route>
                     <Route path="/register" component={Register}></Route>
                     <Route path="/app" component={APP_index}></Route>
                     <Route path="/job" component={Jobs}></Route>
                     <Route path="/write" component={Write}></Route>
                     <Redirect exact path="/" to="/app/position" />                   
                  </Switch>  
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
