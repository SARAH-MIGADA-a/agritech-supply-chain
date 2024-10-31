import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import './ProductCatalog.css'; // Import the CSS file

const ProductCatalog = () => {
  // Sample product data
  const products = [
    { id: '1', name: 'Product 1', description: 'Description of Product 1', price: '$10' },
    { id: '2', name: 'Product 2', description: 'Description of Product 2', price: '$15' },
    { id: '3', name: 'Product 3', description: 'Description of Product 3', price: '$20' },
    // Add more products as needed
  ];

  return (
    <div className="catalog-container">
      <AppBar position="static" className="catalog-header" style={{ backgroundColor: '#388E3C'}}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="catalog-title">
            Product Catalog
          </Typography>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div className="catalog-content">
        <Typography variant="h4" gutterBottom>
          Available Products
        </Typography>

        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card className="product-card">
                <CardContent>
                  <Typography variant="h5" className="product-title">{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary" className="product-description">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" className="product-price">{product.price}</Typography>
                  <Button 
                    variant="contained" 
                    component={Link} 
                    to={`/product/${product.id}`} 
                    className="view-details-button"
                  >
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

export default ProductCatalog;
