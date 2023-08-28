import {
    ArrowDownOutlined,
    DownCircleOutlined,
    DownOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {
    Avatar,
    Badge,
    Divider,
    Dropdown,
    Layout,
    Menu,
    Row,
    Typography,
} from 'antd';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import {capitalizeString} from "../components/lib/common/Helper";


const LOGOUT = 'logout';
const PROFILE = 'profile';
const {Text} = Typography;

export default function AppHeader({collapsed, setCollapsed}) {
    const selectedMenu = useSelector((state) => state.menu.selectedMenu);

    console.log({selectedMenu})

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    let count = 0;

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const handleLogOut = async () => {
        try {
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    };

    const avoidHighpehn = '-'

    const handleMenuClick = async (selected) => {
        const {key} = selected;

        if (key === LOGOUT) {
            await handleLogOut();
        }

        if (key === PROFILE) {
            const userId = localStorage.getItem('userId');
            navigate(`/configurations/profile/${userId}`);
        }
    };

    const menu = (
        <Menu
            style={{
                marginTop: '-15px',
                cursor: 'pointer',
            }}
            onClick={handleMenuClick}
            items={[
                {
                    label: (
                        <div
                            style={{
                                margin: '3px 15px',
                                fontSize: '16px',
                                cursor: 'pointer',
                            }}
                        >
                            <UserOutlined/> <Text>Profile</Text>
                        </div>
                    ),
                    key: PROFILE,
                },
                {
                    label: (
                        <div
                            style={{
                                margin: '3px 15px',
                                fontSize: '16px',
                                cursor: 'pointer',
                            }}
                        >
                            <LogoutOutlined style={{color: 'red'}}/>{' '}
                            <Text type="danger">Log Out</Text>
                        </div>
                    ),
                    key: LOGOUT,
                },
            ]}
        />
    );

    return (
        <>
            <Layout.Header
                className="site-layout-background"

                style={{
                    color: '#ffffff',
                    backgroundColor: '#23303E',
                    fontSize: '16px',
                    position: 'sticky',
                    top: 0,
                    zIndex: 9999999,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: collapsed? '41.5px' : '60px'
                }}
            >
                <Row>
                    {/*<div style={{color: 'white'}}>*/}
                    {/*    {React.createElement(*/}
                    {/*        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,*/}
                    {/*        {*/}
                    {/*            className: 'trigger',*/}
                    {/*            onClick: () => setCollapsed(!collapsed),*/}
                    {/*        }*/}
                    {/*    )*/}
                    {/*    }*/}
                    {/*</div>*/}
                    <div
                        style={{
                            cursor: 'pointer',
                            padding: '0 24px',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#1E1E1E'
                        }}
                    >
                        <span style={{color: 'white'}}>{selectedMenu[0] === '' ? 'Dashboard' : capitalizeString(selectedMenu, avoidHighpehn)}</span>
                    </div>

                </Row>
                <Row
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Dropdown
                        overlay={menu}
                        placement="bottom"
                    >
                        <Row
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer',
                            }}
                        >
                            <Avatar
                                style={{marginRight: '5px', width: '22px', height: '22px', color: 'white',textAlign:'center',marginTop:'4px'}}
                                size="large"
                            />
                            <p
                                style={{
                                    color: 'white',
                                    marginTop: '15px',
                                    marginRight: '10px',
                                    fontSize:'12px'
                                }}
                            >ADMIN
                            </p>

                            <DownOutlined style={{color: 'white',textAlign:'center',marginTop:'3px'}}/>
                        </Row>
                    </Dropdown>
                    <Divider type="vertical"/>
                </Row>
            </Layout.Header>
        </>
    );
}
