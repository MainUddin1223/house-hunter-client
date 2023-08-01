import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import EditHouse from '../pages/EditHouse';
import Home from '../pages/Home';
import ListAHouse from '../pages/ListAHouse';
import NotFound from '../pages/NotFound';
import OwnerDashboard from '../pages/OwnerDashboard/OwnerDashboard';
import RenterBookings from '../pages/RenterBookings';
import RenterDashboard from '../pages/RenterDashboard';
import HouseList from '../pages/houses/HouseList';
import Login from '../pages/login/Login';
import OwnerHouseList from '../pages/ownerHouseList/OwnerHouseList';
import HouseDetails from '../pages/propertyDetails/HouseDetails';
import Register from '../pages/register/Register';
import PrivateRoutes from './privateRoute';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/houses",
        element: <HouseList />,
      },
      {
        path: "/house/details/:id",
        element: (
          <PrivateRoutes>
            <HouseDetails />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/renter",
    element: <RenterDashboard />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoutes role="renter">
            <RenterBookings />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/owner",
    element: (
      <PrivateRoutes role="owner">
        <OwnerDashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <OwnerHouseList />,
      },
      {
        path: "/owner/list-house",
        element: <ListAHouse />,
      },
      {
        path: "/owner/house/:id",
        element: <EditHouse />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
