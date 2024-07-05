import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import CategoryItem from './CategoryItem';
import { useEffect, useState } from 'react';
import { getCategory } from '../../module';

const cx = classNames.bind(styles);

function Category() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getCategory().then((res) => setProduct(res.docs));
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-popular')}>
                <h2 className={cx('title')}>Shop by Category</h2>
                <div className={`grid grid-cols-6 gap-5`}>
                    {product.map((item, index) => {
                        return <CategoryItem key={index} data={item} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Category;
