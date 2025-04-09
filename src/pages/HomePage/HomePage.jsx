import classNames from "classnames/bind";

import styles from './HomePage.module.scss'
import Button from "~/components/Button";
import images from "~/assets/images";

const cx = classNames.bind(styles)

function HomePage() {
    return (
        <div className={cx('wrapper')} style={{ backgroundImage: `url(${images.pizza})` }}>
            <div className={cx('header')}>
                <h1 className={cx('heading')}> Pedro's Pizzeria </h1>
                <p className={cx('sub-heading')}> PIZZA TO FIT ANY TASTE</p>
            </div>
            <Button className={cx('btn')} to="/menu" primary>Order Now</Button>
        </div>
    );
}

export default HomePage;