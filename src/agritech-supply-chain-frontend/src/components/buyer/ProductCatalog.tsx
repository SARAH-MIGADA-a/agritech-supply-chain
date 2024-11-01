import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import './ProductCatalog.css'; // Import the CSS file

const ProductCatalog = () => {
  // Sample product data
  const products = [
    { id: '1', name: 'Organic Tomatoes', description: 'Fresh organic tomatoes from Green Farm.', price: '$10', farmer: 'John Doe', farm: 'Green Farm', image: '/assets/images/tomatoes_image.jpg' },
    { id: '2', name: 'Fresh Spinach', description: 'Locally sourced fresh spinach.', price: '$15', farmer: 'Jane Smith', farm: 'Fresh Greens Farm', image: '/assets/images/spinach_image.jpg' },
    { id: '3', name: 'Free-range Eggs', description: 'Eggs from free-range chickens.', price: '$8', farmer: 'Alice Brown', farm: 'Sunny Meadows Farm', image: '/assets/images/eggs_image.jpg' },
    { id: '4', name: 'Artisan Bread', description: 'Handmade artisan bread baked daily.', price: '$5', farmer: 'Tom Baker', farm: 'Daily Bakes', image: '/assets/images/bread_image.jpg' },
    { id: '5', name: 'Raw Honey', description: 'Pure raw honey harvested from local hives.', price: '$12', farmer: 'Beekeeper Bill', farm: 'Golden Hive', image: 'assets/images/honey_image.jpg' },
    { id: '6', name: 'Seasonal Fruits', description: 'A selection of seasonal fruits.', price: '$20', farmer: 'Fruit Farmer Joe', farm: 'Fruitful Farm', image: 'assets/images/fruits_image.jpg' },
    { id: '7', name: 'Dairy Milk', description: 'Fresh milk from local dairies.', price: '$3', farmer: 'Dairy Dan', farm: 'Happy Cow Dairy', image: '/assets/images/milk_image.jpg' },
    { id: '8', name: 'Herbal Tea', description: 'A blend of soothing herbal teas.', price: '$10', farmer: 'Tea Master Liu', farm: 'Zen Teas', image: '/assets/images/tea_image.jpg' },
    { id: '9', name: 'Chili Peppers', description: 'Spicy chili peppers for your dishes.', price: '$7', farmer: 'Spicy Sam', farm: 'Chili Farm', image: '/assets/images/chillies_image' },
    { id: '10', name: 'Carrots', description: 'Crunchy carrots full of flavor.', price: '$6', farmer: 'Veggie Pete', farm: 'Rooted Veggies', image: '/assets/images/carrots_image' },
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
                  <img src={product.image} alt={product.name} className="product-image" />
                  <Typography variant="h5" className="product-title">{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary" className="product-description">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" className="product-price">{product.price}</Typography>
                  <Typography variant="body2" color="text.secondary">Farmer: {product.farmer}</Typography>
                  <Typography variant="body2" color="text.secondary">Farm: {product.farm}</Typography>
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
