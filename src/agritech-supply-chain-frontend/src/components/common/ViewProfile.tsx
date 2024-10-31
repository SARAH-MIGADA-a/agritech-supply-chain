// src/components/ViewProfile.tsx
import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './ViewProfile.css';

const ViewProfile: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('Sarah Migada');
  const [role, setRole] = useState('Farmer');
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
    console.log('Profile saved:', { name, role, profilePicture });
  };

  const handleNavigation = () => {
    navigate('/'); // Navigate to a different route
  };

  return (
    <div style={{ padding: '20px' }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            View Profile
          </Typography>
          {profilePicture && (
            <img
              src={profilePicture}
              alt="Profile"
              style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            />
          )}
          <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Role"
            variant="outlined"
            fullWidth
            margin="normal"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <Button variant="contained" onClick={handleSave} style={{ marginTop: '20px', backgroundColor: '#388E3C' }}>
            Save Changes
          </Button>
          <Button variant="contained" onClick={handleNavigation} style={{ marginTop: '20px', backgroundColor: '#f44336', marginLeft: '10px' }}>
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewProfile;
