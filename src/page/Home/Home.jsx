import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import SlideShow from '../../components/SlideShow';
import { Button } from 'antd';
import BestSellers from '../../components/BestSellers';
import Category from '../../components/Category';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <SlideShow />
            <BestSellers />
            <div className={cx('banner')}>
                <div className={cx('banner-img')}>
                    <img src="https://local-theme-light-demo.myshopify.com/cdn/shop/files/recipes_150921b8-28c7-49f5-be74-c34ee80d63cb.jpg?v=1655131846&width=1540" />
                </div>
                <div className={cx('content-banner')}>
                    <h2>Delicious Recipes</h2>
                    <Button size="large">Explore All</Button>
                </div>
            </div>
            <Category />
            <div className={cx('banner-2')}>
                <div className={cx('banner-img')}>
                    <img src="https://local-theme-light-demo.myshopify.com/cdn/shop/files/rich_text_kitchen_df43f2b8-9b5f-4aee-b7d9-56b5f01fa62e.jpg?v=1655969043&width=840" />
                </div>
                <div className={cx('content-banner')}>
                    <h2>Delicious Recipes</h2>
                    <Button size="large">Explore All</Button>
                </div>
            </div>
        </div>
    );
}

export default Home;
