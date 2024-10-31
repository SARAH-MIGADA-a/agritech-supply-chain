// InventoryManagement.tsx
import React from 'react';
import { Typography, Card, CardContent, Button } from '@mui/material';
import './NewComponents.css'; // Import the CSS file


const InventoryManagement: React.FC = () => {
  return (
    <div className="inventory-management">
      <Typography variant="h4" gutterBottom>
        Inventory Management
      </Typography>
      <Card className="custom-card">
        <CardContent>
          <Typography variant="body1">
            Manage your inventory levels, view stock status, and update product quantities.
          </Typography>
          <Button variant="contained" className="action-button">
            View Inventory
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default InventoryManagement;
