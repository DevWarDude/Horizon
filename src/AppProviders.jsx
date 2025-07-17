import PropTypes from "prop-types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient();

export const AppProviders = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <UserProvider>
        <Router>{children}</Router>
      </UserProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
