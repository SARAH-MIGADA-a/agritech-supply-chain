import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BarChartIcon from '@mui/icons-material/BarChart';
import './CustomerInsights.css';

const CustomerInsights: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const insights = [
    {
      title: 'Customer Satisfaction',
      description: '85% of customers report being satisfied with our products and services.',
      icon: <BarChartIcon />
    },
    {
      title: 'Repeat Customers',
      description: '60% of our sales come from repeat customers, indicating strong loyalty.',
      icon: <BarChartIcon />
    },
    {
      title: 'Customer Demographics',
      description: '70% of our customers are aged 18-35, representing our key demographic.',
      icon: <BarChartIcon />
    }
  ];

  const feedbackData = [
    {
      title: 'Positive Feedback',
      description: '90% of feedback received was positive, highlighting our product quality.'
    },
    {
      title: 'Areas for Improvement',
      description: 'Common suggestions include faster delivery and improved customer service.'
    }
  ];

  return (
    <div className="customer-insights-container">
      <AppBar position="static" style={{ backgroundColor: '#2e7d02' }}>
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
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          gutterBottom
        >
          Key Insights
        </Typography>
        <Typography variant="body1" paragraph>
          Here are some valuable insights regarding our customer interactions and preferences.
        </Typography>

        <Grid container spacing={3}>
          {insights.map((insight, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="insight-card" raised>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {insight.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {insight.description}
                  </Typography>
                  <Button 
                    variant="outlined" 
                    startIcon={insight.icon} 
                    style={{ marginTop: '10px' }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          gutterBottom 
          style={{ marginTop: '40px' }}
        >
          Feedback Summary
        </Typography>
        <Typography variant="body1" paragraph>
          Below is a summary of feedback received from our customers in the last quarter.
        </Typography>

        <Grid container spacing={3}>
          {feedbackData.map((feedback, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card className="feedback-card" raised>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {feedback.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feedback.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default CustomerInsights;