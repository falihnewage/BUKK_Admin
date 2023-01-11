import React from 'react'
import { Badge, Box } from '@mui/material'

const DashboardCard = ({ badge = false, children }) => {
  return (
    <Badge color='error' badgeContent=' ' invisible={!badge} sx={{ width: '100%', height: '100%' }}>
      <Box sx={{ width: '100%', backgroundColor: 'primary.light', p: 2 }}>{children}</Box>
    </Badge>
  )
}

export default DashboardCard
