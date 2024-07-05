import Home from '../page/Home/Home';
import Login from '../page/Authen/Login';
import ProductPage from '../page/ProductPage';
import UploadProduct from '../page/Upload';
import Register from '../page/Authen/Register';
import ProfileUser from '../page/ProfileUser';
import AboutsUs from '../page/AboutsUs';
import Recipes from '../page/Recipes';
import Blog from '../page/Blog';
import FAQ from '../page/FAQ';
import OurStores from '../page/OurStores';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/profile', component: ProfileUser },
    { path: '/product/:id', component: ProductPage },
    { path: '/upload', component: UploadProduct },
    { path: '/aboutsus', component: AboutsUs },
    { path: '/ourstores', component: OurStores },
    { path: '/recipes', component: Recipes },
    { path: '/blog', component: Blog },
    { path: '/faq', component: FAQ },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
