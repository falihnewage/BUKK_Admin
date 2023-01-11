import React from 'react'
import { Box, Typography } from '@mui/material'

const Finance = () => {
  return (
    <Box sx={{ backgroundColor: '#5390FB', height: 80 }}>
      <Typography sx={{ color: '#fff', textAlign: 'center', fontFamily: 'Poppins' }}>Finance</Typography>
      <Typography
        variant='h5'
        sx={{ color: '#fff', textAlign: 'center', mt: 1, fontWeight: 700, fontFamily: 'Poppins' }}
      >
        200
      </Typography>
    </Box>
  )
}

export default Finance
