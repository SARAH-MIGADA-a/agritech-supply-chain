import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, AppBar, Toolbar, IconButton, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // Menu icon for a responsive design
import AccountCircle from '@mui/icons-material/AccountCircle'; // Icon for user profile
import BarChartIcon from '@mui/icons-material/BarChart'; // Icon for analytics
import NotificationsIcon from '@mui/icons-material/Notifications'; // Icon for notifications
import ToggleOff from '@mui/icons-material/ToggleOff'; // Toggle off icon
import ToggleOn from '@mui/icons-material/ToggleOn'; // Toggle on icon

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };http://localhost:3000/

  return (
    <div style={{ padding: '0px', backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
      <AppBar position="static">
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
        Welcome to Your Dashboard
      </Typography>

      {/* Quick Action Buttons */}
      <div style={{ marginBottom: '20px' }}>
        <Button variant="contained" component={Link} to="/add-product" style={{ marginRight: '10px' }}>
          Add New Product
        </Button>
        <Button variant="contained" component={Link} to="/create-order" style={{ marginRight: '10px' }}>
          Create New Order
        </Button>
        <Button variant="contained" component={Link} to="/update-farm-info">
          Update Farm Information
        </Button>
      </div>

      {/* Search Bar */}
      <TextField 
        variant="outlined" 
        placeholder="Search..." 
        style={{ marginBottom: '20px', width: '100%' }} 
      />

      <Grid container spacing={3}>
        {/* User Profile Card */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                User Profile
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Name: John Doe
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Role: Farmer
              </Typography>
              <Button variant="contained" component={Link} to="/profile">
                View Profile
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Main Dashboard Cards */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Farmer Dashboard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Manage your farm operations and product listings.
              </Typography>
              <Button variant="contained" component={Link} to="/farmer/dashboard">
                Go to Farmer Dashboard
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Buyer Dashboard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore products and make purchases.
              </Typography>
              <Button variant="contained" component={Link} to="/buyer/dashboard">
                Go to Buyer Dashboard
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Product Catalog
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Browse available products from farmers.
              </Typography>
              <Button variant="contained" component={Link} to="/buyer/catalog">
                View Product Catalog
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Analytics
              </Typography>
              <Typography variant="body2" color="text.secondary">
                View sales and product performance metrics.
              </Typography>
              <Button variant="contained" component={Link} to="/analytics">
                View Analytics
                <BarChartIcon style={{ marginLeft: '5px' }} />
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Tracking System
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Track your orders and deliveries.
              </Typography>
              <Button variant="contained" component={Link} to="/tracking">
                Access Tracking System
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
