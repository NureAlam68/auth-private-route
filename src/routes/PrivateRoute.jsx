import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return <span className="loading loading-dots loading-lg mt-[100px] ml-[700px]"></span>
    }

    if(user) {
        return children;
    }

    return (
        <Navigate to="/login"></Navigate>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.object
}

export default PrivateRoute;