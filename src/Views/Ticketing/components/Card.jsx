import React from 'react'
import { Box } from '@mui/material'

const Card = ({ children, sx = '' }) => {
  return <Box sx={{ width: '100%', backgroundColor: 'primary.light', p: 2, ...sx }}>{children}</Box>
}

export default Card
