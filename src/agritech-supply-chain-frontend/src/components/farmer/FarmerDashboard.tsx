// FarmerDashboard.js
import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import UpdateIcon from '@mui/icons-material/Update';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import './FarmerDashboard.css'; // Import the CSS file

const FarmerDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`dashboard-container ${darkMode ? 'dark-mode' : ''}`} style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
      <AppBar position="static" className="dashboard-header">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="dashboard-title">
            Farmer Dashboard
          </Typography>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <BarChartIcon /> : <TrackChangesIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <div className="dashboard-content">
        <Typography variant="h4" className="welcome-title" gutterBottom>
          Welcome, Farmer!
        </Typography>

        {/* Product Management */}
        <div className="button-group">
          <Button variant="contained" component={Link} to="/add-product" startIcon={<AddCircleOutlineIcon />}>
            Add New Product
          </Button>
          <Button variant="contained" component={Link} to="/update-farm-info" startIcon={<UpdateIcon />} style={{ marginLeft: '10px' }}>
            Update Farm Information
          </Button>
        </div>

        <Grid container spacing={3} style={{ flexGrow: 1 }}>
          {/* Order Tracking */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card">
              <CardContent>
                <Typography variant="h5" component="div">
                  Order Tracking
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Monitor and manage your current orders.
                </Typography>
                <Button variant="contained" component={Link} to="/order-tracking">
                  Go to Order Tracking
                  <TrackChangesIcon style={{ marginLeft: '5px' }} />
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Farm Analytics */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card">
              <CardContent>
                <Typography variant="h5" component="div">
                  Farm Analytics
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  View data on sales and product performance.
                </Typography>
                <Button variant="contained" component={Link} to="/analytics">
                  View Analytics
                  <BarChartIcon style={{ marginLeft: '5px' }} />
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FarmerDashboard;
