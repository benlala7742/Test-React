import React, {useEffect, useRef} from "react";
import * as echarts from 'echarts';


const axisOption = {
    // 图例文字颜色
    textStyle: {
      color: "#333",
    },
    // 提示框
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category", // 类目轴
      data: [],
      axisLine: {
        lineStyle: {
          color: "#17b3a3",
        },
      },
      axisLabel: {
        interval: 0,
        color: "#333",
      },
    },
    yAxis: [
      {
        type: "value",
        axisLine: {
          lineStyle: {
            color: "#17b3a3",
          },
        },
      },
    ],
    color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
    series: [],
}
  
const normalOption = {
    tooltip: {
      trigger: "item",
    },
    color: [
      "#0f78f4",
      "#dd536b",
      "#9462e5",
      "#a6a6a6",
      "#e1bb22",
      "#39c362",
      "#3ed1cf",
    ],
    series: [],
}
const Ecahrts = ({ style, echartData, isAxisChart=true }) => {
    // 获取dom实例
    const echartRef = useRef()
    // 定义图标对象
    let echartObj = useRef(null)
    useEffect(()=>{
        let options
        // echart的初始化
        echartObj.current = echarts.init(echartRef.current)
        // 设置option
        if(isAxisChart) {
            // 设置x轴
            axisOption.xAxis.data = echartData.xData
            axisOption.series = echartData.series
            options = axisOption
        } else {
            normalOption.series = echartData.series
            options = normalOption
        }
        // 将图标对象加上当前图表数据
        echartObj.current.setOption(options)
    },[echartData])

    return (
        <div style={style} ref={echartRef}></div>
    )
}

export default Ecahrts