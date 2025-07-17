import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext"; // updated
import Loading from "../components/Loading";

export default function RedirectHome() {
  const { user, profile, authLoading, profileLoading } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (authLoading || profileLoading) return;

    if (!user || !profile?.fName) {
      navigate("/sign-in", { replace: true });
    } else {
      const currentRoute = `/${profile.fName.toLowerCase().trim()}/dashboard`;
      navigate(currentRoute, { replace: true });
    }
  }, [authLoading, profileLoading, user, profile, navigate]);

  return <Loading />;
}
