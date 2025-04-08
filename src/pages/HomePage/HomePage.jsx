import classNames from "classnames/bind";

import styles from './HomePage.module.scss'
import Button from "~/components/Button";
import { pizza } from "~/assets/images";

const cx = classNames.bind(styles)

function HomePage() {
    return (
        <div className={cx('wrapper')} style={{ backgroundImage: `url(${pizza})` }}>
            <div className={cx('header')}>
                <h1 className={cx('heading')}> Pedro's Pizzeria </h1>
                <p className={cx('sub-heading')}> PIZZA TO FIT ANY TASTE</p>
                <div className={cx('button')}>
                    <Button to="/menu" primary>Order Now</Button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;