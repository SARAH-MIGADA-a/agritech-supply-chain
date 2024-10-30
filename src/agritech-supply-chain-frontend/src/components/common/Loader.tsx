// src/components/common/Loader.tsx

import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

const Loader: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <CircularProgress />
      {message && (
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default Loader;
