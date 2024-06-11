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
                                    <Link to={`/about/message/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>
                                </li>)
                    })
                }
            </ul>
            <div>
                <Route path="/about/message/:id/:title" component={Detail}/>
            </div>
      </div>
    )
  }
}
