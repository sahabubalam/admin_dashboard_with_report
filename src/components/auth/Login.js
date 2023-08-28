import {Navigate, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {notifyError, notifySuccess} from "../lib/common/notifications";
import {setMenu} from "../../redux/reducers/menu.reducer";
import EmptyLayout from "../../layout/EmptyLayout";
import {Button, Col, Form, Row, Typography} from "antd";
import ReportCard from "../lib/common/ReportCard";
import CRPForm from "../lib/common/CRPForm";
import CustomInput from "../lib/common/CustomInput";
import SubmitBtn from "../lib/common/button/SubmitBtn";
import {LockOutlined} from "@ant-design/icons";
import UserService from "../../services/authService/UserService";
import {setUser} from "../../redux/reducers/user.reducer";


export default function Login() {
    const {Title} = Typography;
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    // const { isLoggedIn } = useSelector((state) => state.user);
    //
    // if (isLoggedIn) {
    //     return (
    //         <Navigate
    //             to="/"
    //             replace
    //         />
    //     );
    // }

    const onFinish = (values) => {
        console.log({values})
        return
        setLoading(true);
        UserService.signingIn(values)
            .then((response) => {
                localStorage.setItem('userId', `${response.data.id}`);
                localStorage.setItem('token', `${response.data.token}`);
                localStorage.setItem('email', `${response.data.email}`);
                localStorage.setItem('refreshToken', `${response.data.refreshToken}`);

                console.log('login data', response.data);

                setLoading(false);
                dispatch(setUser(response.data));
                dispatch(setMenu({key: '/'}));
                notifySuccess('Successfully login');
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                notifyError('Username or password invalid');
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <EmptyLayout>
            <Row
                justify="center"
                align="middle"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "100%"
                }}
            >
                <ReportCard
                    style={{
                        zIndex: 999,
                        boxShadow:
                            '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                        width : "400px"
                    }}
                >

                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Title level={2}>Login </Title>
                    </div>
                    <CRPForm
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >

                        <Form.Item
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <CustomInput placeholder={"Enter your name"}/>
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <CustomInput  placeholder={"Enter your email"}/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <CustomInput.Password  placeholder={"Enter your password"}/>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 9,
                                span: 15,
                            }}
                        >

                            <Form.Item>
                                <Button
                                    block
                                    type="primary"
                                    htmlType="submit"
                                    disabled={loading}
                                    style={{width: "100%", textAlign: 'center', margin: "2px auto 2px auto"}}
                                >
                                    <LockOutlined/>
                                    Login
                                </Button>
                            </Form.Item>

                        </Form.Item>
                    </CRPForm>
                </ReportCard>
            </Row>
        </EmptyLayout>
    );
}
