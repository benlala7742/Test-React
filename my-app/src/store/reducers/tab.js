import { createSlice } from '@reduxjs/toolkit'

const tabSlice = createSlice({
    name: "tab",
    initialState: {
        isCollapse: false,
        tabList: [
            {
                path: "/",
                name: "home",
                label: "首页"
            }
        ],
        currentMenu: {}
    },
    reducers: {
        collspseMenu: state => {
            state.isCollapse = !state.isCollapse
        },
        selectMenuList: (state,{ payload: value}) => {
            if(value.name !== "home"){
                state.currentMenu = value
                // 如果已经存在的tag就不需要添加
                const result = state.tabList.findIndex(item => item.name === value.name)
                if(result === -1){
                    state.tabList.push(value)
                }
            }else if (value.name === "home" && state.tabList.length === 1){
                state.currentMenu = {}
            }
        },
        closeTag: (state,{payload: value}) => {
            let res = state.tabList.findIndex(item => item.name === value.name)
            state.tabList.splice(res,1)
        },
        setCurrentMenu: (state, {payload: value}) => {
            if(value.name === "home"){
                state.currentMenu = {}
            }else {
                state.currentMenu = value
            }
        }
    }
})

export const {collspseMenu, selectMenuList,closeTag,setCurrentMenu} = tabSlice.actions
export default tabSlice.reducer