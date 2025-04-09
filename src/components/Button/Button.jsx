import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router';

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    children,
    disabled,
    // button styles
    primary,
    medium,
    className,
    onClick,
    ...passProps
}) {

    // style scss
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        medium,
    })

    const props = {
        onClick,
        ...passProps
    }

     // remove event listener when disabled
     if (disabled) {
        // delete props.onClick
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    // button logic
    let Comp = 'button'

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    return (
            <Comp className={classes} {...props}>
                <span className={cx('title')}>{children}</span>
            </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    disabled: PropTypes.bool,
    primary: PropTypes.bool,
    medium: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;