import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import AdminRoute from "./AdminRoute";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItems from "../Pages/Dashboard/UpdateItems/UpdateItems";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/menu",
                element: <Menu></Menu>,
            },
            {
                path: "/order/:category",
                element: <Order></Order>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
        ],
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <Dashboard></Dashboard>
            </PrivateRoute>
        ),
        children: [
            {
                path: "cart",
                element: <Cart></Cart>,
            },
            {
                path: "manageUsers",
                element: (
                    <AdminRoute>
                        <ManageUser></ManageUser>
                    </AdminRoute>
                ),
            },
            {
                path: "addItems",
                element: (
                    <AdminRoute>
                        <AddItem></AddItem>
                    </AdminRoute>
                ),
            },
            {
                path: "manageItems",
                element: (
                    <AdminRoute>
                        <ManageItems></ManageItems>
                    </AdminRoute>
                ),
            },
            {
                path: "updateItems/:id",
                element: (
                    <AdminRoute>
                        <UpdateItems></UpdateItems>
                    </AdminRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/menu/${params.id}`),
            },
        ],
    },
]);
