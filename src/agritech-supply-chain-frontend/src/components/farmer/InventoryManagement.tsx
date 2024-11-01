import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import './NewComponents.css'; // Import the CSS file

// Sample inventory data (you can replace this with actual data)
const inventoryData = [
  { id: 1, productName: 'Product A', quantity: 50, status: 'In Stock' },
  { id: 2, productName: 'Product B', quantity: 20, status: 'Low Stock' },
  { id: 3, productName: 'Product C', quantity: 0, status: 'Out of Stock' },
  { id: 4, productName: 'Product D', quantity: 150, status: 'In Stock' },
  { id: 5, productName: 'Product E', quantity: 30, status: 'Low Stock' },
  { id: 6, productName: 'Product F', quantity: 75, status: 'In Stock' },
  // Add more inventory items as needed
];

const InventoryManagement: React.FC = () => {
  return (
    <div className="inventory-management">
      <Typography variant="h4" gutterBottom>
        Inventory Management
      </Typography>
      <Typography variant="body1" gutterBottom>
        View and manage your inventory items and their stock levels below.
      </Typography>
      <Grid container spacing={2}>
        {inventoryData.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card className="custom-card">
              <CardContent>
                <Typography variant="h6">{item.productName}</Typography>
                <Typography variant="body2">Quantity: {item.quantity}</Typography>
                <Typography variant="body2">Status: {item.status}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default InventoryManagement;
