// src/components/TopProductsDetails.tsx
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TopProductsDetails: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/'); // Navigate to a different route
      };

  return (
    <div style={{ padding: '20px' }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Top Product Details
          </Typography>
          <Typography variant="h6">Organic Tomatoes</Typography>
          <Typography variant="body2" color="text.secondary">
            Description: Fresh organic tomatoes sourced from local farms.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: $3.50 per kg
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stock: Available
          </Typography>
          <Button variant="contained" onClick={handleNavigation} style={{ marginTop: '20px', backgroundColor: '#388E3C' }}>
            Back to Products
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TopProductsDetails;
