import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, AppBar, Toolbar, IconButton, TextField, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ToggleOff from '@mui/icons-material/ToggleOff';
import ToggleOn from '@mui/icons-material/ToggleOn';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreIcon from '@mui/icons-material/Store';
import PeopleIcon from '@mui/icons-material/People';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle function for dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
  style={{
    padding: '0px',
    backgroundColor: darkMode ? '#2E7D32' : '#F1F8E9',
    color: darkMode ? '#fff' : '#000',
    backgroundImage: 'url("/assets/images/background-image.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed' // keeps the background fixed while scrolling
  }}
>

      <AppBar position="static" style={{ backgroundColor: '#388E3C' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Agritech Dashboard
          </Typography>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <ToggleOn /> : <ToggleOff />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>
        Welcome to Your Agritech Dashboard
      </Typography>

      {/* Quick Action Buttons */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <Button variant="contained" component={Link} to="/add-product" style={{ backgroundColor: '#4CAF50' }}>
          Add New Product
        </Button>
        <Button variant="contained" component={Link} to="/create-order" style={{ backgroundColor: '#4CAF50' }}>
          Create New Order
        </Button>
        <Button variant="contained" component={Link} to="/update-farm-info" style={{ backgroundColor: '#4CAF50' }}>
          Update Farm Information
        </Button>
      </div>
      {/* Search Bar */}
      <TextField 
  variant="outlined" 
  placeholder="Search..." 
  sx={{
    marginBottom: '20px',
    width: '50%',
    '& .MuiOutlinedInput-root': {
      borderRadius: '30px', // adjust this value for desired roundness
      '& fieldset': {
        borderColor: '#66BB6A', // border color
      },
      '&:hover fieldset': {
        borderColor: '#388E3C', // color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2E7D32', // color when focused
      },
    },
  }}
/>


      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Card style={{ backgroundColor: '#A5D6A7' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                User Profile
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Name: Sarah Migada
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Role: Farmer
              </Typography>
              <Button variant="contained" component={Link} to="/profile" style={{ backgroundColor: '#388E3C' }}>
                View Profile
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Weather Information */}
        <Grid item xs={12} md={6} lg={4}>
          <Card style={{ backgroundColor: '#e0f7fa' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Weather Forecast
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Local Weather: Sunny 28°C
              </Typography>
              <WbSunnyIcon style={{ fontSize: '40px', color: '#fbc02d' }} />
            </CardContent>
          </Card>
        </Grid>

        {/* Top Products */}
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Top Products
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Best Selling: Organic Tomatoes, Carrots, Avocado
              </Typography>
              <Button variant="contained" component={Link} to="/top-products-details" style={{ backgroundColor: '#388E3C' }}>
  View Product Details
</Button>

              
            </CardContent>
          </Card>
        </Grid>

        {/* Farmer Dashboard */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Farmer Dashboard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Manage your farm operations and product listings.
              </Typography>
              <Button variant="contained" component={Link} to="/farmer/dashboard" style={{ backgroundColor: '#388E3C' }}>
                Go to Farmer Dashboard
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Buyer Dashboard */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Buyer Dashboard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore products and make purchases.
              </Typography>
              <Button variant="contained" component={Link} to="/buyer/dashboard" style={{ backgroundColor: '#388E3C' }}>
                Go to Buyer Dashboard
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Product Catalog */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Product Catalog
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Browse available products with blockchain-backed history.
              </Typography>
              <Button variant="contained" component={Link} to="/buyer/catalog" style={{ backgroundColor: '#388E3C' }}>
                View Product Catalog
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Analytics */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Analytics
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sales, demand forecasting, and product metrics.
              </Typography>
              <Button variant="contained" component={Link} to="/analytics" style={{ backgroundColor: '#388E3C' }}>
                View Analytics
                <BarChartIcon style={{ marginLeft: '5px' }} />
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Order Tracking */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Tracking System
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Track your orders and deliveries with real-time updates.
              </Typography>
              <Button variant="contained" component={Link} to="/tracking" style={{ backgroundColor: '#388E3C' }}>
                Access Tracking System
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Customer Insights */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Customer Insights (ICP)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Customer analytics and tailored recommendations.
              </Typography>
              <Button variant="contained" component={Link} to="/icp" style={{ backgroundColor: '#388E3C' }}>
                View ICP
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
