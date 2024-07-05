import classNames from 'classnames/bind';
import styles from './SlideShow.module.scss';
import { Carousel } from 'antd';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SlideShow() {
    const carouselRef = useRef();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('control')}>
                <button className={cx('prev-btn')} onClick={() => carouselRef.current.prev()}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className={cx('next-btn')} onClick={() => carouselRef.current.next()}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <Carousel ref={carouselRef}>
                <div className={cx('slide-item')}>
                    <img
                        className={cx('slide-img')}
                        src="https://local-theme-light-demo.myshopify.com/cdn/shop/files/HERO_main_1_bb5a1d51-e731-4132-8c2d-24f909f05736.jpg?v=1655970492&width=1280"
                    />
                </div>
                <div className={cx('slide-item')}>
                    <img
                        className={cx('slide-img')}
                        src="https://local-theme-light-demo.myshopify.com/cdn/shop/files/HERO_main_2_6e4d8f5b-69d4-41fa-9abd-234c6dfa6756.jpg?v=1655970512&width=1280"
                    />
                </div>
            </Carousel>
        </div>
    );
}

export default SlideShow;
