import React from 'react'
import { Box, Typography } from '@mui/material'

const CountView = ({ backgroundColor = 'info.main', count }) => (
  <Box
    sx={{
      width: 50,
      maxWidth: 50,
      height: 50,
      maxHeight: 50,
      backgroundColor: backgroundColor,
      borderRadius: 25,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Typography>{count}</Typography>
  </Box>
)

export default CountView
