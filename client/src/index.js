import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './Components/LoginPage/LoginPage';
import HomePage from './Components/homePage/HomePage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import Formations from './Components/homePage/Welcome';
import AboutPage from './pages/AboutPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Login",
    element: <LoginPage />,
  },
  {
    path: "Home",
    element: <HomePage />,
  },
  {
    path: "Signup",
    element: <SignUpPage />,
  },
  {
    path: "About",
    element: <AboutPage />,
  },
  {
    path: "/Formations", // Ajoutez un nouveau chemin pour la page WelcomePage
    element: <Formations />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
