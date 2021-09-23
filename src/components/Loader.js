import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Loader.css';
export default function CircularIndeterminate() {

  return (
    <div className='loader'>
 <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    </div>
   
  );
}