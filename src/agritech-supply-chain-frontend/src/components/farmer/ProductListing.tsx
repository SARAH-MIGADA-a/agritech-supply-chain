import React from 'react';
import { Grid, Card, CardContent, Typography, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

const ProductListings = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: '$10' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: '$15' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: '$20' },
    { id: 4, name: 'Product 4', description: 'Description of Product 4', price: '$25' },
    // Add more products as needed
  ];

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Product Listings
          </Typography>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div style={{ flexGrow: 1, padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Available Products
        </Typography>

        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6">{product.price}</Typography>
                  <Button variant="contained" component={Link} to={`/product/${product.id}`}>
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ProductListings;
