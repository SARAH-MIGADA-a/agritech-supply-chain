import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, AppBar, Toolbar, IconButton, Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import UpdateIcon from '@mui/icons-material/Update';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import BarChartIcon from '@mui/icons-material/BarChart';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import './FarmerDashboard.css';

const FarmerDashboard: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState(''); // Step 1: State variable
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  // Modal component
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`dashboard-container ${darkMode ? 'dark-mode' : ''}`} style={{ backgroundColor: darkMode ? '#333' : '#f8f8f8' }}>
      <AppBar position="static" className="dashboard-header" style={{ backgroundColor: '#388E3C' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="dashboard-title">
            Farmer Dashboard
          </Typography>
          <Switch checked={darkMode} onChange={toggleDarkMode} color="default" />
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div className="dashboard-content">
        <Typography variant="h4" className="welcome-title" gutterBottom>
          Welcome, Farmer!
        </Typography>

        <div className="button-group">
          <Button
            variant="contained"
            component={Link}
            to="/add-product"
            startIcon={<AddCircleOutlineIcon />}
            style={{ backgroundColor: '#52f531', color: 'white', marginRight: '10px' }}
          >
            Add New Product
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/update-farm-info"
            startIcon={<UpdateIcon />}
            style={{ backgroundColor: '#52f531', color: 'white' }}
          >
            Update Farm Information
          </Button>
        </div>

        <div className="button-group" style={{ marginTop: '20px' }}>
          <Button
            variant="contained"
            component={Link}
            to="/inventory-management"
            startIcon={<TrackChangesIcon />}
            style={{ backgroundColor: '#388E3C', color: 'white', marginRight: '10px' }}
          >
            Inventory Management
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/logistics-management"
            startIcon={<TrackChangesIcon />}
            style={{ backgroundColor: '#388E3C', color: 'white', marginRight: '10px' }}
          >
            Logistics Management
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/market-trends"
            startIcon={<TrackChangesIcon />}
            style={{ backgroundColor: '#388E3C', color: 'white' }}
          >
            Market Trends
          </Button>
        </div>

        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          {/* Weather Updates */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card weather-card">
              <CardContent>
              <Typography variant="h5">Weather Updates</Typography>
                <Typography variant="body2" color="text.secondary">
                  Stay updated on weather trends.
                </Typography>
              <Button 
  variant="contained" 
  style={{ backgroundColor: '#52f531', color: 'white', marginTop: '10px' }}
  onClick={handleOpen} // Open modal on click
>
View Weather
</Button>

<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <Box sx={style}>
    <Typography id="modal-description" sx={{ mt: 2 }}>
      The temprature now is 35C
    </Typography>
  </Box>
</Modal>
              </CardContent>
            </Card>
          </Grid>

          {/* Agricultural News */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card news-card">
              <CardContent>
              <Typography variant="h5">Agricultural Updates</Typography>
                <Typography variant="body2" color="text.secondary">
                  Stay updated on agricultural trends.
                </Typography>
              <Button 
  variant="contained" 
  style={{ backgroundColor: '#52f531', color: 'white', marginTop: '10px' }}
  onClick={handleOpen} // Open modal on click
>
View News
</Button>

<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <Box sx={style}>
    <Typography id="modal-description" sx={{ mt: 2 }}>
      The market needs a lot of tomatoes and oranges
    </Typography>
  </Box>
</Modal>
              </CardContent>
            </Card>
          </Grid>

          {/* Quick Notifications */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card notifications-card">
              <CardContent>
              <Typography variant="h5">Quick Notifications</Typography>
                <Typography variant="body2" color="text.secondary">
                  View and check current notifications fast
                </Typography>
              <Button 
  variant="contained" 
  style={{ backgroundColor: '#52f531', color: 'white', marginTop: '10px' }}
  onClick={handleOpen} // Open modal on click
>
View Notifications
</Button>

<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <Box sx={style}>
    <Typography id="modal-description" sx={{ mt: 2 }}>
      Your products are amazing
    </Typography>
  </Box>
</Modal>
              </CardContent>
            </Card>
          </Grid>

          {/* Order Tracking */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card">
              <CardContent>
                <Typography variant="h5">Order Tracking</Typography>
                <Typography variant="body2" color="text.secondary">
                  Monitor and manage your current orders.
                </Typography>
                <Button variant="contained" component={Link} to="/tracking" style={{ backgroundColor: '#388E3C', color: 'white', marginTop: '10px' }}>
                  Go to Order Tracking
                  <TrackChangesIcon style={{ marginLeft: '5px' }} />
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Farm Analytics */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card">
              <CardContent>
                <Typography variant="h5">Farm Analytics</Typography>
                <Typography variant="body2" color="text.secondary">
                  View data on sales and product performance.
                </Typography>
                <Button variant="contained" component={Link} to="/analytics" style={{ backgroundColor: '#388E3C', color: 'white', marginTop: '10px' }}>
                  View Analytics
                  <BarChartIcon style={{ marginLeft: '5px' }} />
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Step 3: Conditional Rendering for Active Section */}
        {activeSection === 'weather' && (
          <Card className="card weather-card">
            <CardContent>
              <Typography variant="h5">Weather Updates</Typography>
              <Typography variant="body2" color="text.secondary">
                Detailed weather information goes here.
              </Typography>
            </CardContent>
          </Card>
        )}

        {activeSection === 'news' && (
          <Card className="card news-card">
            <CardContent>
              <Typography variant="h5">Agricultural News</Typography>
              <Typography variant="body2" color="text.secondary">
                Latest agricultural news and trends here.
              </Typography>
            </CardContent>
          </Card>
        )}

        {activeSection === 'notifications' && (
          <Card className="card notifications-card">
            <CardContent>
              <Typography variant="h5">Quick Notifications</Typography>
              <Typography variant="body2" color="text.secondary">
                Recent notifications displayed here.
              </Typography>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default FarmerDashboard;
