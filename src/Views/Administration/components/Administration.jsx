import React from 'react'
import { Box, Typography } from '@mui/material'

const Administration = () => {
  return (
    <Box
      sx={{
        height: 77,
        backgroundColor: '#D91E25',
      }}
    >
      <Typography sx={{ color: '#fff', textAlign: 'center', mt: 1, fontFamily: 'Poppins' }}>
        {' '}
        Administration{' '}
      </Typography>
      <Typography
        variant='h5'
        sx={{ color: '#fff', mt: 1, fontWeight: '700', textAlign: 'center', fontFamily: 'Poppins' }}
      >
        150
      </Typography>
    </Box>
  )
}

export default Administration
