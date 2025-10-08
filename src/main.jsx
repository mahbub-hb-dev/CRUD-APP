
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Provider } from 'react-redux';
import store from './app/store';

import './index.css'
import App from './App';
import bookView from './components/bookView';
import AddBooks from './components/AddBooks';
import ErrorPage from './components/ErrorPage';
import EditBooks from './components/EditBooks';

const router = createBrowserRouter([
  {
    path : "/",
    Component : App,
    children : [
      {
        index: true,
        Component: bookView
      },
      {
        path: "/bookview",
        Component: bookView
      },
      {
        path: "/addbooks",
        Component: AddBooks
      },
      {
        path: "/editbooks",
        Component: EditBooks
      },
      {
        path: "*",
        Component: ErrorPage
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
