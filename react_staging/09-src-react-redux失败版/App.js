import React, { Component } from 'react'

import Count from './container/Count'
import { Provider } from 'react-redux';

// 引入store通过props传递给Count组件
import store from './redux/store'


export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Count />
        </Provider>
      </div>
    )
  }
}
