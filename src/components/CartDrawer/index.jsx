import classNames from 'classnames/bind';
import styles from './CartDrawer.module.scss';
import { Drawer } from 'antd';
import CartItem from '../CartItem';
import './styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const cx = classNames.bind(styles);

function CartDrawer({ open, onClose }) {
    const { items } = useContext(CartContext);
    console.log(items);
    return (
        <Drawer className="cart-drawer" title="Shopping Cart" onClose={onClose} open={open}>
            {items?.map((data, index) => {
                return <CartItem key={index} data={data} />;
            })}
            <div className={cx('total')}>
                <h2 className={cx('title')}>Total</h2>
                <strong className={cx('total-price')}>$0.09</strong>
                <p className={cx('tax')}>Tax included and shipping calculated at checkout</p>
                <button className={cx('checkout-btn')}>Check Out</button>
            </div>
        </Drawer>
    );
}

export default CartDrawer;
