import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import ListAHouse from '../pages/ListAHouse';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import OwnerDashboard from '../pages/OwnerDashboard';
import OwnerHouseList from '../pages/OwnerHouseList';
import Register from '../pages/Register';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
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
    path: '/owner',
    element: <OwnerDashboard />,
    children:[
        {
            index: true,
            element: <OwnerHouseList/>,
          },
        {
            path:'/owner/list-house',
            element: <ListAHouse/>,
          },
    ]
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
