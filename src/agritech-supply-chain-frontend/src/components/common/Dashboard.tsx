// src/components/common/Dashboard.tsx
import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Your Dashboard
      </Typography>
      <Grid container spacing={3}>
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
