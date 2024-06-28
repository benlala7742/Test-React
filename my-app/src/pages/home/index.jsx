import React, { useEffect, useState, createElement } from 'react'
import "./index.css"
import { Row, Col, Card, Table} from 'antd'
import * as Icons from "@ant-design/icons"
import { getData } from '../../api'
import columns from "../../config/columns"
import countData from "../../config/count"
import MyEcharts from "../../components/Echarts/index"


export default function Home() {
  const avatorUrl = require("../../assest/images/user2.png")
  const [tableData,setTableData] = useState([])
  const [echartData, setEchartData] = useState({})
  useEffect(() => {
    getData().then((res) => {
        console.log("res",res.data.data);
        const {tableData,orderData,userData,videoData} = res.data.data
        setTableData(tableData)
        // 对于echarts数据的组装
        const order = orderData
        // x轴的数据
        const xData = order.date
        // series数据组装
        const keyArray = Object.keys(order.data[0])
        const series = []
        keyArray.forEach(key => {
          series.push({
            name: key,
            data: order.data.map(item => item[key]),
            type: "line"
          })
        })
        setEchartData({
          order: {
            xData,
            series
          },
          user: {
            xData: userData.map(item => item.date),
            series: [
                {
                  name: "新增用户",
                  data: userData.map(item => item.new),
                  type: "bar"
                },
                {
                  name: "活跃用户",
                  data: userData.map(item => item.active),
                  type: "bar"
                }
            ]
          },
          video: {
            series: [
              {
                data: videoData,
                type: "pie"
              }
            ]
          }
        })
    })
  },[])
  const iconToElement = iconName => createElement(Icons[iconName])
  return (
    <Row className='home'>
      <Col span={8}>
        <Card hoverable >
            <div className='user-info'>
                <img src={avatorUrl}/>
                <div>
                  <h2>Admin</h2>
                  <h4>超级管理员</h4>
                </div>
            </div>
            <hr />
            <div className='login-info'>
              <p>上次登陆时间: <span>2020-01-01</span></p>
              <p>上次登录地点: <span>上海</span></p>
            </div>
        </Card>
        <br />
        <Card hoverable>
          <Table rowKey={"name"} columns={columns} dataSource={tableData} pagination={false} />
        </Card>
      </Col>
      <Col span={16}>
          <div className='number'>
              {
                countData.map((item,index)=>{
                  return (
                    <Card key={index}>
                      <div className='icon' style={{backgroundColor:item.color}}>{iconToElement(item.icon)}</div>
                      <div className='detail'>
                        <p className='value'>￥{item.value}</p>
                        <p className='name'>{item.name}</p>
                      </div>
                    </Card>
                  )
                })
              }
          </div>
          <div>
            { echartData.order && <MyEcharts echartData={echartData.order} style={{height: "280px"}}></MyEcharts>}
          </div>
          <div className='graph'>
            { echartData.user && <MyEcharts echartData={echartData.user} style={{height: "240px", width: "50%"}}></MyEcharts> }
            { echartData.video && <MyEcharts echartData={echartData.video} isAxisChart={false} style={{height: "240px", width: "50%"}}/>}
          </div>
      </Col>
    </Row>
  );
}
