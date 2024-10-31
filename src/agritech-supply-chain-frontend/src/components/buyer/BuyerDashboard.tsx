import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
  Button,
  Collapse,
  InputAdornment,
  Snackbar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './BuyerDashboard.css';

const BuyerDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showOrderHistory, setShowOrderHistory] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // To store the selected product details

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const toggleOrderHistory = () => {
    setShowOrderHistory((prev) => !prev);
  };

  const handleNotificationClick = (notification) => {
    setNotifications((prev) => [...prev, notification]);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleHideDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className={`buyer-dashboard ${darkMode ? 'dark-mode' : ''}`}>
      <AppBar position="static" style={{ backgroundColor: '#388E3C' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Buyer Dashboard
          </Typography>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <IconButton color="inherit" onClick={() => handleNotificationClick("New order updates available!")}>
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div className="content">
        <Typography variant="h4" gutterBottom>
          Welcome to the Agricultural Marketplace!
        </Typography>

        {/* Search Products */}
        <TextField
          variant="outlined"
          placeholder="Search..."
          sx={{
            marginBottom: '20px',
            width: '50%',
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px',
              '& fieldset': {
                borderColor: '#66BB6A',
              },
              '&:hover fieldset': {
                borderColor: '#388E3C',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#2E7D32',
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Grid container spacing={3}>
          {/* Product Catalog */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Product Catalog
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Browse a wide range of agricultural products from local farmers.
                </Typography>
                <Button variant="contained" component={Link} to="/buyer/catalog" style={{ backgroundColor: '#388E3C' }}>
                  View Product Catalog
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Order History Button */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Order History
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Check your past purchases of fresh produce.
                </Typography>
                <Button
                  variant="contained"
                  onClick={toggleOrderHistory}
                  style={{ backgroundColor: '#388E3C' }}
                >
                  {showOrderHistory ? 'Hide Order History' : 'View Order History'}
                  <ShoppingCartIcon style={{ marginLeft: '5px' }} />
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Tracking Orders */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Order Tracking
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Track your ongoing orders of agricultural products.
                </Typography>
                <Button variant="contained" component={Link} to="/tracking" style={{ backgroundColor: '#388E3C' }}>
                  Track Orders
                  <TrackChangesIcon style={{ marginLeft: '5px' }} />
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Featured Products Section */}
        <Typography variant="h5" style={{ marginTop: '30px' }}>
          Featured Products
        </Typography>
        <Grid container spacing={3}>
          {[
            { id: 1, name: 'Fresh Organic Tomatoes', price: '$2.50 / kg', imgSrc: '/assets/images/tomatoes.jpg' },
            { id: 2, name: 'Premium Green Lettuce', price: '$1.75 / head', imgSrc: '/assets/images/lettuce.jpg' },
            { id: 3, name: 'Sweet Yellow Corn', price: '$3.00 / kg', imgSrc: 'assets/images/corn.jpg' },
            { id: 4, name: 'Ripe Avocados', price: '$4.00 / kg', imgSrc: '/assets/images/avocados.jpg' },
            { id: 5, name: 'Fresh Strawberries', price: '$5.50 / kg', imgSrc: '/assets/images/strawberries.jpg' },
            { id: 6, name: 'Organic Carrots', price: '$2.00 / kg', imgSrc: '/assets/images/carrots.jpg' },
            { id: 7, name: 'Fresh Spinach', price: '$1.50 / bunch', imgSrc: '/assets/images/spinach.jpg' },
            { id: 8, name: 'Juicy Watermelons', price: '$0.80 / kg', imgSrc: '/assets/images/watermelons.jpg' },
            { id: 9, name: 'Crunchy Cucumber', price: '$0.90 / kg', imgSrc: '/assets/images/cucumber.jpg' },
            { id: 10, name: 'Fresh Basil', price: '$2.25 / bunch', imgSrc: '/assets/images/basil.jpg' },
          ].map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardContent>
                  <img src={product.imgSrc} alt={product.name} style={{ width: '100%', height: 'auto' }} />
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {product.price}
                  </Typography>
                  <Button variant="contained" style={{ backgroundColor: '#388E3C', marginTop: '10px' }}>
                    Add to Cart
                  </Button>
                  <Button
                    variant="outlined"
                    style={{ marginTop: '10px' }}
                    onClick={() => handleViewDetails(product)}
                  >
                    View Details
                  </Button>
                  
                  {/* Product Details Section */}
                  <Collapse in={selectedProduct?.id === product.id}>
                    <CardContent style={{ marginTop: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                      <Typography variant="body1">
                        Description: Readily Available Produced by Farmer Sarah
                      </Typography>
                      <Button variant="outlined" style={{ marginTop: '10px' }} onClick={handleHideDetails}>
                        Hide Details
                      </Button>
                    </CardContent>
                  </Collapse>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Order History Section */}
        <Collapse in={showOrderHistory}>
          <Typography variant="h5" style={{ marginTop: '30px' }}>
            Your Order History
          </Typography>
          <Grid container spacing={3}>
            {Array.from({ length: 3 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      Order #{index + 1}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Product: Fresh Organic Tomatoes
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: $2.50 / kg
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Date: {new Date().toLocaleDateString()}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Collapse>
      </div>
    </div>
  );
};

export default BuyerDashboard;
