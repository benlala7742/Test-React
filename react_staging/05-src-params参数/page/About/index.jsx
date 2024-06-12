import React, { Component } from 'react'

import {Switch,Route} from "react-router-dom"

import MyNavLink from "../../component/MyNavLink"
import News from '../About_News'
import Message from '../About_Message'

export default class About extends Component {
  render() {
    return (
      <div>
        <span>This is About Component</span>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink className="list-group-item" to="/about/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink className="list-group-item" to="/about/message">Message</MyNavLink>
            </li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route path="/about/news" component={News} />
            <Route path="/about/message" component={Message} />
          </Switch>
        </div>
      </div>
    )
  }
}
