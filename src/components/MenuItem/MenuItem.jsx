import React from "react";
import classNames from "classnames/bind";

import styles from './MenuItem.module.scss'

const cx = classNames.bind(styles)

function MenuItem({ image, name, price }) {
    return (
        <div className={cx('wrapper')}>
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> {name} </h1>
            <p> ${price} </p>
        </div>
    );
}

export default MenuItem;