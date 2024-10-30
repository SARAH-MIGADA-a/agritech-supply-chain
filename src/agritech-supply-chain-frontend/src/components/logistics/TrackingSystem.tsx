import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, TextField, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './TrackingSystem.css'; // Import the CSS file

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState('');

  const handleTrackOrder = () => {
    // Simulate tracking logic (replace this with real tracking logic)
    if (orderId) {
      setOrderStatus(`Order ${orderId} is being processed.`);
    } else {
      setOrderStatus('Please enter a valid order ID.');
    }
  };

  return (
    <div className="order-tracking-container">
      <AppBar position="static" className="order-tracking-header">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="order-tracking-title">
            Order Tracking
          </Typography>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div className="order-tracking-content">
        <Typography variant="h4" gutterBottom>
          Track Your Order
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Enter your Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="order-tracking-input" // Apply class here
        />
        <Button variant="contained" className="track-order-button" onClick={handleTrackOrder}>
          Track Order
        </Button>

        {orderStatus && (
          <Typography variant="h6" className="order-status">
            {orderStatus}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;
