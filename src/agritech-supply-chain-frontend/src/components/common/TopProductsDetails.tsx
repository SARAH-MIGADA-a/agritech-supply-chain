import React from 'react';
import { Card, CardContent, Typography, Button, Grid, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Updated product data with paths to images in assets/images
const products = [
  {
    id: 1,
    name: 'Organic Tomatoes',
    description: 'Fresh organic tomatoes sourced from local farms.',
    price: '$3.50 per kg',
    stock: 'Available',
    farm: 'Green Valley Farm',
    farmer: 'John Doe',
    image: 'assets/images/tomatoes.jpg', // Adjusted image path
  },
  {
    id: 2,
    name: 'Fresh Carrots',
    description: 'Crunchy carrots packed with nutrients.',
    price: '$2.00 per kg',
    stock: 'Available',
    farm: 'Sunny Acres Farm',
    farmer: 'Mary Smith',
    image: 'assets/images/carrots.jpg', // Adjusted image path
  },
  {
    id: 3,
    name: 'Green Spinach',
    description: 'Organic spinach, rich in vitamins and minerals.',
    price: '$4.00 per kg',
    stock: 'Available',
    farm: 'Nature’s Bounty',
    farmer: 'David Johnson',
    image: 'assets/images/spinach.jpg', // Adjusted image path
  },
  {
    id: 4,
    name: 'Ripe Avocados',
    description: 'Creamy avocados perfect for salads and spreads.',
    price: '$1.50 each',
    stock: 'Available',
    farm: 'Evergreen Orchard',
    farmer: 'Susan Lee',
    image: 'assets/images/avocados.jpg', // Adjusted image path
  },
  // Add more products as needed
];

const TopProductsDetails: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/'); // Navigate to the specified route
  };

  return (
    <div style={{ padding: '20px', height: '100vh', overflow: 'auto' }}>
      <Typography variant="h5" component="div" style={{ marginBottom: '20px' }}>
        Top Product Details
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={`${product.name}`}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Description: {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Farm: {product.farm}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Farmer: {product.farmer}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Stock: {product.stock}
                </Typography>
                <Button
                  variant="contained"
                  onClick={handleNavigation}
                  style={{
                    marginTop: '20px',
                    backgroundColor: '#388E3C',
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TopProductsDetails;
