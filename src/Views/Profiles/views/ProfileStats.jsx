import { ArrowUpward } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const ProfileStats = () => {
  const STATISTICS = [
    {
      name: 'total profiles',
      value: 8007,
      percentage: 58,
    },
    {
      name: 'customer logins today',
      value: 3000,
      percentage: 90,
    },
    {
      name: 'driver logins today',
      value: 8007,
      percentage: 3,
    },
    {
      name: 'BUKK Business logins today',
      value: 2007,
      percentage: 100,
    },
  ]
  return (
    <>
      <Box sx={{ backgroundColor: 'box.purple', display: 'flex', flexFlow: 'row', overflowX: 'scroll' }}>
        {STATISTICS.map((statistic) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              borderRight: '1px solid #FFFFFF21',
              padding: '18px 20px 4px 41px',
              width: '100%',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Typography sx={{ fontSize: '36px', fontWeight: '500' }}>{statistic.value}</Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  color: 'custom.green',
                  marginLeft: '4px',
                }}
              >
                <ArrowUpward sx={{ fontSize: '20px' }} />
                <Typography sx={{ fontSize: '12px' }}>{statistic.percentage}%</Typography>
              </Box>
            </Box>
            <Box>
              <Typography sx={{ fontSize: '12px', fontWeight: '300', lineHeight: '24px', textTransform: 'capitalize' }}>
                {statistic.name}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default ProfileStats
