import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import Grid from '@mui/material/Grid'
import Badge from '@mui/material/Badge'
import DonutchartMakerChecker from './DonutchartMakerChecker'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import IconButton from '@mui/material/IconButton'

const MakerChanges = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#41449B',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography sx={{ textAlign: 'center' }}>Maker Chackers</Typography>

      <Grid container columns={2} alignItems='center' justifyContent='center'>
        <DonutchartMakerChecker />
        <Grid item>
          <IconButton color='inherit'>
            <Badge
              badgeContent={2}
              sx={{
                '& .MuiBadge-badge': {
                  color: 'lightgreen',
                  backgroundColor: 'red',
                  position: 'absolute',
                  right: 25,
                  top: 10,
                },
              }}
            >
              <NotificationsOutlinedIcon
                sx={{
                  color: 'yellow',
                  fontSize: 61,
                }}
              />
            </Badge>
          </IconButton>
        </Grid>
      </Grid>
      <Grid container justifyContent='center'>
        <Box
          sx={{
            backgroundColor: '#F1CA2D',
            color: 'black',
            height: 26,
            width: 152,
            textAlign: 'center',
            mb: 1,
            borderRadius: 0,
            justifyContent: 'center',
            alignItems: 'center',
            mt: 1,
          }}
        >
          View ALL
        </Box>
      </Grid>
    </Box>
  )
}

export default MakerChanges
