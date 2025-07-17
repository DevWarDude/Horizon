import { useAuth } from "../hooks/useAuth";
import { Navigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useUserProfile } from "../hooks/useUserProfile";
import { PulseLoader } from "react-spinners";

function ProtectedRoute({ children }) {
  const { user, authLoading } = useAuth();
  const { user: routeFName } = useParams();
  const { data: profile, isLoading, isError } = useUserProfile(user?.id);

  if (authLoading || isLoading || !user) {
    return (
      <div className="text-center text-lg dark:text-white animate-pulse h-[100vh] p-20 flex flex-col items-center justify-center gap-3">
        <span>Loading application...</span>
        <PulseLoader size={12} color="#1D4ED8" />
      </div>
    );
  }

  // Not logged in or profile fetch failed
  if (!user || isError || !profile) {
    return <Navigate to="/sign-in" replace />;
  }

  const expectedFName = profile.fName?.toLowerCase().trim();

  if (!expectedFName) {
    return <Navigate to="/sign-in" replace />;
  }

  // Route mismatch? redirect to proper user route
  if (routeFName !== expectedFName) {
    return <Navigate to={`/${expectedFName}/dashboard`} replace />;
  }

  // ✅ All checks passed
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
