import React from "react";
import "./index.css"
import { Button, Form, Input, message } from "antd";
import { getMenu } from "../../api";
import { useNavigate,Navigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    // 在登陆状态下，需要跳转到home
    if(localStorage.getItem("token")){
        return <Navigate to={"/home"} replace/>
    }
    const handleSubmit = (value) => {
        if(!value.password || !value.username){
            return message.open({
                type: "warning",
                content: "请输入用户名和密码"
            })
        }
        getMenu(value).then(({data}) => {
            localStorage.setItem("token",data.data.token)
            navigate("/home")
        })
    }
    
    return (
        <Form className="login-container" onFinish={handleSubmit}>
            <Form.Item 
                label="账号"
                name= "username"
            >
                <Input placeholder="请输入账号"></Input>
            </Form.Item>
            <Form.Item 
                label="密码"
                name= "password"
            >
                <Input.Password placeholder="请输入密码"></Input.Password>
            </Form.Item>
            <Form.Item className="login-button">
                <Button type="primary" htmlType="submit">登录</Button>
            </Form.Item>
        </Form>
    )
}

export default Login