import React from "react";

export interface Route {
  key: string; // must be unique for each route
  path: string;
  title?: string;
  component: React.JSX.Element;
}

// auth
const Login = React.lazy(() => import("pages/auth/login"));

// home
const Home = React.lazy(() => import("pages/home"));

// Admin
const AdminDashboard = React.lazy(() => import("pages/admin/dashboard"));

/** PRIVATE ROUTES */
export const privateRoutes: Array<Route> = [
  {
    key: "admin_route",
    path: "/dashboard",
    title: "Admin dashboard",
    component: <AdminDashboard />,
  },
];

/** PUBLIC ROUTES */
export const publicRoutes: Array<Route> = [
  { key: "login_route", path: "/login", title: "Login", component: <Login /> },
 
  {
    key: "home_route",
    path: "/",
    title: "Home",
    component: <Home />,
  },
];
