import React from 'react';
import { Layout} from 'antd';
import HeaderComponent from '../HeaderComponent';
import SiderComponent from '../SiderComponent';
import ContentComponent from '../ContentComponent'

const { Header, Footer, Sider, Content } = Layout;

const HomeComponent = () => {
    return (
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

    );
}

export default HomeComponent;
