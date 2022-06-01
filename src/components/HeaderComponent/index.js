import React from 'react';
import { Row, Col, Anchor, Button, Dropdown } from 'antd';
import './styles.css';
import HeaderIconButton from '../../assets/images/headers/vietnamese.svg'
import MenuComponent from '../HeaderComponent/Menu';
import { MessageOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

const { Link } = Anchor;
const HeaderComponent = () => {
    return (
        <Row>
            <Col span={4}>Logo</Col>
            <Col span={20} style={{ display: 'flex', justifyContent: 'end' }}>
                <div style={{ marginRight: '10px', display:'flex', alignSelf:'center' }}>
                    <Anchor affix={false}>
                        <Link className="header__ref">
                            <div>
                                <span className="gry-text">LINK GIỚI THIỆU</span>
                                <p className="link-ref">olacity.com/ref/658372480</p>
                            </div>
                            <div>
                                <strong className="copy">Sao chép</strong>
                            </div>
                        </Link>
                    </Anchor>
                </div>
                <div className="align-items-center">
                    <Button >
                        <img className="dropdown-item-icon" src={HeaderIconButton} alt='img' />
                    </Button>
                    <Button style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                        VNĐ
                    </Button>
                </div>
                <div className="items-message">
                    <Dropdown overlay={MenuComponent}>
                        <MessageOutlined style={{ fontSize: '30px', alignSelf: 'center' }} />
                    </Dropdown>
                </div>
                <div style={{ display: 'inline-grid' }}>
                    <Dropdown overlay={MenuComponent}>
                        <NotificationOutlined style={{ fontSize: '30px', alignSelf: 'center' }} />
                    </Dropdown>
                </div>
                <div className="items-message">
                    <Dropdown overlay={MenuComponent}>
                        <UserOutlined style={{ fontSize: '30px', alignSelf: 'center' }} />
                    </Dropdown>
                </div>
            </Col>
        </Row>
    );
}

export default HeaderComponent;
