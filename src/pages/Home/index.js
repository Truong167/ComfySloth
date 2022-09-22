import Banner from "~/layouts/components/Banner/Banner"
import FeaturedProducts from "~/layouts/components/FeaturedProducts/FeaturedProducts"
import Introduce from "~/layouts/components/Introduce/Introduce"

function Home(){
    return (
        <main>
            <Banner/>
            <FeaturedProducts/>
            <Introduce/>
        </main>
    )
}

export default Home