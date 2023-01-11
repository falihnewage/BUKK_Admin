import React, { useState } from 'react'
import { Box, Button, Divider, FormControl, Grid, MenuItem, Select, Typography } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import SearchIcon from '@mui/icons-material/Search'
import Card from './components/Card'
import Welcome from './views/Welcome'
import Overview from './views/Overview'
import Overdue from './views/Overdue'
import Timeline from './views/Timeline'
import TicketsList from './views/TicketsList'

const TYPES = [
  { label: 'All Tickets', value: 'all' },
  { label: 'Completed', value: 'completed' },
  { label: 'Pending', value: 'pending' },
  { label: 'In Progress', value: 'inprogress' },
]

const Ticketing = () => {
  const [type, setType] = useState('all')

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={9}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography sx={{ fontWeight: 'bold' }}>Ticketing Panel</Typography>
          <Button
            variant='contained'
            color='warning'
            startIcon={<AddCircleOutlineOutlinedIcon />}
            sx={{ textTransform: 'none', color: 'custom.grey', borderRadius: 0, px: 3 }}
          >
            <Typography sx={{ fontWeight: 'bold', mx: { md: 5 } }}>New Ticket</Typography>
          </Button>
        </Box>
        <Welcome />
        <Grid container spacing={2} sx={{ mt: 0, mb: 2 }}>
          <Grid item xs={12} md={4} lg={3}>
            <Overview />
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Overdue />
          </Grid>
        </Grid>
        <Timeline />
      </Grid>
      <Grid item xs={12} md={3}>
        <Box sx={{ backgroundColor: 'custom.purple', display: 'flex', justifyContent: 'space-between', p: 2 }}>
          <Typography sx={{ fontWeight: 'bold' }}>Ticket List</Typography>
          <AddBoxOutlinedIcon sx={{ color: 'grey.500' }} />
        </Box>
        <Card>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <FormControl variant='standard' sx={{ minWidth: 150 }}>
              <Select
                value={type}
                sx={{ color: 'grey.400', borderBottom: 0 }}
                onChange={(e) => setType(e.target.value)}
              >
                {TYPES.map((type) => (
                  <MenuItem key={`tp-${type.value}`} value={type.value}>
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <SearchIcon />
          </Box>
          <Divider sx={{ my: 2 }} />
          <TicketsList />
        </Card>
      </Grid>
    </Grid>
  )
}

export default Ticketing
