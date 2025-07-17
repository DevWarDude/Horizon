import PropTypes from "prop-types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

const queryClient = new QueryClient();

export const AppProviders = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ThemeProvider>
        <Router>{children}</Router>
      </ThemeProvider>
    </AuthProvider>
  </QueryClientProvider>
);

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
