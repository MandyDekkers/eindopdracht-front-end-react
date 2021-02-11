// import { useAuthState } from "../../context/AuthContext";
// import { Redirect, Route } from "react-router-dom";
// import React from "react";
//
// function PrivateRoute( { children, ...rest }) {
//     const { isAuthenticated } = useAuthState();
//
//     return (
//         <Route {...rest} render={() => {
//             return isAuthenticated ? children : <Redirect to="/login"/>
//         }}/>
//     );
// }
//
// export default PrivateRoute;
