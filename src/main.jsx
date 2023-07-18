import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AppContextProvider } from './contextProvider/useAppContext';
import './index.css';
import routes from './routes/routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={routes} />
      </AppContextProvider>
  </React.StrictMode>
)
