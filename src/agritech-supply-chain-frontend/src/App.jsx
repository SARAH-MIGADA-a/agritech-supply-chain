import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './styles/theme';
import Dashboard from './components/common/Dashboard';
import LandingScreen from './components/common/LandingScreen'; 
import FarmerDashboard from './components/farmer/FarmerDashboard';
import BuyerDashboard from './components/buyer/BuyerDashboard';
import ProductListing from './components/farmer/ProductListing';
import ProductCatalog from './components/buyer/ProductCatalog';
import TrackingSystem from './components/logistics/TrackingSystem';
import Analytics from './components/analytics/Analytics';
import LoginSignupScreen from './components/common/LoginSignupScreen';
import AddNewProduct from './components/common/AddNewProduct'; 
import CreateNewOrder from './components/common/CreateNewOrder'; 
import UpdateFarmInfo from './components/common/UpdateFarmInfo'; 
import CustomerInsights from './components/common/CustomerInsights'; 
import InventoryManagement from './components/farmer/InventoryManagement'; // New import
import LogisticsManagement from './components/farmer/LogisticsManagement'; // New import
import MarketTrends from './components/farmer/MarketTrends'; // New import
import { AuthProvider } from './contexts/AuthContext'; 
import TopProductsDetails from './components/common/TopProductsDetails'; // Import TopProductsDetails
import ViewProfile from './components/common/ViewProfile'; 
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
            <Route path="/add-product" element={<AddNewProduct />} />
            <Route path="/create-order" element={<CreateNewOrder />} />
            <Route path="/update-farm-info" element={<UpdateFarmInfo />} />
            <Route path="/icp" element={<CustomerInsights />} />
            {/* New Routes for the components */}
            <Route path="/inventory-management" element={<InventoryManagement />} />
            <Route path="/logistics-management" element={<LogisticsManagement />} />
            <Route path="/market-trends" element={<MarketTrends />} />
            <Route path="/top-products-details" element={<TopProductsDetails />} /> {/* New Route for Top Products Details */}
            <Route path="/profile" element={<ViewProfile />} /> {/* New Route for User Profile */}
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
