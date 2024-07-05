import classNames from 'classnames/bind';
import styles from './CategoryItem.module.scss';

const cx = classNames.bind(styles);

function CategoryItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product-img')}>
                <img className={cx('image')} src={data.image} />
            </div>
            <span className={cx('title')}>{data.name}</span>
        </div>
    );
}

export default CategoryItem;
