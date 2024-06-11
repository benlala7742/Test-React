import React, { Component } from 'react'

import {Link,Route,BrowserRouter,NavLink,Redirect} from "react-router-dom"
import Home from './page/Home'
import About from './page/About'
import MyNavLink from './component/MyNavLink'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
            {/* 
              NavLink 使用方法               
              <NavLink className="list-group-item" to="/home">Home</NavLink>
              <NavLink className="list-group-item" to="/about">About</NavLink> 
            */}
            {/* MyNavLink 使用方法 */}
            <MyNavLink to="/home">Home</MyNavLink>
            <MyNavLink to="/about">About</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                </Routes> */}
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Redirect to="/home"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </BrowserRouter>
    )
  }
}
