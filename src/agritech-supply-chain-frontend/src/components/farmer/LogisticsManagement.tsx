// LogisticsManagement.tsx
import React from 'react';
import { Typography, Card, CardContent, Button } from '@mui/material';
import './NewComponents.css'; // Import the CSS file


const LogisticsManagement: React.FC = () => {
  return (
    <div className="logistics-management">
      <Typography variant="h4" gutterBottom>
        Logistics Management
      </Typography>
      <Card className="custom-card">
        <CardContent>
          <Typography variant="body1">
            Optimize the transport and delivery of goods. Track shipments and delivery status.
          </Typography>
          <Button variant="contained" className="action-button">
            View Logistics
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LogisticsManagement;
