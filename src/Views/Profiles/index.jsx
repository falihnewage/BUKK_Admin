import React from 'react'
import { Grid } from '@mui/material'
import NewApplications from './views/NewApplications'
import ProfilesGraph from './views/ProfilesGraph'
import ProfileStats from './views/ProfileStats'
import ProfilesTable from './views/ProfilesTable'

const Profiles = () => (
  <Grid container spacing={2}>
    <Grid item xs={12} md={12} sx={12}>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item sx={12} md={3} xs={12}>
          <NewApplications />
        </Grid>
        <Grid item sx={12} md={9} xs={12}>
          <ProfilesGraph />
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} md={12} sx={12}>
      <ProfileStats />
    </Grid>
    <Grid item xs={12} md={12} sx={12}>
      <ProfilesTable />
    </Grid>
  </Grid>
)

export default Profiles
