import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import './NewComponents.css'; // Import the CSS file

// Sample market trends data (you can replace this with actual data)
const marketTrendsData = [
  { id: 1, trend: 'E-commerce Growth', description: 'Online sales are projected to grow by 20% in 2024.' },
  { id: 2, trend: 'Sustainable Products', description: 'Increased demand for eco-friendly and sustainable products.' },
  { id: 3, trend: 'Remote Work', description: 'Continued preference for remote work models affecting office space demand.' },
  { id: 4, trend: 'Health and Wellness', description: 'Rising consumer interest in health and wellness products.' },
  { id: 5, trend: 'Digital Transformation', description: 'Companies are investing heavily in digital solutions and automation.' },
  { id: 6, trend: 'AI and Machine Learning', description: 'Growing reliance on AI technologies for business operations.' },
  // Add more market trends as needed
];

const MarketTrends: React.FC = () => {
  return (
    <div className="market-trends">
      <Typography variant="h4" gutterBottom>
        Market Trends
      </Typography>
      <Typography variant="body1" gutterBottom>
        View the latest market trends and insights below.
      </Typography>
      <Grid container spacing={2}>
        {marketTrendsData.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card className="custom-card">
              <CardContent>
                <Typography variant="h6">{item.trend}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MarketTrends;
