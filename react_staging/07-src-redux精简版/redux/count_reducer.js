
const initState = 0 // 初始化状态

export default function countReducer(preState=initState,action){
    // 从action中获取type和datas
    const {type,data} = action 
    switch(type){
        case "increment":
            return preState + data
        case "decrement":
            return preState - data
        default:
            return preState
    }
}