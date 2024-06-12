import React, { Component } from 'react'

import { Link,Route } from 'react-router-dom'

import Detail from './Detail'

export default class Message extends Component {
  
  state = {
    messageArr: [
        {id: "01", title: "message1"},
        {id: "02", title: "message2"},
        {id: "03", title: "message3"},
    ]
  }
  
  render() {
    return (
        <div>
            <ul>
                {
                    this.state.messageArr.map((messageObj)=>{
                        return (<li key={messageObj.id}>
                                    <Link to={{pathname:"/about/message",state:{id:messageObj.id,title:messageObj.title}}}>{messageObj.title}</Link>
                                    {/* search参数   <Link to={`/about/message/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link> */}
                                </li>)
                    })
                }
            </ul>
            <div>
              {/* search和state的路由接收都是一样的，直接接收 */}
                <Route path="/about/message/" component={Detail}/>
            </div>
      </div>
    )
  }
}
