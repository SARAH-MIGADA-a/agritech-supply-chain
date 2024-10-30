// src/components/buyer/BuyerDashboard.tsx

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, TextField, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import './BuyerDashboard.css'; // Import the CSS file

const BuyerDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`buyer-dashboard ${darkMode ? 'dark-mode' : ''}`}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Buyer Dashboard
          </Typography>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <TrackChangesIcon /> : <ShoppingCartIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <div className="content">
        <Typography variant="h4" gutterBottom>
          Welcome, Buyer!
        </Typography>

        {/* Search Products */}
        <TextField
          variant="outlined"
          placeholder="Search for Products..."
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
          style={{ marginBottom: '20px', width: '100%' }}
        />

        <Grid container spacing={3}>
          {/* Product Catalog */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Product Catalog
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Browse available products from farmers.
                </Typography>
                <Button variant="contained" component={Link} to="/catalog">
                  View Product Catalog
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Order History */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Order History
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Check your past purchases.
                </Typography>
                <Button variant="contained" component={Link} to="/order-history">
                  View Order History
                  <ShoppingCartIcon style={{ marginLeft: '5px' }} />
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Tracking Orders */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Order Tracking
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Track your ongoing orders.
                </Typography>
                <Button variant="contained" component={Link} to="/tracking">
                  Track Orders
                  <TrackChangesIcon style={{ marginLeft: '5px' }} />
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default BuyerDashboard;
