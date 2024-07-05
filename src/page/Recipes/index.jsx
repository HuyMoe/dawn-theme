import classNames from 'classnames/bind';
import styles from './Recipes.module.scss';

const cx = classNames.bind(styles);

function Recipes() {
    return (
        <div className={cx('wrapper')}>
            <h1>Recipes</h1>
            <div className={cx('content')}>
                <div className={cx('content-item')}>
                    <div className={cx('image')}>
                        <img src="https://local-theme-light-demo.myshopify.com/cdn/shop/articles/recipe2.jpg?crop=center&height=360&v=1656518586&width=480" />
                    </div>
                    <div className={cx('text')}>
                        <h3 className={cx('title')}>Juicy Beef Sandwitch</h3>
                    </div>
                    <span className={cx('description')}>
                        The origin of the hamburger is unclear, though "hamburger steak sandwiches" have been advertised
                        in U.S. newspapers from New...
                    </span>
                </div>
                <div className={cx('content-item')}>
                    <div className={cx('image')}>
                        <img src="https://local-theme-light-demo.myshopify.com/cdn/shop/articles/recipe3.jpg?crop=center&height=360&v=1656518689&width=480" />
                    </div>
                    <div className={cx('text')}>
                        <h3 className={cx('title')}>Chicken With Salads</h3>
                    </div>
                    <span className={cx('description')}>
                        Chicken is sometimes cited as being more healthful than red meat, with lower concentrations of
                        cholesterol and saturated fat....
                    </span>
                </div>
                <div className={cx('content-item')}>
                    <div className={cx('image')}>
                        <img src="https://local-theme-light-demo.myshopify.com/cdn/shop/articles/recipe1.jpg?crop=center&height=360&v=1656517379&width=480" />
                    </div>
                    <div className={cx('text')}>
                        <h3 className={cx('title')}>Grilled Beef Burger</h3>
                    </div>
                    <span className={cx('description')}>
                        The origin of the hamburger is unclear, though "hamburger steak sandwiches" have been advertised
                        in U.S. newspapers from New...
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Recipes;
