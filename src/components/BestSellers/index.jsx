import classNames from 'classnames/bind';
import styles from './BestSellers.module.scss';
import Products from '../Products';
import { useEffect, useState } from 'react';
import { getProduct } from '../../module';
import { Pagination } from 'antd';

const cx = classNames.bind(styles);

function BestSellers() {
    const [product, setProduct] = useState([]);
    const [pagination, setPagination] = useState({});
    useEffect(() => {
        getProduct(4, pagination.page).then((res) => {
            setProduct(res.docs);
            setPagination({ limit: res.limit, page: res.page, total: res.total });
        });
    }, [pagination.page]);
    console.log(pagination);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-collection')}>
                <h2 className={cx('title')}>Best Sellers</h2>
                <h2 className={cx('all-product')}>View all product</h2>
            </div>
            <div className={cx('product-collection')}>
                <Products items={product} setCols={'4'} />
                <Pagination
                    defaultPageSize={4}
                    current={pagination.page}
                    defaultCurrent={pagination.page}
                    total={pagination.total}
                    onChange={(e) =>
                        setPagination((prev) => {
                            return { ...prev, page: e };
                        })
                    }
                />
                ;
            </div>
        </div>
    );
}

export default BestSellers;
