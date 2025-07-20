import { lazy, Suspense } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router";
import { ToastContainer } from "react-toastify";
import { AnimatePresence } from "framer-motion";

import "react-toastify/dist/ReactToastify.css";

// Components
import Loading from "./components/Loading";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

// Contexts & Hooks
import { useTheme } from "./context/ThemeContext";
import { usePreloadExchangeRate } from "./hooks/usePreloadExchangeRate";
import { useNetworkStatus } from "./hooks/useNetworkStatus";
import { useAuth } from "./context/AuthContext";

// Pages (Lazy-loaded)

const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const RedirectHome = lazy(() => import("./pages/RedirectHome"));
const HomeLayout = lazy(() => import("./components/HomeLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Loan = lazy(() => import("./pages/Loan"));
const TransactionHistory = lazy(() => import("./pages/TransactionHistory"));
const Settings = lazy(() => import("./pages/Settings"));
const ConnectBank = lazy(() => import("./pages/ConnectBank"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const { theme } = useTheme();
  const { authLoading, user } = useAuth();
  const location = useLocation();

  usePreloadExchangeRate();
  useNetworkStatus();

  if (authLoading) return <Loading />;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes location={location} key={user?.id || "no-user"}>
            <Route path="/" element={<RedirectHome />} />
            <Route path="sign-in" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />

            <Route
              path="/:user"
              element={
                <ProtectedRoute>
                  <HomeLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route
                path="transaction-history"
                element={<TransactionHistory />}
              />
              <Route path="connect-bank" element={<ConnectBank />} />
              <Route path="settings" element={<Settings />} />
              <Route path="loan" element={<Loan />} />
              <Route path="not-found" element={<NotFound />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>

      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss={false}
        gutter={20}
        theme={theme}
        toastClassName={() =>
          theme === "dark"
            ? "bg-slate-800 text-slate-100 rounded-xl px-5 py-4 shadow-lg border border-slate-700 flex items-center"
            : "bg-white text-slate-800 rounded-xl px-5 py-4 shadow-md border border-gray-200 flex items-center"
        }
      />
    </>
  );
}

export default App;
