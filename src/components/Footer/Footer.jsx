import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('wrapper')}>
                <div className={cx('footer-content')}>
                    <h2 className={cx('name-content')}>Quick links</h2>
                    <ul className={cx('list-content')}>
                        <li className={cx('content-item')}>
                            <a>Bags</a>
                        </li>
                        <li className={cx('content-item')}>
                            <a>Shoes</a>
                        </li>
                        <li className={cx('content-item')}>
                            <a>Lookbook</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('footer-content')}>
                    <h2 className={cx('name-content')}>Info</h2>
                    <ul className={cx('list-content')}>
                        <li className={cx('content-item')}>
                            <a>About</a>
                        </li>
                        <li className={cx('content-item')}>
                            <a>Contact us</a>
                        </li>
                        <li className={cx('content-item')}>
                            <a>Shipping policy</a>
                        </li>
                        <li className={cx('content-item')}>
                            <a>Blog</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('footer-content')}>
                    <h2 className={cx('name-content')}>Our mission</h2>
                    <p>Quality materials, good designs, craftsmanship and sustainability.</p>
                    <div className={cx('footer-email')}>
                        <h2 className={cx('name-content')}>Subscribe to our emails</h2>
                        <div className={cx('control')}>
                            <input className={cx('email')} placeholder="Your Email..." />
                            <button className={cx('btn-email')}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
