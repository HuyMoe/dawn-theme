import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function SearchItem({ data }) {
    const navigate = useNavigate();
    return (
        <div className={cx('wrapper')} onClick={() => navigate(`/product/${data?._id}`)}>
            <img
                className={cx('product-img')}
                src="https://media.wired.com/photos/6495f3af2cc57777ec67f0ed/1:1/w_1800,h_1800,c_limit/bellroy-tokyo-work-bag-source-bellroy-Gear.jpg"
                alt=""
            />
            <div className={cx('product-info')}>
                <h4 className={cx('product-name')}>{!data ? null : data.name}</h4>
                <span className={cx('product-description')}>{!data ? null : data.description}</span>
            </div>
        </div>
    );
}

export default SearchItem;
