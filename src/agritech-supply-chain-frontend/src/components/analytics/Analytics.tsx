import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Grid, Card, CardContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import BarChart from '@mui/icons-material/BarChart';
import './Analytics.css'; // Import the CSS file

const Analytics = () => {
  // Sample analytics data
  const analyticsData = [
    { title: 'Total Sales', value: '$5000' },
    { title: 'Orders Completed', value: '150' },
    { title: 'New Customers', value: '30' },
    // Add more analytics metrics as needed
  ];

  return (
    <div className="analytics-container">
      <AppBar position="static" className="analytics-header" style={{ backgroundColor: '#388E3C'}}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="analytics-title">
            Analytics Dashboard
          </Typography>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div className="analytics-content">
        <Typography variant="h4" gutterBottom>
          Analytics Overview
        </Typography>

        <Grid container spacing={3}>
          {analyticsData.map((data, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="analytics-card">
                <CardContent>
                  <Typography variant="h5" className="analytics-metric-title">
                    {data.title}
                  </Typography>
                  <Typography variant="h6" className="analytics-metric-value">
                    {data.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5" style={{ marginTop: '20px' }}>
          Charts and Graphs (Placeholder for actual charts)
        </Typography>
        {/* Placeholder for Chart Component */}
        <BarChart style={{ fontSize: '100px', marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
        <Typography variant="body2" className="charts-placeholder">
          (You can use chart libraries like Chart.js or Recharts here)
        </Typography>
      </div>
    </div>
  );
};

export default Analytics;
