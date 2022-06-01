import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import { ShopOutlined, SettingOutlined, QuestionCircleOutlined, SketchOutlined, BarChartOutlined, WalletOutlined, CommentOutlined, DashboardOutlined, UnorderedListOutlined, CodepenOutlined, UsergroupAddOutlined, BorderOuterOutlined } from '@ant-design/icons';

const SiderComponent = () => {    
    return (
        <div className="sider">
            <div style={{ display: 'flex', padding: '8% 0'}}>
                <div className="image">
                    <img src={''} alt='img' />
                </div>
                <div className="level">
                    <p>Đánh giá cấp bật</p>
                    <p>Hiện bạn đang ở cấp 1</p>
                </div>
            </div>
            <hr style={{ width: '90%', borderTop: '1px solid #f5f1f1'}}/>
            <Menu defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                    <DashboardOutlined />
                    <span>Tổng quan</span>
                    <Link to="/" />
                </Menu.Item>
                <Menu.Item key="2">
                    <UnorderedListOutlined />
                    <span>Danh mục</span>
                    <Link to="/categories" />
                </Menu.Item>
                <Menu.Item key="3">
                    <CodepenOutlined />
                    <span>Sản phẩm của tôi</span>
                    <Link to="/my-product" />
                </Menu.Item>
                <Menu.Item key="4">
                    <BorderOuterOutlined />
                    <span>Đơn hàng</span>
                    <Link to="/order" />
                </Menu.Item>
                <Menu.Item key="5">
                    <UsergroupAddOutlined />
                    <span>Thành viên</span>
                    <Link to="/member" />
                </Menu.Item>
                <Menu.Item key="6">
                    <CommentOutlined />
                    <span>Cộng đồng</span>
                    <Link to="/community" />
                </Menu.Item>
                <Menu.Item key="7">
                    <WalletOutlined />
                    <span>Ví</span>
                    <Link to="/wallet" />
                </Menu.Item>
                <Menu.Item key="8">
                    <BarChartOutlined />
                    <span>Thống kê thu nhập</span>
                    <Link to="/income-statistics" />
                </Menu.Item>
                <Menu.Item key="9">
                    <SketchOutlined />
                    <span>Giảm giá</span>
                    <Link to="/discount" />
                </Menu.Item>
                <Menu.Item key="10">
                    <QuestionCircleOutlined />
                    <span>Hỏi đáp</span>
                    <Link to="/QA" />
                </Menu.Item>
                <Menu.Item key="11">
                    <SettingOutlined />
                    <span>Cài đặt</span>
                    <Link to="/setting" />
                </Menu.Item>
                <Menu.Item key="12">
                    <ShopOutlined />
                    <span>Cửa hàng</span>
                    <Link to="/shop" />
                </Menu.Item>
            </Menu>
        </div>
    )
}
export default SiderComponent;