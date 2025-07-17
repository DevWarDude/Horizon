// src/pages/RedirectHome.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useUserProfile } from "../hooks/useUserProfile";
import Loading from "../components/Loading";

export default function RedirectHome() {
  const { user, authLoading } = useAuth();
  const { data: profile, isLoading: profileLoading } = useUserProfile(user?.id);
  const navigate = useNavigate();

  useEffect(() => {
    if (authLoading || profileLoading) return;

    if (!user) {
      navigate("/sign-in", { replace: true });
    } else if (profile?.fName) {
      const fName = profile.fName.toLowerCase().trim();
      navigate(`/${fName}/dashboard`, { replace: true });
    }
  }, [authLoading, profileLoading, user, profile, navigate]);

  return <Loading />;
}
