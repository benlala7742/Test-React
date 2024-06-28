import React, { Component } from 'react'
// 从store中得到store中的数据
import store from "../../redux/store"

export default class Count extends Component {
  state = {
    count: 0
  }
  increment = ()=>{
    const {value} = this.selectNumber
    // 
    store.dispatch({type:"increment",data:value*1})
  }

  decrement = ()=>{
    const {value} = this.selectNumber
    store.dispatch({type:"decrement",data:value*1})
  }

  incrementIfOdd = ()=>{
    const {value} = this.selectNumber
    if(store.getState()%2 === 1){
      store.dispatch({type:"increment",data:value*1})
    }
  }

  incrementIfAsync = ()=>{
    const {value} = this.selectNumber
    setTimeout(()=>{
      store.dispatch({type:"increment",data:value*1})
    },1000) 
  }

  render() {
    return (
      <div>
        <h2>当前的值为：{store.getState()}</h2>
        <select ref={currentNodes => this.selectNumber=currentNodes}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>奇数＋</button>&nbsp;
        <button onClick={this.incrementIfAsync}>异步＋</button>&nbsp;
      </div>
    )
  }
}
