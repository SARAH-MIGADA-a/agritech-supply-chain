import React, { useState } from 'react';
import {
  IconButton,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Snackbar,
  Alert,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface AddNewProductProps {
  title: string;
}

const AddNewProduct: React.FC<AddNewProductProps> = ({ title }) => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newProduct = {
      productName,
      description,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    };

    console.log('New Product Added:', newProduct);

    setSnackbarMessage('Product added successfully!');
    setSnackbarOpen(true);

    setProductName('');
    setDescription('');
    setPrice('');
    setQuantity('');
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8',
      }}
    >
      <Card
        style={{
          width: '80%',
          maxWidth: '800px',
          backgroundColor: '#ffffff',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" style={{ marginBottom: '20px', textAlign: 'center' }}>
          {title}
        </Typography>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Product Name"
                  variant="outlined"
                  fullWidth
                  required
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  variant="outlined"
                  fullWidth
                  required
                  multiline
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Price"
                  variant="outlined"
                  fullWidth
                  required
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Quantity"
                  variant="outlined"
                  fullWidth
                  required
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{
                marginTop: '20px',
                padding: '12px 0',
                fontSize: '16px',
                backgroundColor: '#388E3C',
              }}
            >
              Add Product
            </Button>
          </form>
        </CardContent>
      </Card>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddNewProduct;
