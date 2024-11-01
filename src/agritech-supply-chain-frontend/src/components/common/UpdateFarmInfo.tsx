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

const UpdateFarmInfo: React.FC = () => {
  const [farmName, setFarmName] = useState('');
  const [location, setLocation] = useState('');
  const [size, setSize] = useState('');
  const [crops, setCrops] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const updatedFarmInfo = {
      farmName,
      location,
      size: parseFloat(size),
      crops,
    };

    console.log('Updated Farm Information:', updatedFarmInfo);

    setSnackbarMessage('Farm information updated successfully!');
    setSnackbarOpen(true);

    setFarmName('');
    setLocation('');
    setSize('');
    setCrops('');
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
        backgroundColor: '#e0f7fa',
      }}
    >
      <Card
        style={{
          width: '80%',
          maxWidth: '800px',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#ffffff',
        }}
      >
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" style={{ marginBottom: '20px', textAlign: 'center' }}>
          Update Farm Information
        </Typography>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Farm Name"
                  variant="outlined"
                  fullWidth
                  required
                  value={farmName}
                  onChange={(e) => setFarmName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Location"
                  variant="outlined"
                  fullWidth
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Size (Acres)"
                  variant="outlined"
                  fullWidth
                  required
                  type="number"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Crops Grown"
                  variant="outlined"
                  fullWidth
                  required
                  value={crops}
                  onChange={(e) => setCrops(e.target.value)}
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
                backgroundColor: '#00796b',
              }}
            >
              Update Farm Info
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

export default UpdateFarmInfo;
