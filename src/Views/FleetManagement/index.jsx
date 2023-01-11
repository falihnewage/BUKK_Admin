import React, { useState } from 'react'
import { Box, FormControl, Grid, MenuItem, Select, Typography } from '@mui/material'
import CustomerRequest from './views/CustomerRequest'
import Map from './views/Map'
import FleetViewer from './views/FleetViewer'
import Statistics from './views/Statistics'

const FLEETS = [{ value: 'johannesburg', label: 'Johannesburg' }]

const FleetManagement = () => {
  const [fleet, setFleet] = useState(FLEETS[0].value)

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={9}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: 'bold' }}>Fleet Management</Typography>
          <FormControl variant='standard' sx={{ minWidth: 150 }}>
            <Select
              value={fleet}
              sx={{ color: 'grey.400', borderBottom: 0 }}
              onChange={(e) => setFleet(e.target.value)}
            >
              {FLEETS.map((item) => (
                <MenuItem key={`tp-${item.value}`} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item sx={12} md={4} xs={12}>
            <CustomerRequest />
          </Grid>
          <Grid item sx={12} md={8} xs={12}>
            <Map />
          </Grid>
        </Grid>
        <FleetViewer />
      </Grid>
      <Grid item xs={12} md={3}>
        <Statistics />
      </Grid>
    </Grid>
  )
}

export default FleetManagement
