import {Navigate, Outlet, useLocation} from "react-router-dom";
import {userContext} from "./AuthProvider";
import {useContext} from "react";

export function AuthMiddleware() {
    const [user] = useContext(userContext)
    const location = useLocation()
    console.log(location.pathname)
    if (user.userId === "" && location.pathname !== "/") {
        return <Navigate to="" />
    }
    return <Outlet />
}
