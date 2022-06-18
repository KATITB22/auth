import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css';

export const Login = () => {
    const onFinish = () => {};

    return (
        <div className="flex justify-center items-center h-screen bg-gray-800">
            <div className="basis-3/4 md:basis-7/12 md:scale-[1.3] lg:scale-[1.3] lg:max-w-lg">
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
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input
                                className=" text-gray-900"
                                prefix={<UserOutlined />}
                                placeholder="Username"
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
            </div>
        </div>
    );
};
