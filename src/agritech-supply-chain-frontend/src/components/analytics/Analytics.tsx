import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import BarChart from '@mui/icons-material/BarChart';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'; // Import necessary components from Chart.js
import './Analytics.css'; // Import the CSS file

// Register the components
ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  // Sample analytics data
  const analyticsData = [
    { title: 'Total Sales', value: '$5000' },
    { title: 'Orders Completed', value: '150' },
    { title: 'New Customers', value: '30' },
    { title: 'Total Profit', value: '$1200' },
    { title: 'Customer Satisfaction', value: '85%' },
    { title: 'Website Traffic', value: '5000 Visits' },
  ];

  // Sample chart data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales Over Time',
        data: [400, 450, 300, 500, 600, 700],
        fill: false,
        borderColor: '#388E3C',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="analytics-container">
      <AppBar position="static" className="analytics-header" style={{ backgroundColor: '#388E3C' }}>
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
          Sales Over Time
        </Typography>
        <Line data={data} style={{ marginTop: '20px' }} />

        <Typography variant="h5" style={{ marginTop: '40px' }}>
          Customer Satisfaction
        </Typography>
        <LinearProgress variant="determinate" value={85} style={{ marginTop: '10px' }} />
        <Typography variant="body1" style={{ textAlign: 'center' }}>
          85% Customer Satisfaction
        </Typography>

        <Typography variant="h5" style={{ marginTop: '40px' }}>
          Charts and Graphs (Placeholder for additional analytics)
        </Typography>
        <BarChart style={{ fontSize: '100px', marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
        <Typography variant="body2" className="charts-placeholder">
          (You can use chart libraries like Chart.js or Recharts here)
        </Typography>
      </div>
    </div>
  );
};

export default Analytics;
