import React from 'react'
import { Grid, Typography } from '@mui/material'
import ProfileSideBar from './views/ProfileSideBar'
import CustomerProfile from './views/CustomerProfile'

const ProfileEdit = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} sx={12}>
        <Typography>Edit Profile</Typography>
      </Grid>
      <Grid item xs={12} md={12} sx={12}>
        <Grid container sx={{ backgroundColor: 'primary.light' }}>
          <Grid item xs={3}>
            <ProfileSideBar />
          </Grid>
          <Grid item xs={9}>
            <CustomerProfile />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProfileEdit
