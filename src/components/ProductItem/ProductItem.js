import classNames from "classnames/bind"
import style from './ProductItem.module.scss'

import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const cx = classNames.bind(style)

function ProductItem({img, title, price, link}){
    return (
        <article className={cx('wrapper')}>
            <div className={cx('container')}>
                <img src={img} alt={title}/>
                <Link to={link} className={cx('icon-search')}>
                    <FontAwesomeIcon icon={faSearch}/>
                </Link>
            </div>
            <footer>
                <h5>{title}</h5>
                <p>${price.toString().substr(0 , price.toString().length - 2) + '.' + price.toString().substr(3)}</p>
            </footer>
        </article>
    )
}

export default ProductItem