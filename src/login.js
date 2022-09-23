import React from 'react';
import ReactDOM from 'react-dom/client';
import {Form, Input, Button, Row} from 'antd';
import 'antd/dist/antd.min.css';
import './login.css';

const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

function Login(props) {
    return (
        <div className='form-container'>
            <Form 
                name='LoginForm' 
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item 
                    label="Email" 
                    name="email" 
                rules={[{
                        required: true,
                        message: "Please enter your email",
                    }]}
                    >
                    <Input />
                </Form.Item>
                
                <Form.Item
                    label="Password" 
                    name="password" 
                    rules={[{
                        required: true,
                        message: "Please enter your password",
                    }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
