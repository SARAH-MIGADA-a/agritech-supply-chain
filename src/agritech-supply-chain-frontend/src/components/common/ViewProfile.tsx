import React from 'react';
import { IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface ViewProfileProps {
  name: string;
  email: string;
}

const ViewProfile: React.FC<ViewProfileProps> = ({ name, email }) => {
  return (
    <div>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Profile Information
      </Typography>
      <Typography variant="body1">Name: {name}</Typography>
      <Typography variant="body1">Email: {email}</Typography>
    </div>
  );
};

export default ViewProfile;
