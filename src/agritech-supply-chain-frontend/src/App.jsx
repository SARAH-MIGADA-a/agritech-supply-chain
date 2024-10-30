import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './styles/theme';
import Dashboard from './components/common/Dashboard';
import LandingScreen from './components/common/LandingScreen'; // Import LandingScreen
import FarmerDashboard from './components/farmer/FarmerDashboard';
import BuyerDashboard from './components/buyer/BuyerDashboard';
import ProductListing from './components/farmer/ProductListing';
import ProductCatalog from './components/buyer/ProductCatalog';
import TrackingSystem from './components/logistics/TrackingSystem';
import Analytics from './components/analytics/Analytics';
import LoginSignupScreen from './components/common/LoginSignupScreen';
import AddNewProduct from './components/common/AddNewProduct'; // New import
import CreateNewOrder from './components/common/CreateNewOrder'; // New import
import UpdateFarmInfo from './components/common/UpdateFarmInfo'; // New import
import CustomerInsights from './components/common/CustomerInsights'; // New import
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<LandingScreen />} />
            <Route path="/login" element={<LoginSignupScreen />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
            <Route path="/farmer/products" element={<ProductListing />} />
            <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
            <Route path="/buyer/catalog" element={<ProductCatalog />} />
            <Route path="/tracking" element={<TrackingSystem />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/add-product" element={<AddNewProduct />} /> {/* New route */}
            <Route path="/create-order" element={<CreateNewOrder />} /> {/* New route */}
            <Route path="/update-farm-info" element={<UpdateFarmInfo />} /> {/* New route */}
            <Route path="/icp" element={<CustomerInsights />} /> {/* New route */}
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
