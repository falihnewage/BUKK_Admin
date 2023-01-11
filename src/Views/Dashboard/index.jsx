import React from 'react'
import { Grid, Typography } from '@mui/material'
import Tickets from './views/Tickets'
import Tasks from './views/Tasks'
import Countries from './views/Countries'
import Fleet from './views/Fleet'
import Ratings from './views/Ratings'
import Customers from './views/Customers'
import Drivers from './views/Drivers'
import Transactions from './views/Transactions'
import Profitability from './views/Profitability'
import ScheduledTrips from './views/ScheduledTrips'
import NewSignUps from './views/NewSignUps'

const Dashboard = () => (
  <>
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item xs={12} sm={6} md={6} lg={2.5}>
        <Tickets />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={2.5}>
        <Tasks />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={2.33}>
        <Countries />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={2.33}>
        <Fleet />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={2.33}>
        <Ratings />
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={5}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={12} lg={6}>
            <Customers />
          </Grid>
          <Grid item xs={12} sm={6} md={12} lg={6}>
            <Drivers />
          </Grid>
          <Grid item xs={12} sm={6} md={12} lg={6}>
            <Transactions />
          </Grid>
          <Grid item xs={12} sm={6} md={12} lg={6}>
            <Profitability />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={7}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ScheduledTrips />
          </Grid>
          <Grid item xs={12}>
            <NewSignUps />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </>
)

export default Dashboard
