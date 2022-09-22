import About from '~/pages/About';
import Home from '~/pages/Home';
import Products from '~/pages/Products'
import Cart from '~/pages/Cart';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/products',
        component: Products,
    },
    {
        path: '/cart',
        component: Cart,
    },
   
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
