import React from 'react'
import { Box, Typography, Grid, Button, Divider } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import EmployeesTable from '../components/EmployeesTable'
import CountriesTable from '../components/CountriesTable'
import Chip from '@mui/joy/Chip'
import { CssVarsProvider } from '@mui/joy/styles'

const StaffAdmininstrationCard = () => {
  return (
    <Box sx={{ backgroundColor: '#2E2957', ml: 2 }}>
      <Box sx={{ ml: 1, display: 'flex', backgroundColor: '#2E2957' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={3}>
            <Typography sx={{ color: 'white', fontSize: 16, textAlign: 'center', py: 1 }}>
              Staff Admininstration
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={6}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 0.5,
            }}
          >
            <CssVarsProvider>
              <Chip color='warning' size='small' sx={{ fontSize: 8, p: 1, width: 40, height: 10, mt: 1 }}>
                AllStaff
              </Chip>
              <Chip size='small' sx={{ fontSize: 10, p: 1, width: 50, height: 10, mt: 1, backgroundColor: '#201633' }}>
                TOP MGT
              </Chip>
              <Chip
                color='#201633'
                size='small'
                sx={{ fontSize: 8, p: 1, width: 65, height: 10, mt: 1, backgroundColor: '#201633' }}
              >
                Admininstration
              </Chip>
              <Chip
                color='#201633'
                size='small'
                sx={{ fontSize: 8, p: 1, width: 40, height: 10, mt: 1, backgroundColor: '#201633' }}
              >
                Finance
              </Chip>
              <Chip
                color='#201633'
                size='small'
                sx={{ fontSize: 8, p: 1, width: 40, height: 10, mt: 1, backgroundColor: '#201633' }}
              >
                Design
              </Chip>
              <Chip
                color='#201633'
                size='small'
                sx={{ fontSize: 8, p: 1, width: 40, height: 10, mt: 1, backgroundColor: '#201633' }}
              >
                Frontend
              </Chip>
              <Chip
                color='#201633'
                size='small'
                sx={{ fontSize: 8, p: 1, width: 40, height: 10, mt: 1, backgroundColor: '#201633' }}
              >
                Backend
              </Chip>
            </CssVarsProvider>
          </Grid>
          <Grid item xs={12} md={4} lg={3} sx={{ mt: 1, justifyContent: 'center' }}>
            <Button
              color='warning'
              variant='contained'
              startIcon={<AddCircleOutlineOutlinedIcon />}
              sx={{
                textTransform: 'none',
                color: 'custom.grey',
                borderRadius: 0,
                float: 'right',
                mr: 1,
                width: 150,
              }}
            >
              <Typography sx={{ fontSize: 10 }}>Add New Staff</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ ml: 1, mt: 1 }}>
        <EmployeesTable />
      </Box>

      <Divider sx={{ mt: 0.5 }} />

      <Box sx={{ ml: 1, mt: 3 }}>
        <Button
          variant='contained'
          color='warning'
          startIcon={<AddCircleOutlineOutlinedIcon />}
          sx={{
            textTransform: 'none',
            color: 'custom.grey',
            borderRadius: 0,
            float: 'right',
            width: 150,
            mr: 1,
          }}
        >
          <Typography sx={{ fontSize: 10 }}>Add New Country</Typography>
        </Button>
      </Box>

      <Box sx={{ mt: 7 }}>
        <CountriesTable />
      </Box>
    </Box>
  )
}

export default StaffAdmininstrationCard
