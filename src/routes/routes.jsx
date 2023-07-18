import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import Register from '../pages/Register';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
    //   {
    //     index: true,
    //     element: <Home />,
    //   },
    //   {
    //     path: '/products',
    //     element: <Products />,
    //   },
    //   {
    //     path: '/product-details/:id',
    //     element: <ProductDetails />,
    //   },
    //   {
    //     path: '/checkout',
    //     element: <PrivateRoutes><Checkout /></PrivateRoutes>,
    //   },
    ],
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/register',
    element: <Register />,
  },
//   {
//     path: '*',
//     element: <NotFound />,
//   },
]);

export default routes;