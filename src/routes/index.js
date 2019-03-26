import Home from '../page/home';
import Blog from '../page/blog';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/blog',
        exact: true,
        component: Blog
    }
];

export default routes;
