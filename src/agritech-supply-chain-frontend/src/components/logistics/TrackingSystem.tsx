import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, TextField, Button, Card, CardContent, CircularProgress, Grid, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';
import './TrackingSystem.css';

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrackOrder = () => {
    setLoading(true);
    setTimeout(() => {
      if (orderId) {
        const mockOrder = {
          id: orderId,
          product: 'Fresh Organic Apples',
          quantity: '5 kg',
          totalPrice: '$12.50',
          deliveryAddress: '123 Farm Lane, Nairobi',
          status: 'Out for Delivery',
          estimatedDelivery: 'Today, 5 PM',
          customerService: '0800-123-456',
        };
        setOrderDetails(mockOrder);
      } else {
        setOrderDetails(null);
      }
      setLoading(false);
    }, 1000);
  };

  const mockOrders = [
    // Delivered orders
    { id: '001', product: 'Bananas', status: 'Delivered', quantity: '3 kg', totalPrice: '$5.00' },
    { id: '004', product: 'Oranges', status: 'Delivered', quantity: '4 kg', totalPrice: '$6.00' },
    { id: '006', product: 'Cucumbers', status: 'Delivered', quantity: '2 kg', totalPrice: '$4.00' },
    { id: '009', product: 'Carrots', status: 'Delivered', quantity: '1 kg', totalPrice: '$2.50' },
    { id: '011', product: 'Watermelons', status: 'Delivered', quantity: '5 kg', totalPrice: '$7.50' },
  
    // In Progress orders
    { id: '002', product: 'Tomatoes', status: 'In Progress', quantity: '2 kg', totalPrice: '$3.00' },
    { id: '005', product: 'Onions', status: 'In Progress', quantity: '1.5 kg', totalPrice: '$2.00' },
    { id: '007', product: 'Spinach', status: 'In Progress', quantity: '3 kg', totalPrice: '$3.50' },
    { id: '010', product: 'Sweet Potatoes', status: 'In Progress', quantity: '4 kg', totalPrice: '$5.00' },
    { id: '013', product: 'Lettuce', status: 'In Progress', quantity: '1 kg', totalPrice: '$2.20' },
  
    // Pending orders
    { id: '003', product: 'Potatoes', status: 'Pending', quantity: '10 kg', totalPrice: '$8.00' },
    { id: '008', product: 'Ginger', status: 'Pending', quantity: '0.5 kg', totalPrice: '$2.50' },
    { id: '012', product: 'Garlic', status: 'Pending', quantity: '0.2 kg', totalPrice: '$1.50' },
    { id: '014', product: 'Green Beans', status: 'Pending', quantity: '1 kg', totalPrice: '$3.00' },
    { id: '015', product: 'Peppers', status: 'Pending', quantity: '2 kg', totalPrice: '$4.50' },
  ];
  
  const renderOrderList = (status) => (
    mockOrders
      .filter(order => order.status === status)
      .map(order => (
        <Typography key={order.id} variant="body2" style={{ padding: '5px 0' }}>
          {order.product} - {order.quantity} - {order.totalPrice}
        </Typography>
      ))
  );

  return (
    <div className="order-tracking-container">
      <AppBar position="static" className="order-tracking-header" style={{ backgroundColor: '#388E3C' }}>
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
          className="order-tracking-input"
        />
        <Button variant="contained" className="track-order-button" onClick={handleTrackOrder}
                  style={{ backgroundColor: '#388E3C',padding:'15px' }}
                >
          Track Order
        </Button>

        {loading && (
          <CircularProgress style={{ marginTop: '20px' }} />
        )}

        {orderDetails && !loading && (
          <Card className="order-details-card" style={{ marginTop: '20px' }}>
            <CardContent>
              <Typography variant="h5">Order Details</Typography>
              <Typography variant="body1">
                <ReceiptIcon style={{ marginRight: '8px' }} /> <strong>Order ID:</strong> {orderDetails.id}
              </Typography>
              <Typography variant="body1">
                <LocalShippingIcon style={{ marginRight: '8px' }} /> <strong>Product:</strong> {orderDetails.product}
              </Typography>
              <Typography variant="body1">
                <AttachMoneyIcon style={{ marginRight: '8px' }} /> <strong>Total Price:</strong> {orderDetails.totalPrice}
              </Typography>
              <Typography variant="body1">
                <HomeIcon style={{ marginRight: '8px' }} /> <strong>Delivery Address:</strong> {orderDetails.deliveryAddress}
              </Typography>
              <Typography variant="body1">
                <strong>Status:</strong> {orderDetails.status}
              </Typography>
              <Typography variant="body1">
                <strong>Estimated Delivery:</strong> {orderDetails.estimatedDelivery}
              </Typography>
              <Typography variant="body1">
                <strong>Customer Service:</strong> {orderDetails.customerService}
              </Typography>
            </CardContent>
          </Card>
        )}

        {/* Section to display different order statuses */}
        <Divider style={{ margin: '20px 0' }} />
        <Typography variant="h5" gutterBottom>All Orders</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card className="order-status-card">
              <CardContent>
                <Typography variant="h6" style={{ color: '#4caf50' }}>Delivered Orders</Typography>
                {renderOrderList('Delivered')}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="order-status-card">
              <CardContent>
                <Typography variant="h6" style={{ color: '#ff9800' }}>In Progress Orders</Typography>
                {renderOrderList('In Progress')}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="order-status-card">
              <CardContent>
                <Typography variant="h6" style={{ color: '#f44336' }}>Pending Orders</Typography>
                {renderOrderList('Pending')}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default OrderTracking;
