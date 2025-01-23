import './index.css';
import React from 'react';
import Route from './routes/root';
import Contact from './routes/contact';
import ReactDOM from 'react-dom/client';
import ErrorPage from './components/error-page/error-page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Route />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,

      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);