import React, { Component } from 'react'

export default class Count extends Component {
  state = {
    count: 0
  }
  increment = ()=>{
    const {value} = this.selectNumber
    this.props.increment(value*1)
  }

  decrement = ()=>{
    const {value} = this.selectNumber
    this.props.decrement(value*1)
  }

  incrementIfOdd = ()=>{
    const {value} = this.selectNumber
    if(this.props.count % 2 === 1){
      this.props.increment(value*1)
    }
  }

  incrementIfAsync = ()=>{
    const {value} = this.selectNumber
    setTimeout(() => {
      this.props.increment(value*1)
    }, 1000);
  }

  render() {
    console.log("1111",this.props);
    return (
      <div>
        <h2>当前的值为：{this.props.count}</h2>
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
