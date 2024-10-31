// MarketTrends.tsx
import React from 'react';
import { Typography, Card, CardContent, Button } from '@mui/material';
import './NewComponents.css'; // Import the CSS file


const MarketTrends: React.FC = () => {
  return (
    <div className="market-trends">
      <Typography variant="h4" gutterBottom>
        Market Trends
      </Typography>
      <Card className="custom-card">
        <CardContent>
          <Typography variant="body1">
            Access data analytics for market trends and demand forecasting.
          </Typography>
          <Button variant="contained" className="action-button">
            View Market Trends
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketTrends;
