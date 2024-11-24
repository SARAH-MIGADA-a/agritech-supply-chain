import { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  
  CardMedia,
  
  Container,
  Paper
} from '@mui/material';
import { Link } from 'react-router-dom';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InsightsIcon from '@mui/icons-material/Insights';
import InventoryIcon from '@mui/icons-material/Inventory';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirIcon from '@mui/icons-material/Air';
import Layout from './Layout';

// Assuming the Layout component is imported from a shared location
 // Update this path to the actual file location of Layout

const products = [
  {
    id: 1,
    name: 'Organic Tomatoes',
    description: 'Fresh organic tomatoes sourced from local farms.',
    price: '$3.50 per kg',
    stock: 'Available',
    farm: 'Green Valley Farm',
    farmer: 'John Doe',
    image: 'assets/images/tomatoes.jpg',
  },
  {
    id: 2,
    name: 'Fresh Carrots',
    description: 'Crunchy carrots packed with nutrients.',
    price: '$2.00 per kg',
    stock: 'Available',
    farm: 'Sunny Acres Farm',
    farmer: 'Mary Smith',
    image: 'assets/images/carrots.jpg',
  },
  {
    id: 3,
    name: 'Green Spinach',
    description: 'Organic spinach, rich in vitamins and minerals.',
    price: '$4.00 per kg',
    stock: 'Available',
    farm: 'Natures Bounty',
    farmer: 'David Johnson',
    image: 'assets/images/spinach.jpg',
  },
  {
    id: 4,
    name: 'Ripe Avocados',
    description: 'Creamy avocados perfect for salads and spreads.',
    price: '$1.50 each',
    stock: 'Available',
    farm: 'Evergreen Orchard',
    farmer: 'Susan Lee',
    image: 'assets/images/avocados.jpg',
  },
  
];


const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);




  const weatherData = {
    temperature: "24°C",
    humidity: "65%",
    windSpeed: "12 km/h",
    forecast: "Partly Cloudy"
  };

  const sidebarItems = [
    { text: 'Home', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Farmers Dashboard', icon: <DashboardIcon />, path: '/farmer/dashboard' },
    { text: 'Buyers Dashboard', icon: <ShoppingCartIcon />, path: '/buyer/dashboard' },
    { text: 'View ICP', icon: <InsightsIcon />, path: '/icp' },
    { text: 'View Analytics', icon: <BarChartIcon />, path: '/analytics' },
    { text: 'Product Catalogue', icon: <InventoryIcon />, path: '/buyer/catalog' },
  ];
  return (
    <Layout
      darkMode={darkMode}
      sidebarItems={sidebarItems}
      setDarkMode={setDarkMode}
    >
  
  
  

    
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Profile Card */}
          <Grid item xs={12} md={8}>
            <Card sx={{ mb: 2, backgroundColor: '#c1f5a4' }}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom sx={{ color: '#1a237e' }}>
                  Farmer Profile
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1" sx={{ color: '#1a237e' }}>
                      <strong>Name:</strong> Sarah Migada
                    </Typography>
                    <Typography variant="body1" sx={{ colorkm: '#1a237e' }}>
                      <strong>Role:</strong> Lead Farmer
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#1a237e' }}>
                      <strong>Farm Size:</strong> 50 acres
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#1a237e' }}>
                      <strong>Location:</strong> Nyeri County
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button
                      variant="contained"
                      component={Link}
                      to="/profile"
                      sx={{ backgroundColor: '#4caf50', '&:hover': { backgroundColor: '#43a047' } }}
                    >
                      View Full Profile
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Weather Card */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2, backgroundColor: '#c1f5a4' }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#1a237e' }}>
                Weather Update
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <WbSunnyIcon />
                  <Typography>{weatherData.temperature}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <OpacityIcon />
                  <Typography>{weatherData.humidity}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <AirIcon />
                  <Typography>{weatherData.windSpeed}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2">{weatherData.forecast}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Product Details */}
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom sx={{ mt: 2, color: '#1a237e' }}>
              Top Product Details
            </Typography>
            <Grid container spacing={3}>
              {products.map((product) => (
                <Grid item xs={12} sm={6} md={3} key={product.id}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      height="160"
                      image={product.image}
                      alt={product.name}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" gutterBottom sx={{ color: '#1a237e' }}>
                        {product.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#1a237e' }} paragraph>
                        {product.description}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#1a237e' }}>
                        <strong>Farm:</strong> {product.farm}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#1a237e' }}>
                        <strong>Farmer:</strong> {product.farmer}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#1a237e' }}>
                        <strong>Price:</strong> {product.price}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#1a237e' }}>
                        <strong>Stock:</strong> {product.stock}
                      </Typography>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          backgroundColor: '#4caf50',
                          mt: 2,
                          '&:hover': { backgroundColor: '#43a047' }
                        }}
                      >
                       Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Dashboard;
