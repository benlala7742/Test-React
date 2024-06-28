import React from 'react'
import "./index.css"
import { useDispatch } from 'react-redux';
import { collspseMenu } from '../../store/reducers/tab';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
import { Button, Layout, Avatar, Dropdown } from 'antd';
import avatorurl from "../../assest/images/user2.png"
import { Navigate, useNavigate } from 'react-router-dom';
const { Header } = Layout;



export default function Topheader({ collspased }) {
    const navigate = useNavigate() 
    const loginout = ()=>{
        // 清除token
        localStorage.removeItem("token")
        navigate("/login")
    }
    const items = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer">
              个人中心
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" onClick={loginout} rel="noopener noreferrer">
              退出登录
            </a>
          ),
        },
      ];
    // 定义点击后修改store数据
    const dispatch = useDispatch()
    const updateCollspased = () => {
      dispatch(collspseMenu())
    }
  return (
    <Header className='header-container'>
          <Button
            type="text"
            icon={collspased ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            style={{
              fontSize: '16px',
              width: 64,
              height: 32,
              backgroundColor: "pink"
            }}
            onClick={() => updateCollspased()}
          />
          <Dropdown menu={{items}}>
            <Avatar size={56} src={avatorurl}/>
          </Dropdown>
       
    </Header>
  )
}
