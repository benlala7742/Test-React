import React from "react";
import "./index.css"

import { Tag, Space } from 'antd';
import { useLocation,useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux"
import { closeTag,setCurrentMenu } from "../../store/reducers/tab"

const Toptag = () => {
    const tabList = useSelector(state => state.tab.tabList)
    const currentMenu = useSelector(state => state.tab.currentMenu)
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    console.log("tag!!!",tabList);
    const handleClose = (tag,index) => {
        let length = tabList.length - 1 
        dispatch(closeTag(tag))
        // 关闭的是不是当前的tag
        if(tag.path !== location.pathname){
            return 
        }
        // 如果关闭当前tag
        if(index === length) {
            // 设置当前数据
            const currentData = tabList[index-1]
            dispatch(setCurrentMenu(currentData))
            // 跳转
            navigate(currentData.path)
        }else {
            // 如果tag至少存在一个数据，则选择后一个tag
            const nextData = tabList[index + 1]
            dispatch(setCurrentMenu(nextData))
            navigate(nextData.path)

        }
    }
    const handleChange = (tag) => {
        dispatch(setCurrentMenu(tag))
        navigate(tag.path)
    }
    // tag的显示
    const setTag = (flag,item,index) => {
        return (
            flag ? 
            <Tag color="#87d068" closeIcon onClose={() => handleClose(item,index)} key={item.name} >{item.label} </Tag>
            : 
            <Tag onClick={() => handleChange(item)} key={item.name} > {item.label} </Tag>
        )
    }
    return (
        <Space className="container" size={[0,8]} wrap>
           {
                currentMenu.name && tabList.map((item,index) => {
                    return setTag(item.path === currentMenu.path,item,index)
                })
           }
        </Space>
    )
}

export default Toptag