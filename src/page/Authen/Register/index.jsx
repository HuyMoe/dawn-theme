import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Breadcrumb, Button, Checkbox, Form, Input } from 'antd';
import { register } from '../../../module';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Register() {
    const navigate = useNavigate();
    const onFinish = (values) => {
        register({ ...values, role: 'user' }).then(() => navigate(`/login`));
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className={cx('wrapper')}>
            <Breadcrumb
                items={[
                    {
                        title: <a href="">Home</a>,
                    },
                    {
                        title: <a href="">Login</a>,
                    },
                ]}
            />
            <div className={cx('title')}>
                <h2>Customer Register</h2>
            </div>
            <div className={cx('login-form')}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Fullname"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your fullname!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Create
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Register;
