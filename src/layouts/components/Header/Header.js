import classNames from "classnames/bind"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss'
import { faCartShopping, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function Header(){

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={'/'}>
                    <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg" alt=""></img>
                </Link>
                <div className={cx('menu')}>
                    <Link to={'/'} className={cx('menu-item')}>Home</Link>
                    <Link to={'/about'} className={cx('menu-item')}>About</Link>
                    <Link to={'/products'} className={cx('menu-item')}>Products</Link>
                </div>
                <div className={cx('actions')}>
                    <Link to={'/cart'} className={cx('action-item')}>Cart
                        <FontAwesomeIcon className={cx('cart')} icon={faCartShopping}></FontAwesomeIcon>
                        <span className={cx('cart-value')}>0</span>
                    </Link>
                    <Link to={'/'} className={cx('action-item')}>Login
                        <FontAwesomeIcon className={cx('user')} icon={faUserPlus}/>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header