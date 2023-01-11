import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import Card from '../components/Card'

const Welcome = () => (
  <Card>
    <Grid container spacing={2}>
      <Grid item xs={12} md={9}>
        <Typography sx={{ fontWeight: 'bold' }}>Welcome to the eBUKK Tickets Overview</Typography>
        <Typography variant='caption'>
          The tickets for eBUKK Customers, Drivers and eBUKK Business must be closed within a 20 minute period due to
          its emergency{' '}
        </Typography>
      </Grid>
      <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button variant='contained' color='warning' sx={{ textTransform: 'none', borderRadius: 0 }}>
          <Typography sx={{ fontWeight: 'bold', color: 'custom.grey', px: 1 }}>13,547 Tickets</Typography>
        </Button>
      </Grid>
    </Grid>
  </Card>
)

export default Welcome
