import classNames from "classnames/bind"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Loading from "~/components/Loading"
import ProductItem from "~/components/ProductItem"
import style from './FeaturedProducts.module.scss'

const cx = classNames.bind(style)
const url = 'https://course-api.com/react-store-products'



function FeaturedProducts(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    function getProducts(n, products){
        let newArrProduct = []
        const newProduct = products.filter(item => item.featured)
        
        for(let i = 0; i < n; i++){
            newArrProduct.push(newProduct[i])
        }
        return newArrProduct
    }

    const fetchFeaturedProduct = async () => {
        const response = await fetch(url)
        const products = await response.json()

        setProducts(getProducts(3, products))
        setLoading(false)
    }

    useEffect(() => {
        fetchFeaturedProduct()
    }, [])

    return (
        <section className={cx('wrapper')}>
            {loading ? 
                <Loading/> 
            :
            <>
                <div className={cx('title')}>
                    <h1>Featured Products</h1>
                    <div className={cx('underline')}></div>
                </div>
                <div className={cx('product')}>
                    {products.map((item, index) => {
                        return (
                            <ProductItem img={item.image} title={item.name} price={item.price} key={index}/>
                        )
                    })}
                </div>
                <div className={cx('btn-product')}>
                    <Link to={'/products'} className={cx('link')}>ALL PRODUCTS</Link>
                </div>
            </>
            }
        </section>
    )
}

export default FeaturedProducts