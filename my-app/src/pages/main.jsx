import React, { useState } from "react"
import { Outlet } from 'react-router-dom'
import { Layout, theme } from 'antd';
import Aside from "../components/Aside"
import Topheader from "../components/Header";
import Toptag  from "../components/Tag";
import RouterAuth from "../router/routerAuth";
import { useSelector } from "react-redux";

const { Content } = Layout;

export default function Main() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const collspased = useSelector(state => state.tab.isCollapse)
  return (
    <RouterAuth>
      <Layout className="main-container">
        <Aside collspased={collspased}/>
        <Layout>
          <Topheader collspased={collspased}/>
          <Toptag />
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </RouterAuth>
  )
}
