import { Navigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user, profile, authLoading, profileLoading, isError } = useAuth();
  const { user: routeFName } = useParams();

  if (authLoading || profileLoading) {
    return (
      <div className="text-center text-lg dark:text-white h-screen flex flex-col items-center justify-center gap-3">
        <span>Loading application...</span>
      </div>
    );
  }

  if (!user || isError || !profile) {
    return <Navigate to="/sign-in" replace />;
  }

  const expectedFName = profile.fName?.toLowerCase().trim();

  if (routeFName !== expectedFName) {
    return <Navigate to={`/${expectedFName}/dashboard`} replace />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
