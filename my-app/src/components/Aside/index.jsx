import React, { createElement } from "react"
import AsideConfig from "../../config"
import * as Icons from '@ant-design/icons';

import { Layout, Menu, theme } from 'antd';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { selectMenuList } from "../../store/reducers/tab"

const { Sider } = Layout;

// 动态将icon转换为组件
const iconToElement = iconName => createElement(Icons[iconName])

// 处理菜单的数据
const items = AsideConfig.map((item)=>{
    // 没有子路由
    const items = {
        key: item.path,
        icon: iconToElement(item.icon),
        label: item.label
    }
    // 有子路由
    if(item.children){
        items.children = item.children.map((item)=>{
            return {
                key: item.path,
                label: item.label
            }
        })
    }
    return items
})


export default function Aside({ collspased }) {
    const {
            token: { colorBgContainer, borderRadiusLG },
          } = theme.useToken();
    // 定义路由跳转钩子函数
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // 添加数据到store中
    const setTabList = (value) => {
        dispatch(selectMenuList(value))
    }
    // 菜单跳转函数
    const selectMenu = (e) => {
        console.log(e);
        let data
        AsideConfig.forEach(item => {
            // 找到当前数据
            if(item.path === e.keyPath[e.keyPath.length -1]){
                data = item
                // 如果有二级菜单
                if(e.keyPath.length > 1){
                    data = item.children.find(child => {
                        return child.path === e.key
                    })
                }
            }
        })
        setTabList({
            path: data.path,
            name: data.name,
            label: data.label
        })
        navigate(e.key)
    }
    return (
        <Sider trigger={null} collapsed={collspased}>
            <h3 className="app-name">{collspased ? "后台" : "通用后台管理系统"}</h3>
            <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={items}
            style={{
                height: "100%"
            }}
            onClick={selectMenu}
            />
        </Sider>
  )
}
