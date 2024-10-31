import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BarChartIcon from '@mui/icons-material/BarChart';
import './CustomerInsights.css'; // Optional: For additional custom styles

const CustomerInsights: React.FC = () => {
  return (
    <div className="customer-insights-container">
      <AppBar position="static" style={{ backgroundColor: '#52f531' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Customer Insights
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Key Insights
        </Typography>
        <Typography variant="body1" paragraph>
          Here are some valuable insights regarding our customer interactions and preferences.
        </Typography>

        <Grid container spacing={3}>
          {/* Example Insight Card 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className="insight-card">
              <CardContent>
                <Typography variant="h5" component="div">
                  Customer Satisfaction
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  85% of customers report being satisfied with our products and services.
                </Typography>
                <Button variant="outlined" startIcon={<BarChartIcon />} style={{ marginTop: '10px' }}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Example Insight Card 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className="insight-card">
              <CardContent>
                <Typography variant="h5" component="div">
                  Repeat Customers
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  60% of our sales come from repeat customers, indicating strong loyalty.
                </Typography>
                <Button variant="outlined" startIcon={<BarChartIcon />} style={{ marginTop: '10px' }}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Example Insight Card 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className="insight-card">
              <CardContent>
                <Typography variant="h5" component="div">
                  Customer Demographics
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  70% of our customers are aged 18-35, representing our key demographic.
                </Typography>
                <Button variant="outlined" startIcon={<BarChartIcon />} style={{ marginTop: '10px' }}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography variant="h4" gutterBottom style={{ marginTop: '40px' }}>
          Feedback Summary
        </Typography>
        <Typography variant="body1" paragraph>
          Below is a summary of feedback received from our customers in the last quarter.
        </Typography>

        <Grid container spacing={3}>
          {/* Feedback Card 1 */}
          <Grid item xs={12} sm={6} md={6}>
            <Card className="feedback-card">
              <CardContent>
                <Typography variant="h5" component="div">
                  Positive Feedback
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  90% of feedback received was positive, highlighting our product quality.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feedback Card 2 */}
          <Grid item xs={12} sm={6} md={6}>
            <Card className="feedback-card">
              <CardContent>
                <Typography variant="h5" component="div">
                  Areas for Improvement
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Common suggestions include faster delivery and improved customer service.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CustomerInsights;
