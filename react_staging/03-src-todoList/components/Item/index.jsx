import React, { Component } from 'react'
import "./index.css"

export default class Item extends Component {

  state = {
    mouseStatus: false  // 鼠标移进移出的状态
  }

  // 鼠标状态改变函数调用
  handleMouse = (flag)=>{
    return ()=>{
      this.setState({mouseStatus:flag})
    }
  }

  // 勾选框状态改变函数调用
  handleChecked = (id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked)
    }
  }

  // 删除事项+(函数非柯里化实现)----->一般函数都采用柯里化/高阶函数实现
  handleDelete = (id)=>{
    if(window.confirm(`确定删除事项吗？`)){
      this.props.deleteTodo(id)
    }
    else return
  }

  render() {
    const {id,name,done} = this.props
    const {mouseStatus} = this.state
    return (
      <div>
        <li style={{backgroundColor:mouseStatus?"#ddd":"white"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
          <label>
            <input type="checkbox" checked={done} onChange={this.handleChecked(id)}/>
            <span>{name}</span>
          </label>
          <button className="btn btn-danger" onClick={()=>{this.handleDelete(id)}} style={{display:mouseStatus?"block":"none"}}>删除</button>
        </li>
      </div>
    )
  }
}