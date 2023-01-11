import React from 'react'
import { Box, Typography } from '@mui/material'

const Numberofstaff = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#058B23',
      }}
    >
      <Typography sx={{ color: 'white', textAlign: 'center' }}>Total Number of Staff</Typography>
      <Typography variant='h5' sx={{ color: 'white', textAlign: 'center', mt: 2, fontWeight: 'bold' }}>
        800
      </Typography>
    </Box>
  )
}

export default Numberofstaff
