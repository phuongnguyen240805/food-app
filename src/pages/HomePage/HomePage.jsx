import classNames from "classnames/bind";
import { Link } from "react-router";

import styles from './HomePage.module.scss'

const cx = classNames.bind(styles)

function HomePage() {
    return (
        <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <h1 className={cx('heading')}> Pedro's Pizzeria </h1>
                    <p className={cx('sub-heading')}> PIZZA TO FIT ANY TASTE</p>
                    <Link to="/menu">
                        <button> ORDER NOW </button>
                    </Link>
                </div>
        </div>
    );
}

export default HomePage;