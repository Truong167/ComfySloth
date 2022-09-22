import { Link } from "react-router-dom"


import classNames from "classnames/bind"
import style from './Banner.module.scss'


const cx = classNames.bind(style)

function Banner(){
    return (
        <section className={cx('wrapper')}>
            <div className={cx('inner')}>
                <article className={cx('content')}>
                    <h1>Design Your<br/>Comfort Zone</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                    <Link to={'/products'} className={cx('btn-shop')}>SHOP NOW</Link>
                </article>
                <article className={cx('img-content')}>
                    <img className={cx('main-img')} src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg" alt=""></img>
                    <img className={cx('sub-img')} src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.78991864.jpeg" alt=""></img>
                </article>
            </div>
        </section>
    )
}

export default Banner