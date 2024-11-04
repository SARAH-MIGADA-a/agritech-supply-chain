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

interface Notification {
  id: string;
  message: string;
  timestamp: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string; // Added image type
}

const BuyerDashboard: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showOrderHistory, setShowOrderHistory] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    { id: '1', name: 'Organic Tomatoes', description: 'Fresh organic tomatoes from Green Farm.', price: 10, image: '/assets/images/tomatoes_image.jpg' },
    { id: '2', name: 'Fresh Spinach', description: 'Locally sourced fresh spinach.', price: 15, image: '/assets/images/spinach_image.jpg' },
    { id: '3', name: 'Free-range Eggs', description: 'Eggs from free-range chickens.', price: 8, image: '/assets/images/eggs_image.jpg' },
    { id: '4', name: 'Artisan Bread', description: 'Handmade artisan bread baked daily.', price: 5, image: '/assets/images/bread_image.jpg' },
    { id: '5', name: 'Raw Honey', description: 'Pure raw honey harvested from local hives.', price: 12, image: '/assets/images/honey_image.jpg' },
    { id: '6', name: 'Seasonal Fruits', description: 'A selection of seasonal fruits.', price: 20, image: '/assets/images/fruits_image.jpg' },
    { id: '7', name: 'Dairy Milk', description: 'Fresh milk from local dairies.', price: 3, image: '/assets/images/milk_image.jpg' },
    { id: '8', name: 'Herbal Tea', description: 'A blend of soothing herbal teas.', price: 10, image: '/assets/images/tea_image.jpg' },
    { id: '9', name: 'Chili Peppers', description: 'Spicy chili peppers for your dishes.', price: 7, image: '/assets/images/chillies_image.jpg' },
    { id: '10', name: 'Carrots', description: 'Crunchy carrots full of flavor.', price: 6, image: '/assets/images/carrots_image.jpg' },
    // Add more products as needed
  ];

  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);
  const toggleOrderHistory = () => setShowOrderHistory(prev => !prev);
  const handleNotification = (notification: Notification) => setNotifications(prev => [...prev, notification]);
  const handleProductView = (product: Product) => setSelectedProduct(product);
  const handleHideDetails = () => setSelectedProduct(null);

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
          <IconButton color="inherit" onClick={() => handleNotification({ id: `${notifications.length + 1}`, message: "New order updates available!", timestamp: new Date().toLocaleString() })}>
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div className="content">
        <Typography variant="h4" gutterBottom>
          Welcome to the Agricultural Marketplace!
        </Typography>

        <TextField
          variant="outlined"
          placeholder="Search..."
          sx={{
            marginBottom: '20px',
            width: '50%',
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px',
              '& fieldset': { borderColor: '#66BB6A' },
              '&:hover fieldset': { borderColor: '#388E3C' },
              '&.Mui-focused fieldset': { borderColor: '#2E7D32' },
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
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Product Catalog</Typography>
                <Typography variant="body2" color="text.secondary">
                  Browse a wide range of agricultural products from local farmers.
                </Typography>
                <Button variant="contained" component={Link} to="/buyer/catalog" style={{ backgroundColor: '#388E3C' }}>
                  View Product Catalog
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Order History</Typography>
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

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Order Tracking</Typography>
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

        <Typography variant="h5" style={{ marginTop: '30px' }}>
          Featured Products
        </Typography>
        <Grid container spacing={3}>
          {products.map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardContent>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary">Price: ${product.price}</Typography>
                  <Button variant="contained" onClick={() => handleProductView(product)} style={{ backgroundColor: '#388E3C' }}>
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Collapse in={!!selectedProduct}>
          {selectedProduct && (
            <Card style={{ marginTop: '20px' }}>
              <CardContent>
                <Typography variant="h5">{selectedProduct.name}</Typography>
                <Typography variant="body2">{selectedProduct.description}</Typography>
                <Typography variant="body2">Price: ${selectedProduct.price}</Typography>
                <Button variant="contained" onClick={handleHideDetails} style={{ backgroundColor: '#f44336' }}>
                  Close
                </Button>
              </CardContent>
            </Card>
          )}
        </Collapse>
      </div>
    </div>
  );
};

export default BuyerDashboard;
