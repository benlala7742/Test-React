import React, { Component } from 'react'

export default class Detail extends Component {

    state = {
        detailArr: [
            {id: "01", detail: "湖北新闻"},
            {id: "02", detail: "中国新闻"},
            {id: "03", detail: "全球新闻"},
        ]
    }

  render() {
    const {id,title} = this.props.match.params
    const resultObj = this.state.detailArr.find((detailObj)=>{
        return detailObj.id === id
    })
    return (
      <div>
        <ul>
            <li>ID: {id}</li>
            <li>Title: {title}</li>
            <li>Content: {resultObj.detail}</li>
        </ul>
      </div>
    )
  }
}
