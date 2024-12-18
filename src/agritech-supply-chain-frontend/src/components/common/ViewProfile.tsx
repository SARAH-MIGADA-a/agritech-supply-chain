import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Grid, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './ViewProfile.css';

const ViewProfile: React.FC = () => {
  const navigate = useNavigate();
  
  // State variables for user profile details
  const [name, setName] = useState('Sarah Migada');
  const [role, setRole] = useState('Farmer');
  const [email, setEmail] = useState('sarah@example.com');
  const [phone, setPhone] = useState('+254768517085');
  const [address, setAddress] = useState('Nairobi, Kenya');
  const [bio, setBio] = useState('Passionate about sustainable agriculture and community development.');
  const [profilePicture, setProfilePicture] = useState('');

  const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string); // Set the image preview
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Handle save logic (e.g., API call to update profile)
    console.log('Profile saved:', { name, role, email, phone, address, bio, profilePicture });
  };

  const handleNavigation = () => {
    navigate('/'); // Navigate to a different route
  };

  return (
    <div style={{ padding: '0px', height: '100vh', overflowY: 'auto' }}>
      <Card style={{ maxWidth: '1800px', margin: '0 auto', height: 'auto' }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            View Profile
          </Typography>
          {profilePicture && (
            <Avatar
              src={profilePicture}
              alt="Profile"
              style={{ width: '120px', height: '100px', marginBottom: '20px' }}
            />
          )}
          <input type="file" accept="image/*" onChange={handleProfilePictureChange} style={{ marginBottom: '20px' }} />
          
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Role"
                variant="outlined"
                fullWidth
                margin="normal"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                margin="normal"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Bio"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </Grid>
          </Grid>

          <Button 
            variant="contained" 
            onClick={handleSave} 
            style={{ marginTop: '20px', backgroundColor: '#388E3C' }}
          >
            Save Changes
          </Button>
          <Button 
            variant="contained" 
            onClick={handleNavigation} 
            style={{ marginTop: '20px', backgroundColor: '#f44336', marginLeft: '10px' }}
          >
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewProfile;
