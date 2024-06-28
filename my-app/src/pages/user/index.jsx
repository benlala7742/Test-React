import React, { useEffect, useState } from 'react'
import { Button,DatePicker,Form,Input, InputNumber, Modal, Popconfirm, Select, Table } from 'antd'
import "./index.css"
import { getUser,addUser,updateUser,deleteUser } from '../../api'
import columns from '../../config/user-column'
import { render } from '@testing-library/react'
import dayjs from 'dayjs'

export default function User() {
  const [listData,setListData] = useState({name: ""})
  // 0新增 1编辑
  const [modalType,setModalType] = useState(0)
  // 控制Modal开关
  const [open, setOpen] = useState(false)
  const [form] = Form.useForm()
  // 新增&编辑
  const handleClick = (type,rowData) => {
    setOpen(true)
    if(type === "add"){
      setModalType(0)
    }else{
      setModalType(1)
      const cloneData = JSON.parse(JSON.stringify(rowData))
      cloneData.birth = dayjs(cloneData.birth)
      //表单数据回填到编辑栏中
      form.setFieldsValue(cloneData)
    }
  }
  const handleOk = () => {
      setOpen(false);
      // 表单校验
      form.validateFields().then((value) => {
        //日期参数格式转换
        value.birth = dayjs(value.birth).format("YYYY-MM-DD")
        console.log(value);
        // 调用后端接口
        if(modalType){ // 编辑
          updateUser(value).then(()=>{
            handleCancel()
            getTableData()
          })
        }else{ // 新增
          addUser(value).then(()=>{
            handleCancel()
            getTableData()
          })
        }
      }).catch(error => {
        console.log("操作失败");
      })
  };
  const handleCancel = () => {
    setOpen(false);
    form.resetFields()
  };
  // 搜索
  const handleFinish = (e) => {
    setListData({
      name: e.keyword
    })
  }
  useEffect(()=>{
    getTableData()
  },[listData])
  // 删除
  const handleDelete = ({id}) => {
    // const {id} = rowData
    // console.log(id);
    deleteUser({id}).then(()=>{
      getTableData()
    })
  }
  // 查询
  const [tableData, setTableData] = useState([])
  const getTableData = () => {
    getUser(listData).then((res) => {
      console.log(res);
      const {list} = res.data
      setTableData(list)
    })
  }
  useEffect(() => {
    getTableData()
  },[])
  const columnOperation = {
      title: "操作",
        render: (rowData) => {
            return (
                <div>
                    <Button type="primary" style={{marginRight: "5px"}} onClick={() => handleClick("edit",rowData)}>编辑</Button>
                    <Popconfirm 
                      title="提示"
                      description="确定删除该用户?"
                      okText="确认"
                      cancelText="取消"
                      onConfirm={() => handleDelete(rowData)}
                    >
                      <Button type="primary" danger>删除</Button>
                    </Popconfirm>
                </div>
            )
        }
    }
  return (
    <div className='user'>
      <div className='flex-box space-between'>
        <Button type="primary" onClick={() => handleClick("add")}>新增</Button>
        <Form 
          layout='inline'
          onFinish={handleFinish}
        >
          <Form.Item name={"keyword"}>
            <Input placeholder='请输入关键词'/>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type='primary'>搜索</Button>
          </Form.Item>
        </Form>
      </div>
      <div className='table'>
        <Table rowKey={"id"} columns={[...columns,columnOperation]} dataSource={tableData} />
        <Modal 
          title={modalType ? "编辑用户" : "新增用户"}
          okText="确认"
          cancelText="取消"
          open={open}
          onOk={handleOk}
          // confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <Form
            form={form}
            labelCol={{span: 6}}
            wrapperCol={{span: 18}}
            labelAlign='left'
          >
            {  modalType == 1 &&
              <Form.Item
                name= "id"
                hidden
              >
                <Input />
              </Form.Item>
            }
            <Form.Item
              label= "姓名"
              name= "name"
              rules={[
                {
                  required: true,
                  message: "请输入姓名"
                }
              ]}
            >
              <Input placeholder='请输入姓名'/>
            </Form.Item>
            <Form.Item
              label= "年龄"
              name= "age"
              rules={[
                {
                  required: true,
                  message: "请输入年龄"
                },
                {
                  type: "number",
                  message: "年龄必须为数字"
                }
              ]}
            >
              <InputNumber placeholder='请输入年龄'/>
            </Form.Item>
            <Form.Item
              label= "性别"
              name= "sex"
              rules={[
                {
                  required: true,
                  message: "请选择性别"
                }
              ]}
            >
              <Select
                options={[
                  {value: 0,label:"男"},
                  {value: 1,label:"女"}
                ]}
              />
            </Form.Item>
            <Form.Item
              label= "出生日期"
              name= "birth"
              rules={[
                {
                  required: true,
                  message: "请选择出生日期"
                }
              ]}
            >
              <DatePicker placeholder='请选择' format="YYYY/MM/DD"/>
            </Form.Item>
            <Form.Item
              label= "地址"
              name= "addr"
              rules={[
                {
                  required: true,
                  message: "请填写地址"
                }
              ]}
            >
              <Input placeholder='请填写地址'/>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  )
}
