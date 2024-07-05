import classNames from 'classnames/bind';
import styles from './Blog.module.scss';

const cx = classNames.bind(styles);

function Blog() {
    return (
        <div className={cx('wrapper')}>
            <h1>News</h1>
            <div className={cx('content')}>
                <div className={cx('content-item')}>
                    <div className={cx('image')}>
                        <img src="https://local-theme-light-demo.myshopify.com/cdn/shop/articles/blog2.jpg?crop=center&height=630&v=1654590847&width=840" />
                    </div>
                    <div className={cx('text')}>
                        <h3 className={cx('title')}>11 Top Chef Grilling Recipes to Make This Summer</h3>
                    </div>
                    <div>
                        <span className={cx('date')}>Jun 07, 2022</span>
                    </div>
                    <span className={cx('description')}>
                        Grilling is a form of cooking that involves dry heat applied to the surface of...
                    </span>
                </div>
                <div className={cx('content-item')}>
                    <div className={cx('image')}>
                        <img src="https://local-theme-light-demo.myshopify.com/cdn/shop/articles/blog1_7f0c9c13-08c3-4d03-844f-7a07d5a10098.jpg?crop=center&height=630&v=1654586669&width=840" />
                    </div>
                    <div className={cx('text')}>
                        <h3 className={cx('title')}>10 Ideas for a Healthy High Fiber Diet</h3>
                    </div>
                    <div>
                        <span className={cx('date')}>Jun 05, 2022</span>
                    </div>
                    <span className={cx('description')}>
                        Dietary fiber or roughage is the portion of plant-derived food that cannot be completely
                        broken...
                    </span>
                </div>{' '}
                <div className={cx('content-item')}>
                    <div className={cx('image')}>
                        <img src="https://local-theme-light-demo.myshopify.com/cdn/shop/articles/blog3.jpg?crop=center&height=630&v=1654592092&width=840" />
                    </div>
                    <div className={cx('text')}>
                        <h3 className={cx('title')}>Healthy Sweets?</h3>
                    </div>
                    <div>
                        <span className={cx('date')}>Jun 01, 2022</span>
                    </div>
                    <span className={cx('description')}>
                        Dessert is a course that concludes a meal. The course consists of sweet foods, such...
                    </span>
                </div>
                <div className={cx('content-item')}>
                    <div className={cx('image')}>
                        <img src="https://local-theme-light-demo.myshopify.com/cdn/shop/articles/blog4.jpg?crop=center&height=630&v=1654593132&width=840" />
                    </div>
                    <div className={cx('text')}>
                        <h3 className={cx('title')}>Secret of Real Italian Crust</h3>
                    </div>
                    <div>
                        <span className={cx('date')}>May 17, 2022</span>
                    </div>
                    <span className={cx('description')}>
                        The bottom of the pizza, called the "crust", may vary widely according to style –...
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Blog;
