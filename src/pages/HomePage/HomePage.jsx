import classNames from "classnames/bind";
import { Link } from "react-router";

import styles from './HomePage.module.scss'

const cx = classNames.bind(styles)

function HomePage() {
    return (
        <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <h1> Pedro's Pizzeria </h1>
                    <p> PIZZA TO FIT ANY TASTE</p>
                    <Link to="/menu">
                        <button> ORDER NOW </button>
                    </Link>
                </div>
        </div>
    );
}

export default HomePage;