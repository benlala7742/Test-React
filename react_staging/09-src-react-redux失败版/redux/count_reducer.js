
import { INCREMENT,DECREMENT } from "./constant"

const initState = 0 // 初始化状态

export default function countReducer(preState=initState,action){
    // 从action中获取type和datas
    const {type,data} = action 
    switch(type){
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
}