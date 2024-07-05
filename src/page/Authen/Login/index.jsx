import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Breadcrumb, Button, Form, Input } from 'antd';
import { login } from '../../../module';
import { useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();
    const [formLogin] = Form.useForm();
    const onFinish = (values) => {
        login(values)
            .then(() => navigate(`/`))
            .then(() => window.location.reload());
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
                <h2>Customer Login</h2>
            </div>
            <div className={cx('login-form')}>
                <Form form={formLogin} className="login-form" onFinish={onFinish} onFinishFailed={onFinishFailed}>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            onClick={() => {
                                formLogin.submit();
                            }}
                            className="login-form-button"
                        >
                            Log in
                        </Button>
                        <br />
                        Or <a onClick={() => navigate(`/register`)}>register now!</a>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Login;
