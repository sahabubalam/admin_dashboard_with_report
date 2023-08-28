import {
    AuditOutlined,
    CarOutlined,
    DotChartOutlined,
    DownOutlined,
    ProfileOutlined, QrcodeOutlined,
    RightCircleOutlined,
    SolutionOutlined, TagOutlined,
    UpOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {Layout, Menu, theme} from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {setMenu} from '../redux/reducers/menu.reducer';

const {Sider} = Layout;

export default function Sidebar({collapsed, logo}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectedMenu = useSelector((state) => state.menu.selectedMenu);

    const [menus] = useState([
        {
            key: '',
            icon: <QrcodeOutlined />,
            label: 'Dashboard',
        },
        {
            key: 'user',
            icon: <UserOutlined/>,
            label: 'User',
        },
        {
            key: 'sales-report',
            icon: <ProfileOutlined />,
            label: 'Sales Report',
            children: [
                {
                    key: 'sales-report-1',
                    icon: <i className='fa fa-circle' style={{fontSize:'5px',marginLeft:'15px'}}></i>,
                    label: (
                        <span>
                            Submodule 1
                            <UpOutlined style={{marginLeft:'10px',fontSize:'10px',fontWeight:'bold',marginTop:'3px',color:'black'}}/>
                        </span>
                    ),
                },
                {
                    key: 'sales-report-2',
                    icon: <i className='fa fa-circle' style={{backgroundColor:'black',fontSize:'5px',marginLeft:'15px'}}></i>,
                    label: (
                        <span>
                            Submodule 2
                            <UpOutlined style={{marginLeft:'10px',fontSize:'10px',fontWeight:'bold',marginTop:'3px',color:'black'}}/>
                        </span>
                    ),
                },
            ],

        },

        {
            key: 'delivery-report',
            icon: <CarOutlined />,
            label: 'Delivery Report',
            children: [
                {
                    key: 'delivery-report',
                    icon: <i className='fa fa-circle' style={{fontSize:'5px',marginLeft:'15px'}}></i>,
                    label: (
                        <span>
                            Delivery Report
                            <UpOutlined style={{marginLeft:'10px',fontSize:'10px',fontWeight:'bold',marginTop:'3px',color:'black'}}/>
                        </span>
                    ),
                },
                {
                    key: 'submodule-2',
                    icon: <i className='fa fa-circle' style={{fontSize:'5px',marginLeft:'15px'}}></i>,
                    label: (
                        <span>
                            Submodule 2
                            <UpOutlined style={{marginLeft:'10px',fontSize:'10px',fontWeight:'bold',marginTop:'3px',color:'black'}}/>
                        </span>
                    ),
                },
            ],

        },
        {
            key: 'commercial/reports',
            icon: <SolutionOutlined/>,
            label: 'Commercial Report',
            children: [
                {
                    key: 'commercial-report',
                    icon: <i className='fa fa-circle' style={{fontSize:'5px',marginLeft:'15px'}}></i>,
                    label: (
                        <span>
                           Commercial Report
                            <UpOutlined style={{marginLeft:'10px',fontSize:'10px',fontWeight:'bold',marginTop:'3px',color:'black'}}/>
                        </span>
                    ),
                },
                {
                    key: 'submodule-4',
                    icon: <i className='fa fa-circle' style={{fontSize:'5px',marginLeft:'15px'}}></i>,
                    label: (
                        <span>
                            Submodule 2
                            <UpOutlined style={{marginLeft:'10px',fontSize:'10px',fontWeight:'bold',marginTop:'3px',color:'black'}}/>
                        </span>
                    ),
                },
            ],

        },
        {
            key: 'accounting/reports',
            icon: <AuditOutlined />,
            label: 'Accounting Report',
            children: [
                {
                    key: 'accounting-report',
                    icon: <i className='fa fa-circle' style={{fontSize:'5px',marginLeft:'15px'}}></i>,
                    label: (
                        <span>
                            Accounting Report
                            <UpOutlined style={{marginLeft:'10px',fontSize:'10px',fontWeight:'bold',marginTop:'3px',color:'black'}}/>
                        </span>
                    ),
                },
                {
                    key: 'submodule-6',
                    icon: <i className='fa fa-circle' style={{fontSize:'5px',marginLeft:'15px'}}></i>,
                    label: (
                        <span>
                            Submodule 2
                            <UpOutlined style={{marginLeft:'10px',fontSize:'10px',fontWeight:'bold',marginTop:'3px',color:'black'}}/>
                        </span>
                    ),
                },
            ],

        },
        {
            key: 'inventory/reports',
            icon: <TagOutlined />,
            label: 'Inventory Report',
            children: [
                {
                    key: 'inventory-report',
                    icon: <i className='fa fa-circle' style={{fontSize:'5px',marginLeft:'15px'}}></i>,
                    label: 'Inventory Report',
                },
                {
                    key: 'submodule-8',
                    icon: <i className='fa fa-circle' style={{fontSize:'5px',marginLeft:'15px'}}></i>,
                    label: 'Submodule 2',
                },
            ],

        }
    ]);

    const CustomMenu = styled(Menu)`
      .ant-menu-item {
        color: black;
        margin-left: 0 ;
        margin-right: 0 ;
        width: 100% !important;
        &:hover {
          background-color: #F2F2F2 !important; 
          color: black !important; 
        }
      }
      .ant-menu-submenu-title {
        color: black;
        margin-left: 0 ;
        margin-right: 0 ;
        overflow: hidden;
        &:hover {
          background-color: #F2F2F2 !important; 
          color: black !important; 
        }
      }
      .ant-menu-item-selected {
        background-color: #F2F2F2;
        margin-left: 0;
        margin-right: 0;
        color: black;
        font-weight: normal;
        &:hover {
          background-color: #F2F2F2 !important;
          color: black !important;
        }
      }
    `;

    // const [openKeys, setOpenKeys] = useState([]);
    //
    // const handleSubMenuOpenChange = (keys) => {
    //     setOpenKeys(keys);
    // };
    //
    // useEffect(() => {
    // const openParentKeys = selectedMenu.map((childKey) => {
    //     const parentItem = menus.find((item) =>
    //     item.children && item.children.some((child) => child.key === childKey)
    //     );
    //     return parentItem ? parentItem.key : null;
    // });
    //
    // setOpenKeys(openParentKeys.filter((key) => key !== null));
    // }, [selectedMenu]);
    //

    const calculateOpenKeys = useCallback(() => {
        const openParentKeys = selectedMenu.reduce((keys, childKey) => {
            const parentItem = menus.find((item) =>
                item.children && item.children.some((child) => child.key === childKey)
            );
            if (parentItem) {
                keys.add(parentItem.key);
            }
            return keys;
        }, new Set());

        return Array.from(openParentKeys);
    }, [selectedMenu, menus]);

    const [openKeys, setOpenKeys] = useState(calculateOpenKeys());

    useEffect(() => {
        setOpenKeys(calculateOpenKeys());
    }, [calculateOpenKeys]);

    const handleSubMenuOpenChange = useCallback((keys) => {
        setOpenKeys(keys);
    }, []);


    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                transition: '.2s',
                boxShadow:
                    '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                background: colorBgContainer,
            }}
            width={220}
            trigger={null}
            collapsible
            collapsed={collapsed}
        >
            <div className="logo" style={{backgroundColor: '#23303E',height: '60px',text:'center',position:'relative'}}>
                <img
                    src={logo}
                    alt="Logo"
                    style={
                        collapsed
                            ? {margin: '15px',marginTop:'20px', width: '50px', transition: '.4s', textAlign: 'center', color: 'white'}
                            : {margin: '15px',marginTop:'20px', width: '132px', transition: '.4s', textAlign: 'center', color: 'white'}
                    }
                />
            </div>
            <div
                style={
                    collapsed
                        ? {marginLeft:'7px',marginRight:'7px',borderBottom:'1px solid #FFFFFF',paddingTop:'7px',paddingBottom:'7px'}
                        : {marginLeft:'7px',marginRight:'7px',borderBottom:'1px solid #FFFFFF',paddingTop:'7px',paddingBottom:'7px'}
                }
            >
            </div>
            <div style={
                collapsed
                    ? {paddingTop:'7px',paddingBottom:'7px'}
                    : {paddingTop:'7px',paddingBottom:'7px'}
            }></div>

            <CustomMenu
                onClick={(value) => {
                    const { key } = value;
                    dispatch(setMenu({ key }));
                    navigate(`/${key}`);
                }}
                mode="inline"
                openKeys={openKeys}
                onOpenChange={handleSubMenuOpenChange}
                selectedKeys={selectedMenu}
            >
            {menus.map((item) =>
                item?.children ? (
                <SubMenu
                    key={item.key}
                    icon={item.icon}
                    title={item.label}
                    open={openKeys.includes(item.key)}
                >
                    {item?.children?.map((child) => (
                    <Menu.Item key={child.key}>{child.label}</Menu.Item>
                    ))}
                </SubMenu>
                ) : (
                <Menu.Item key={item.key} icon={item.icon}>
                    {item.label}
                </Menu.Item>
                )
            )}
            </CustomMenu>

        </Sider>
    );
}
