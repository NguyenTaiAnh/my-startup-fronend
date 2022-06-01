import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import './styles.css';
const FooterComponent = () => {
    return (
        <div>
            <Row>
                <Col span={4}/>
                <Col  span={5} style={{ display:'flex'}}>
                    <p>Logo</p>
                    <div>
                        <ul>
                            <li><Link to='#'>Về chúng tôi</Link></li>
                            <li>
                                <Link to={'#'}>Pháp lý</Link>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col span={5}>
                    <ul>
                        <li><Link to={'#'}>Hỏi đáp</Link></li>
                        <li><Link to={'#'}>Liên hệ</Link></li>
                    </ul>
                </Col>
                <Col span={5}>
                    <ul>
                        <li><Link to={'#'}>Cài đặt ứng dụng</Link></li>
                    </ul>
                </Col>
                <Col span={5}>
                    <ul>
                        <li><Link to={'#'}>Cộng đồng</Link></li>
                    </ul>
                </Col>
            </Row>
            <p style={{textAlign:'center', margin:'0', fontWeight:'bold'}}>© 2022 Bản Quyền Sở Hữu Thuộc Về NTA</p>

        </div>
    );
}

export default FooterComponent;
