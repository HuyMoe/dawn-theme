import classNames from 'classnames/bind';
import styles from './AboutsUs.module.scss';
import './styles.scss';
import { Button } from 'antd';

const cx = classNames.bind(styles);

function AboutsUs() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>About Us</h1>
            <div className={cx('description')}>
                <h3>
                    Many agribusinesses and food processors source raw materials from smallholder farmers. This is
                    particularly true in certain sectors, such as coffee, cocoa and sugar.
                </h3>
                <p>
                    Over the past 20 years there has been a shift towards more traceable supply chains. Rather than
                    purchasing crops that have passed through several layers of collectors, firms are now sourcing
                    directly from farmers or trusted aggregators. The drivers for this change include concerns about
                    food safety, child labor and environmental sustainability as well as a desire to increase
                    productivity.
                </p>
                <p>
                    With the increasing globalization and easier access to different kinds of alternative products in
                    today's markets, the importance of product design to generating demand is more significant than
                    ever. In addition, as supply, and therefore competition, among companies for the limited market
                    demand increases and as pricing and other marketing elements become less distinguishing factors,
                    product design likewise plays a different role by providing attractive features to generate demand.
                    In this context, demand generation is used to define how attractive a product design is in terms of
                    creating demand. In other words, it is the ability of a product's design to generate demand by
                    satisfying customer expectations.
                </p>
            </div>
            <div className={cx('content')}>
                <div className={cx('text')}>
                    <h2>Local Resources</h2>
                    <p>
                        We aim to connect food producers and consumers in the same geographic region, to develop more
                        self-reliant and resilient food networks; improve local economies; or to affect the health,
                        environment, community, or society of a particular place.
                    </p>
                    <Button className="btn-learnmore-abouts">Learn more</Button>
                </div>
                <div className={cx('image')}>
                    <img src="https://local-theme-light-demo.myshopify.com/cdn/shop/files/about_us_1.jpg?v=1655103293&width=840" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('image')}>
                    <img src="https://local-theme-light-demo.myshopify.com/cdn/shop/files/about_us_2.jpg?v=1655103335&width=840" />
                </div>
                <div className={cx('text')}>
                    <h2>Sustainable</h2>
                    <p>
                        Societal goal with three dimensions: the environmental, economic and social dimension. This
                        concept can be used to guide decisions at the global, national and at the individual consumer
                        level. A related concept is that of sustainable development. Both terms are often used
                        synonymously.
                    </p>
                    <Button className="btn-learnmore-abouts">Learn more</Button>
                </div>
            </div>
        </div>
    );
}

export default AboutsUs;
