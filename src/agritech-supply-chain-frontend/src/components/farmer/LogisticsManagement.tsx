import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import './NewComponents.css'; // Import the CSS file

// Sample logistics data (you can replace this with actual data)
const logisticsData = [
  { id: 1, shipmentId: 'SH12345', status: 'In Transit', deliveryDate: '2024-11-05' },
  { id: 2, shipmentId: 'SH12346', status: 'Delivered', deliveryDate: '2024-10-30' },
  { id: 3, shipmentId: 'SH12347', status: 'Pending', deliveryDate: 'TBD' },
  { id: 4, shipmentId: 'SH12348', status: 'In Transit', deliveryDate: '2024-11-10' },
  { id: 5, shipmentId: 'SH12349', status: 'Delayed', deliveryDate: 'TBD' },
  // Add more logistics items as needed
];

const LogisticsManagement: React.FC = () => {
  return (
    <div className="logistics-management">
      <Typography variant="h4" gutterBottom>
        Logistics Management
      </Typography>
      <Typography variant="body1" gutterBottom>
        View and manage your logistics shipments and their statuses below.
      </Typography>
      <Grid container spacing={2}>
        {logisticsData.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card className="custom-card">
              <CardContent>
                <Typography variant="h6">Shipment ID: {item.shipmentId}</Typography>
                <Typography variant="body2">Status: {item.status}</Typography>
                <Typography variant="body2">Delivery Date: {item.deliveryDate}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default LogisticsManagement;
