import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  Container, 
  TextField, 
  Button, 
  Typography, 
  Paper,
  IconButton,
  InputAdornment,
  Alert,
  Fade
} from '@mui/material';
import { Visibility, VisibilityOff, Email, Person, Lock } from '@mui/icons-material';
import './LoginSignupScreen.css';

// Define the FormEvent interface for type safety in TypeScript
interface FormEvent extends React.FormEvent<HTMLFormElement> {
  target: HTMLFormElement;
}

const LoginSignupScreen: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.email || !formData.password || (!isLogin && !formData.username)) {
      setError('Please fill in all fields');
      return;
    }

    // Simulated authentication logic
    setTimeout(() => {
      localStorage.setItem('userToken', 'demo-token');
      localStorage.setItem('userRole', 'buyer');
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: '100%', borderRadius: 2 }}>
          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant={isLogin ? "contained" : "outlined"}
              onClick={() => setIsLogin(true)}
              sx={{ flex: 1, mr: 1 }}
            >
              Login
            </Button>
            <Button
              variant={!isLogin ? "contained" : "outlined"}
              onClick={() => setIsLogin(false)}
              sx={{ flex: 1, ml: 1 }}
            >
              Signup
            </Button>
          </Box>

          {error && (
            <Fade in={Boolean(error)}>
              <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>
            </Fade>
          )}

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={formData.username}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
              />
            )}

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, height: '46px' }}
            >
              {isLogin ? 'Sign In' : 'Sign Up'}
            </Button>
          </form>

          <Typography variant="body2" color="text.secondary" align="center">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Button
              onClick={() => setIsLogin(!isLogin)}
              sx={{ textTransform: 'none' }}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </Button>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default LoginSignupScreen;
