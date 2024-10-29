import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './styles/theme';
import Layout from './components/common/Layout';
import Dashboard from './components/common/Dashboard';
import LandingScreen from './components/common/LandingScreen'; // Import LandingScreen
import FarmerDashboard from './components/farmer/FarmerDashboard';
import BuyerDashboard from './components/buyer/BuyerDashboard';
import ProductListing from './components/farmer/ProductListing';
import ProductCatalog from './components/buyer/ProductCatalog';
import TrackingSystem from './components/logistics/TrackingSystem';
import Analytics from './components/analytics/Analytics';
import LoginSignupScreen from './components/common/LoginSignupScreen';
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<LandingScreen />} />
            <Route path="/" element={<LoginSignupScreen />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
            <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
            <Route path="/farmer/products" element={<ProductListing />} />
            <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
            <Route path="/buyer/catalog" element={<ProductCatalog />} />
            <Route path="/tracking" element={<TrackingSystem />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/login" element={<LoginSignupScreen/>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
