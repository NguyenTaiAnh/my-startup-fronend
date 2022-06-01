import React from 'react';
import { Layout} from 'antd';
import HeaderComponent from '../HeaderComponent';
import SiderComponent from '../SiderComponent';
import ContentComponent from '../ContentComponent'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

const HomeComponent = () => {
    return (
        <Router>
            <Layout>
                <Header className="header" style={{ marginBottom:"1px" }}>
                    <HeaderComponent/>
                </Header>
                <Layout>
                    <Sider className="sider">
                        <SiderComponent />
                    </Sider>
                    <Content>
                        <ContentComponent />
                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </Router>

    );
}

export default HomeComponent;
