import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import OverviewChart from "../components/OverviewChart";
import RecentTransactions from "../components/RecentTransactions";
import { useTransactions } from "../hooks/useTransactions";

const Dashboard = () => {
  const { theme } = useTheme();
  const { user: authUser } = useAuth();
  const { user: routeFName } = useParams();
  const navigate = useNavigate();
  const {
    profile,
    isLoading: profileLoading,
    isError: profileError,
  } = useAuth();

  const {
    data: transactions,
    isLoading,
    error,
  } = useTransactions(authUser?.id);

  useEffect(() => {
    document.title = `${profile?.fName || "User"}'s Dashboard | Horizon`;
  }, [profile?.fName]);

  useEffect(() => {
    if (authUser && profile?.fName) {
      navigate(`/${profile?.fName.toLowerCase()}/dashboard`, { replace: true });
    }
  }, [authUser, routeFName, profile?.fName, navigate]);

  if (profileLoading) return <div>Loading dashboard...</div>;
  if (profileError) return <div>Failed to load profile</div>;

  return (
    <motion.div
      className="flex flex-col gap-y-4 font-jost"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <Layout />
      <h1 className="title text-slate-700 dark:text-gray-200 text-2xl">
        Dashboard
      </h1>

      <div className="flex flex-col gap-10 md:flex-row">
        <OverviewChart theme={theme} />
        <RecentTransactions
          transactions={transactions}
          isLoading={isLoading}
          error={error}
          currency={profile?.currency}
        />
      </div>
    </motion.div>
  );
};

export default Dashboard;
