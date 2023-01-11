import React from 'react'
import { Box, Typography } from '@mui/material'

const TopManagement = () => {
  return (
    <Box
      sx={{
        height: 77,
        backgroundColor: '#B16903',
      }}
    >
      <Typography sx={{ color: '#fff', textAlign: 'center', fontFamily: 'Poppins' }}>TOP MGT</Typography>
      <Typography
        variant='h5'
        sx={{ color: '#fff', fontWeight: 'bold', textAlign: 'center', mt: 1, fontFamily: 'Poppins' }}
      >
        400
      </Typography>
    </Box>
  )
}

export default TopManagement
