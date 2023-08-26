import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  createBrowserRouter, 
  RouterProvider
} from "react-router-dom";

import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import Home from '../src/pages/Home';
import Single from '../src/pages/Single';
import Write from '../src/pages/Write';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: '/post/:id',
    element: <Single/>
  },
  {
    path: "/write",
    element: <Write/>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
