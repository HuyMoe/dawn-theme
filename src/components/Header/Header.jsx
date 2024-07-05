import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { LogoutOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';
import CartDrawer from '../CartDrawer';
import Search from './Search';
import DropDown from '../DropDown';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import useProfileData from '../../hook/useProfileData';

const cx = classNames.bind(styles);

function Header() {
    const navigater = useNavigate();
    const cartContext = useContext(CartContext);
    const profile = useProfileData();
    const itemsUser = [
        {
            label: (
                <Button type="text" icon={<UserOutlined />} onClick={() => navigater('/profile')}>
                    Profile
                </Button>
            ),
            key: '0',
        },
        {
            label: (
                <Button
                    type="text"
                    icon={<LogoutOutlined />}
                    onClick={() => {
                        localStorage.clear();
                        window.location.reload();
                    }}
                >
                    Log Out
                </Button>
            ),
            key: '1',
        },
    ];
    const itemsAdmin = [
        {
            label: (
                <Button type="text" icon={<UploadOutlined />} onClick={() => navigater(`/upload`)}>
                    Upload Product
                </Button>
            ),
            key: '0',
        },
        {
            label: (
                <Button
                    type="text"
                    icon={<LogoutOutlined />}
                    onClick={() => {
                        localStorage.clear();
                        window.location.reload();
                    }}
                >
                    Log Out
                </Button>
            ),
            key: '1',
        },
    ];

    return (
        <header className={cx('header')}>
            <div className={cx('wrapper')}>
                <img
                    onClick={() => navigater('/')}
                    className={cx('logo')}
                    src="https://local-theme-light-demo.myshopify.com/cdn/shop/files/LOGO_new.png?v=1655818343"
                />
                <Search />
                <div className={cx('actions')}>
                    {profile === null ? (
                        <>
                            <Button
                                className="login-btn"
                                icon={<FontAwesomeIcon icon={faUser} />}
                                onClick={() => navigater('/login')}
                            >
                                Login
                            </Button>
                            <Button
                                className="cart-btn"
                                onClick={cartContext.handleDrawerOpen}
                                icon={<FontAwesomeIcon icon={faCartPlus} />}
                            >
                                Price
                            </Button>
                        </>
                    ) : null}

                    {profile?.user?.role === 'admin' ? (
                        <DropDown items={itemsAdmin}>
                            <Button className="login-btn" icon={<FontAwesomeIcon icon={faUser} />}>
                                {profile?.user?.fullName}
                            </Button>
                        </DropDown>
                    ) : null}
                    {profile?.user?.role === 'user' ? (
                        <>
                            <DropDown items={itemsUser}>
                                <Button className="login-btn" icon={<FontAwesomeIcon icon={faUser} />}>
                                    {profile?.user?.fullName}
                                </Button>
                            </DropDown>
                            <Button
                                className="cart-btn"
                                onClick={cartContext.handleDrawerOpen}
                                icon={<FontAwesomeIcon icon={faCartPlus} />}
                            >
                                Price
                            </Button>
                        </>
                    ) : null}
                </div>
            </div>
            <div className={cx('header-menu')}>
                <div className={cx('menu-list')}>
                    <h2 className={cx('menu-item')} onClick={() => navigater('/aboutsus')}>
                        Abouts us
                    </h2>
                    <h2 className={cx('menu-item')} onClick={() => navigater('/ourstores')}>
                        Our stores
                    </h2>
                    <h2 className={cx('menu-item')} onClick={() => navigater('/recipes')}>
                        Recipes
                    </h2>
                    <h2 className={cx('menu-item')} onClick={() => navigater('/blog')}>
                        Blog
                    </h2>
                    <h2 className={cx('menu-item')} onClick={() => navigater('/faq')}>
                        FAQ
                    </h2>
                </div>
            </div>
            <CartDrawer onClose={cartContext.handleDrawerClose} open={cartContext.openCart} />
        </header>
    );
}

export default Header;
