//引入react核心库
import React from "react";
//引入ReactDOM
import ReactDOM from "react-dom"
//引入BrowserRouter
import {BrowserRouter} from "react-router-dom"
//引入App组件
import App from "./App";
import store from "./redux/store";

//渲染App到页面
ReactDOM.render(<App/>,document.getElementById("root"))

//通知store重新渲染页面
store.subscribe(()=>{
    ReactDOM.render(<App/>,document.getElementById("root"))
})