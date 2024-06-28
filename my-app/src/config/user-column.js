const columns = [
    {
       title: "姓名" ,
       dataIndex: "name"
    },
    {
        title: "年龄",
        dataIndex: "age"
    },
    {
        title: "性别",
        dataIndex: "sex",
        render: (value) => {
            return value ? "女" : "男"
        }
    },
    {
        title: "出生日期",
        dataIndex: "birth"
    },
    {
        title: "地址",
        dataIndex: "addr"
    },
    // {
    //     name: "操作",
    //     render: () => {
    //         return (
    //             <div>
    //                 <Button type="primary" style={{marginRight: "5px"}}>编辑</Button>
    //                 <Button type="primary" danger>删除</Button>
    //             </div>
    //         )
    //     }
    // }
]

export default columns