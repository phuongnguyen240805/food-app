import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Navbar.module.scss'
import Logo from '~/assets/images/pizzaLogo.png'

const cx = classNames.bind(styles)

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('left-side')} id={cx(openLinks ? 'open' : 'close')}>
                <Link to='/'>
                    <img src={Logo} alt="Logo" className={cx('logo')} />
                </Link>
                <div className={cx('hidden-links')}>
                    <Link to='/'>Home</Link>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>
            <div className={cx('right-side')}>
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <button
                    onClick={toggleNavbar}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </div>
    );
}

export default Navbar;