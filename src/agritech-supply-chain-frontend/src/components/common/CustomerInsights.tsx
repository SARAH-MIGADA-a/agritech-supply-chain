import React from 'react';
import { IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const CustomerInsights: React.FC = () => {
  return (
    <div>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Customer Insights
      </Typography>
    </div>
  );
};

export default CustomerInsights;
