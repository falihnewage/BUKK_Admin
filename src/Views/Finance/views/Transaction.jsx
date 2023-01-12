import { Box, Typography, Grid, Button } from '@mui/material'
import TransactionsChart from '../components/TransactionsChart'
import Driverwallets from '../components/Driverwallets'
import WorkIcon from '@mui/icons-material/Work'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import Person from '@mui/icons-material/Person'
// import SwitchSelector from 'react-switch-selector'
import dynamic from 'next/dynamic'
const SwitchSelector = dynamic(() => import('react-switch-selector'), {
  ssr: false,
})
export default function Transaction() {
  const options = [
    {
      label: 'Daily',
      value: 'daily',
      selectedBackgroundColor: '#F1CA2D',
      fontColor: '#5DD490',
      //border:"1px solid black"
    },
    {
      label: 'Monthly',
      value: 'monthly',
      selectedBackgroundColor: '#F1CA2D',
      fontColor: '#EC634C',
    },
    {
      label: 'Yearly',
      value: 'yearly',
      selectedBackgroundColor: '#F1CA2D',
      fontColor: '#EC634C',
    },
  ]
  const onChange = (newValue) => {
    console.log(newValue)
  }

  const initialSelectedIndex = options.findIndex(({ value }) => value === 'bar')

  return (
    <Box
      sx={{
        backgroundColor: '#2E2957',
        ml: 1,
      }}
    >
      <Box sx={{ mb: 0.8 }}>
        <Grid container spacing={2}>
          <Grid lg={6}>
            <Typography sx={{ ml: 3 }}>Transactions</Typography>
          </Grid>
          <Grid lg={6}>
            <Box
              sx={{
                mr: 1,
                mt: 1,
              }}
            >
              <SwitchSelector
                onChange={onChange}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={'#353b48'}
                fontSize={12}
                selectedFontColor={'#f5f6fa'}
                wrapperBorderRadius={10}
                optionBorderRadius={10}
                border='1px solid #E6E6E6'
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container columns={3} spacing={7} justifyContent='center'>
        <Grid item display='flex' spacing={2}>
          <WorkIcon
            sx={{
              borderColor: '#000',
              color: '#B16903',
            }}
          />
          <Typography>Business</Typography>
        </Grid>
        <Grid item display='flex' spacing={2}>
          <LocalShippingIcon
            sx={{
              color: '#4FD91E',
            }}
          />
          <Typography>Driver</Typography>
        </Grid>
        <Grid item display='flex' spacing={2}>
          <Box>
            <Person
              sx={{
                color: '#F12D7F',
              }}
            />
          </Box>
          <Typography>Customers</Typography>
        </Grid>
      </Grid>
      <Grid container columns={3} spacing={8} justifyContent='center'>
        <Grid item display='flex' spacing={2}>
          <Typography
            sx={{
              textAlign: 'center',
              mt: 1,
              ml: 1,
              color: '#FFA500',
            }}
          >
            R 8,890.04
          </Typography>
        </Grid>
        <Grid item display='flex' spacing={2}>
          <Typography
            sx={{
              textAlign: 'center',
              mt: 1,
              ml: 1,
              color: '#4FD91E',
            }}
          >
            R 8,890.04
          </Typography>
        </Grid>
        <Grid item display='flex' spacing={2}>
          <Typography
            sx={{
              textAlign: 'center',
              mt: 1,
              ml: 2,
              color: '#F12D7F',
            }}
          >
            R 8,890.04
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ mt: 2 }}>
        <TransactionsChart />
      </Box>
      <Box>
        <Driverwallets />
      </Box>
    </Box>
  )
}
