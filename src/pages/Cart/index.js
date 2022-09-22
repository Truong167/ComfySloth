import { useState } from "react"

import { Link } from "react-router-dom"
import classNames from "classnames/bind"
import style from './cart.module.scss'

const cx = classNames.bind(style)

function Cart() {
    const [cart, setCart] = useState(1)
    return (
        <>
            {cart ? 
            <h1>{cart}</h1> 
            :
            <div className={cx('empty')}>
                <h1>Your cart is empty</h1>
                <Link to={'/products'} className={cx('fill')}>Fill it</Link>
            </div>
            }
        </>
    )
}

export default Cart