import classNames from 'classnames/bind';
import styles from './ProfileUser.module.scss';
import { Button, Form, Input, Modal, message } from 'antd';
import { ProfileOutlined, HistoryOutlined, LogoutOutlined, EnterOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { getProfileUser, updateProfile } from '../../module';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProfileUser() {
    const navigater = useNavigate();
    const [info, setInfo] = useState();
    const [formUser] = Form.useForm();
    const [formPass] = Form.useForm();
    useEffect(() => {
        getProfileUser().then((res) => {
            console.log(res);
            formUser.setFieldsValue(res);
            return setInfo(res);
        });
    }, []);
    const finishSubmit = (values) => {
        console.log(values);
        updateProfile({ fullName: values?.fullName })
            .then((res) => {
                const _user = localStorage.getItem('user');

                const newUser = JSON.parse(_user);

                const data = { accessToken: newUser.accessToken, user: res };

                localStorage.setItem('user', JSON.stringify(data));
            })
            .then(() => window.location.reload());
    };
    const updatePass = (values) => {
        console.log(values);
        updateProfile({ password: values?.password }).then(() => message.success('password has been updated', 5000));
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        formPass.submit();
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('side-bar')}>
                <ul className={cx('list')}>
                    <li>
                        <ProfileOutlined />
                        Your Profile
                    </li>
                    <li>
                        <HistoryOutlined />
                        Order history
                    </li>
                    <li
                        onClick={() => {
                            localStorage.clear();
                            navigater('/login');
                            window.location.reload();
                        }}
                    >
                        <LogoutOutlined />
                        Log out
                    </li>
                    <li onClick={() => navigater('/')}>
                        <EnterOutlined />
                        Homepage
                    </li>
                </ul>
            </div>
            <div className={cx('info')}>
                <h2>Your Profile</h2>
                <Form form={formUser} onFinish={finishSubmit}>
                    <Form.Item label="Name" name={'fullName'}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="User name" name={'username'}>
                        <span>{info?.username}</span>
                    </Form.Item>
                    <Form.Item label="Password">
                        <span>•••••••••</span>
                        <Button type="text" onClick={showModal}>
                            Change password
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>
                <Modal title="Update password" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Form form={formPass} onFinish={updatePass}>
                        <span>New password</span>
                        <Form.Item
                            name={'password'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <span>Confirm password</span>
                        <Form.Item
                            name={'confirm password'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </div>
    );
}

export default ProfileUser;
