import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "./context/ThemeContext";

const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const HomeLayout = lazy(() => import("./pages/HomeLayout"));
const Loan = lazy(() => import("./pages/Loan"));
const TransactionHistory = lazy(() => import("./pages/TransactionHistory"));
const TransferFunds = lazy(() => import("./pages/TransferFunds"));
const Settings = lazy(() => import("./pages/Settings"));
const ConnectBank = lazy(() => import("./pages/ConnectBank"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
import Loading from "./components/Loading";


function App() {
  return (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="sign-in" element={<Login />} />
            <Route path="/:user" element={<HomeLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route
                path="transaction-history"
                element={<TransactionHistory />}
              />
              <Route path="transfer-funds" element={<TransferFunds />} />
              <Route path="connect-bank" element={<ConnectBank />} />
              <Route path="settings" element={<Settings />} />
              <Route path="Loan" element={<Loan />} />
            </Route>
            <Route path="sign-up" element={<SignUp />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
