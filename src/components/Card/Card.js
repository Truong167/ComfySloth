
import classNames from "classnames/bind"
import style from './Card.module.scss'

const cx = classNames.bind(style)

function Card({icon, title, description}){
    return (
        <article className={cx('card-item')}>
            <div className={cx('title')}>
                <span className={cx('icon')}>
                    {icon}
                </span>
                <h2>{title}</h2>
            </div>
            <p>{description}</p>
        </article>
    )
}

export default Card