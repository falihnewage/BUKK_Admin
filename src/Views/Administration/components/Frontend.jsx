import React from 'react'
import { Box, Typography } from '@mui/material'

const Frontend = () => {
  return (
    <Box
      sx={{
        height: 80,
        backgroundColor: '#9B4187',
      }}
    >
      <Typography sx={{ color: '#fff', textAlign: 'center', fontFamily: 'Poppins' }}>Frontend</Typography>
      <Typography
        variant='h5'
        sx={{ color: '#fff', mt: 1, textAlign: 'center', fontWeight: 700, fontFamily: 'Poppins' }}
      >
        100
      </Typography>
    </Box>
  )
}

export default Frontend
