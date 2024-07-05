import classNames from 'classnames/bind';
import styles from './ProductPage.module.scss';
import './styles.scss';
import { Button, Rate } from 'antd';
import ProductVariant from '../../components/ProductVariant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { createCart, getDetails } from '../../module';
import { useParams } from 'react-router-dom';
import BestSellers from '../../components/BestSellers';

const cx = classNames.bind(styles);

function ProductPage() {
    const param = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [image, setImage] = useState();
    const cartContext = useContext(CartContext);

    useEffect(() => {
        getDetails(param.id).then((res) => {
            setImage(res?.image[0]);
            return setProduct(res);
        });
    }, [param.id]);
    const handleMinus = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    const handlePlus = () => {
        setQuantity(quantity + 1);
    };
    const addItem = () => {
        const items = {
            item: [{ product: product?._id, quantity: quantity }],
        };
        createCart(items)
            .then(cartContext.handleDrawerOpen)
            .then(() => cartContext.setReload(true));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product-content')}>
                <div className={cx('product-img')}>
                    <img className={cx('img-media')} src={image} />
                    <div className={cx('img-control')}>
                        {product?.image?.map((url, index) => {
                            return (
                                <img
                                    className={cx('img-item')}
                                    key={index}
                                    src={url}
                                    onClick={() => setImage(product?.image?.[index])}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className={cx('product-info')}>
                    <h1 className={cx('title')}>{product.name}</h1>
                    <Rate />
                    <p className={cx('sub-title')}>{product.material}</p>
                    <span className={cx('description')}>{product.description}</span>
                    <p className={cx('size')}>Size</p>
                    <ProductVariant />
                    <span className={cx('price')}>${product.price}</span>
                    <div className={cx('control')}>
                        <div className={cx('quantity')}>
                            <Button
                                className="btn-quantity"
                                shape="circle"
                                icon={<FontAwesomeIcon icon={faMinus} />}
                                onClick={handleMinus}
                            ></Button>
                            <input value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                            <Button
                                className="btn-quantity"
                                shape="circle"
                                icon={<FontAwesomeIcon icon={faPlus} />}
                                onClick={handlePlus}
                            ></Button>
                        </div>
                        <Button className="btn-add" size="large" onClick={addItem}>
                            Add to cart
                        </Button>
                    </div>
                </div>
            </div>
            <BestSellers />
        </div>
    );
}

export default ProductPage;
