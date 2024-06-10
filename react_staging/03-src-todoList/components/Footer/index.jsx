import React, { Component } from 'react'
import "./index.css"

export default class Footer extends Component {

  handleCheckedAll = (event)=>{
    this.props.checkedAll(event.target.checked)
  }

  handleDeleteAll = ()=>{
    if(window.confirm("确认删除已完成事项？")){
      this.props.deleteDone()
    }
    else return
  }

  render() {
    const {todos} = this.props
    const total = todos.length
    const doneCount = todos.reduce((pre,todo)=>{return pre + (todo.done?1:0)},0)
    return (
      <div>
        <div className="todo-footer">
          <label>
              <input type="checkbox" onChange={this.handleCheckedAll} checked={total===doneCount && (total!=0) ? true:false}/>
          </label>
          <span>
              <span>已完成{doneCount}</span> / 全部{total}
          </span>
          <button className="btn btn-danger" onClick={this.handleDeleteAll}>清除已完成任务</button>
          </div>
      </div>
    )
  }
}
