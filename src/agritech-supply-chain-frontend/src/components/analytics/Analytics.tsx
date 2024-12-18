import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
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
} from 'chart.js';
import './Analytics.css';

// Register ChartJS components
ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Define LogisticsStatus type
type LogisticsStatus = 'pending' | 'inTransit' | 'delivered' | 'cancelled';

// Define Logistics item interface
interface LogisticsItem {
  id: number;
  shipmentId: string;
  status: LogisticsStatus;
  deliveryDate: string;
  origin?: string;
  destination?: string;
  estimatedTime?: string;
}

// Sample logistics data
const logisticsData: LogisticsItem[] = [
  { 
    id: 1, 
    shipmentId: 'SH12345', 
    status: 'inTransit', 
    deliveryDate: '2024-11-05',
    origin: 'Warehouse A',
    destination: 'Store B',
    estimatedTime: '2 days'
  },
  { 
    id: 2, 
    shipmentId: 'SH12346', 
    status: 'delivered', 
    deliveryDate: '2024-10-30',
    origin: 'Warehouse B',
    destination: 'Store C',
    estimatedTime: 'Delivered'
  },
  { 
    id: 3, 
    shipmentId: 'SH12347', 
    status: 'pending', 
    deliveryDate: 'TBD',
    origin: 'Warehouse A',
    destination: 'Store D',
    estimatedTime: 'Pending'
  },
  { 
    id: 4, 
    shipmentId: 'SH12348', 
    status: 'inTransit', 
    deliveryDate: '2024-11-10',
    origin: 'Warehouse C',
    destination: 'Store A',
    estimatedTime: '3 days'
  },
  { 
    id: 5, 
    shipmentId: 'SH12349', 
    status: 'cancelled', 
    deliveryDate: 'TBD',
    origin: 'Warehouse B',
    destination: 'Store E',
    estimatedTime: 'Cancelled'
  },
];

const getStatusColor = (status: LogisticsStatus): string => {
  const colors = {
    pending: '#ffa726',
    inTransit: '#29b6f6',
    delivered: '#66bb6a',
    cancelled: '#ef5350'
  };
  return colors[status];
};

const LogisticsManagement: React.FC = () => {
  // Sample chart data for shipment trends
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Shipments',
        data: [12, 19, 15, 17, 14, 13, 15],
        fill: false,
        borderColor: '#388E3C',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="logistics-management">
      <AppBar position="static" style={{ backgroundColor: '#388E3C', marginBottom: '20px' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Logistics Management
          </Typography>
          <IconButton color="inherit">
            <LocalShippingIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Shipment Overview
        </Typography>

        <Grid container spacing={3}>
          {logisticsData.map(item => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card className="custom-card" style={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Shipment ID: {item.shipmentId}
                  </Typography>
                  <Chip 
                    label={item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    style={{ 
                      backgroundColor: getStatusColor(item.status),
                      color: 'white',
                      marginBottom: '10px'
                    }}
                  />
                  <Typography variant="body2" gutterBottom>
                    From: {item.origin}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    To: {item.destination}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Delivery Date: {item.deliveryDate}
                  </Typography>
                  <Typography variant="body2">
                    Est. Time: {item.estimatedTime}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5" style={{ marginTop: '30px', marginBottom: '20px' }}>
          Shipment Trends
        </Typography>
        <Card style={{ padding: '20px' }}>
          <Line data={chartData} />
        </Card>
      </div>
    </div>
  );
};

export default LogisticsManagement;