import React from 'react'
import { Box, Typography } from '@mui/material'

const Backend = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#9B4641',
        height: 77,
      }}
    >
      <Typography sx={{ color: '#fff', textAlign: 'center', fontFamily: 'Poppins' }}>Backend</Typography>
      <Typography
        variant='h5'
        sx={{ color: '#fff', textAlign: 'center', mt: 1, fontWeight: 700, fontFamily: 'Poppins' }}
      >
        100
      </Typography>
    </Box>
  )
}

export default Backend
