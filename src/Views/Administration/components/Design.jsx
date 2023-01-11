import React from 'react'
import { Box, Typography } from '@mui/material'

const Design = () => {
  return (
    <Box sx={{ height: 80, backgroundColor: '#0029FF' }}>
      <Typography sx={{ color: '#fff', textAlign: 'center', fontFamily: 'Poppins' }}>Design</Typography>
      <Typography
        variant='h5'
        sx={{ color: '#fff', textAlign: 'center', mt: 1, fontWeight: 700, fontFamily: 'Poppins' }}
      >
        100
      </Typography>
    </Box>
  )
}

export default Design
