import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import './styles.scss';
import { Button, Rate } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { createCart } from '../../module';
const cx = classNames.bind(styles);

function ProductItem({ data }) {
    const navigate = useNavigate();
    const cartContext = useContext(CartContext);
    const addItem = () => {
        const items = {
            item: [{ product: data?._id, quantity: 1 }],
        };
        createCart(items)
            .then(cartContext.handleDrawerOpen)
            .then(() => cartContext.setReload(true));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product-img')}>
                <img className={cx('inner-img')} src={data.image?.[0]} />
            </div>
            <div className={cx('product-info')}>
                <strong className={cx('price')}>${data.price}</strong>
                <div className={cx('product-name')}>
                    <h2 className={cx('title')} onClick={() => navigate(`/product/${data._id}`)}>
                        {data.name}
                    </h2>
                </div>
                <div className={cx('rate-star')}>
                    <Rate disabled defaultValue={3} />
                </div>
                <p className={cx('description')}>{data.material}</p>
                <Button className="btn-buy" type="primary" size="large" onClick={addItem}>
                    Buy now
                </Button>
            </div>
        </div>
    );
}

export default ProductItem;
