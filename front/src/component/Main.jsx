/**
 * 聊天主页面
 * Created by tianrenjie on 2017/11/13
 */
import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
class Main extends React.Component {
  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default Main;
