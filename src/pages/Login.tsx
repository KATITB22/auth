import { Form, Input, Button, Card, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css';
import { toast } from 'react-toastify';
import AuthService from '../service/auth';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import APIClient from '../utils/api-client';

export const Login = () => {
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);

    const redirect = () => {
        const redirect = searchParams.get("redirect");
        if (redirect) {
            window.location.href = redirect;
        } else {
            window.location.href = import.meta.env.VITE_LANDING_PAGE;
        }
    }

    const redirectIfHaveToken: Function = async () => {
        const token = await APIClient.checkToken(false);
        if (token) {
            redirect();
        }
    }

    useEffect(() => {
        redirectIfHaveToken();
    }, []);

    const onFinish = async (e: any) => {
        setLoading(true);
        await AuthService.login(e.username, e.password,
            (response) => {
                toast.success(`Login Successfull (${response.user.username})`);
                redirect();
                setLoading(false);
            },
            (error) => {
                toast.error(error.toString());
                setLoading(false);
            });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-800">
            <div className="basis-3/4 md:basis-7/12 md:scale-[1.3] lg:max-w-lg">
                <Spin spinning={loading} tip="Loading...">
                    <Card className="bg-gray-200 rounded-lg shadow-lg border-0">
                        <Form
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your NIM!',
                                    },
                                ]}
                            >
                                <Input
                                    className=" text-gray-900"
                                    prefix={<UserOutlined />}
                                    placeholder="NIM"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>

                            <Form.Item style={{ marginBottom: '0px' }}>
                                <div className="flex justify-center">
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        shape="round"
                                        ghost={false}
                                        size="large"
                                        className="bg-blue-500"
                                    >
                                        <span className="w-48">Sign In</span>
                                    </Button>
                                </div>
                            </Form.Item>
                        </Form>
                    </Card>
                </Spin>
            </div>
        </div>
    );
};
