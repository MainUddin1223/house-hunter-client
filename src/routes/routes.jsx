import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import EditHouse from '../pages/EditHouse';
import Home from '../pages/Home';
import HouseDetails from '../pages/HouseDetails';
import ListAHouse from '../pages/ListAHouse';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import OwnerDashboard from '../pages/OwnerDashboard';
import OwnerHouseList from '../pages/OwnerHouseList';
import Register from '../pages/Register';
import RenterBookings from '../pages/RenterBookings';
import RenterDashboard from '../pages/RenterDashboard';
import PrivateRoutes from './privateRoute';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: '/house/details/:id',
        element: <PrivateRoutes><HouseDetails /></PrivateRoutes>,
      },
    ],
  },
  {
    path: '/renter',
    element: <RenterDashboard />,
    children:[
        {
            index: true,
            element: <PrivateRoutes role="renter"><RenterBookings/></PrivateRoutes>,
          },
    ]
  },
  {
    path: '/owner',
    element: <PrivateRoutes role="owner"><OwnerDashboard /></PrivateRoutes>,
    children:[
        {
            index: true,
            element: <OwnerHouseList/>,
          },
        {
            path:'/owner/list-house',
            element: <ListAHouse/>,
          },
        {
            path:'/owner/house/:id',
            element: <EditHouse/>,
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
