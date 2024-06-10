//创建“外壳”组件App
import React,{Component} from "react"
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"
import "./App.css"

export default class App extends Component{
//数据在哪，操作数据的方法就应该定义在哪

    // 列表数据
    state = { todos:[
        {id: "001", name: "吃饭", done: true},
        {id: "002", name: "睡觉", done: false},
        {id: "003", name: "打游戏", done: false},
        {id: "004", name: "看电影", done: true},
    ]}

    // 添加新的列表数据
    addTodo = (todoObj)=>{
        const todos = this.state.todos
        const newTodos = [todoObj,...todos]
        this.setState({todos: newTodos})
    }

    // 更新列表数据
    updateTodo = (id,done)=>{
        const todo = this.state.todos
        const newTodos = todo.map((todoObj)=>{
            if(todoObj.id == id) return {...todoObj,done}
            else return todoObj
        })
        this.setState({todos: newTodos})
    }

    // 删除列表数据
    deleteTodo = (id)=>{
        const todo = this.state.todos
        const newTodos = todo.filter((todoObj)=>{
            return todoObj.id !== id
        })
        this.setState({todos: newTodos})
    }

    // 全选/全不选列表数据
    checkedAll = (checked)=>{
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done:checked}
        })
        this.setState({todos: newTodos})
    }

    // 删除已完成的数据
    deleteDone = ()=>{
        const {todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        })
        this.setState({todos: newTodos})
    }

    render(){
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo}></Header>
                        <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
                        <Footer todos={this.state.todos} checkedAll={this.checkedAll} deleteDone={this.deleteDone}></Footer>
                    </div>
                </div>
            </div>
        )
    }
}