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
    console.log("111",this.props);
    // const {id,title} = qs.parse(this.props.location.search.slice(1))
    // const resultObj = this.state.detailArr.find((detailObj)=>{
    //     return detailObj.id === id
    // })
    return (
      <div>
        <ul>
            <li>ID: </li>
            <li>Title: </li>
            <li>Content: </li>
        </ul>
      </div>
    )
  }
}
