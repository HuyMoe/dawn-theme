import classNames from 'classnames/bind';
import styles from './CartItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { createCart, updateItemCart } from '../../module';
import { CartContext } from '../../context/CartContext';

const cx = classNames.bind(styles);

function CartItem({ data }) {
    const cartContext = useContext(CartContext);
    const handleMinus = () => {
        const items = {
            item: cartContext.items.map((item) => {
                if (item?.product?._id === data?.product?._id) {
                    return { product: item?.product?._id, quantity: data.quantity - 1 };
                } else {
                    return { product: item?.product?._id, quantity: item.quantity };
                }
            }),
        };
        updateItemCart(items).then(() => cartContext.setReload(true));
    };
    const handlePlus = () => {
        const items = {
            item: cartContext.items.map((item) => {
                if (item?.product?._id === data?.product?._id) {
                    return { product: item?.product?._id, quantity: data.quantity + 1 };
                } else {
                    return { product: item?.product?._id, quantity: item.quantity };
                }
            }),
        };
        updateItemCart(items).then(() => cartContext.setReload(true));
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('product-img')}>
                <img src={data?.product?.image} />
            </div>
            <div className={cx('product-info')}>
                <h2 className={cx('price')}>{data?.product?.price}</h2>
                <h2 className={cx('title')}>{data?.product?.name}</h2>
                <span className={cx('quantity')}>{}</span>
                <div className={cx('control')}>
                    <button className={cx('btn-qty')} onClick={handleMinus}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input
                        className={cx('qty-selecter')}
                        value={data.quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button className={cx('btn-qty')} onClick={handlePlus}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <button className={cx('remove')}>Remove</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
