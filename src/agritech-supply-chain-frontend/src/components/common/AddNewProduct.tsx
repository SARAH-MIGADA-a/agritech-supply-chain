import React from 'react';
import { IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface AddNewProductProps {
  title: string;
}

const AddNewProduct: React.FC<AddNewProductProps> = ({ title }) => {
  return (
    <div>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        {title}
      </Typography>
    </div>
  );
};

export default AddNewProduct;
