import React from 'react';
import { IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const CreateNewOrder: React.FC = () => {
  return (
    <div>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Create New Order
      </Typography>
    </div>
  );
};

export default CreateNewOrder;
