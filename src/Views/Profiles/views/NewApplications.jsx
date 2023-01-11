import { NotificationsNone } from '@mui/icons-material'
import { Badge, Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'

const NewApplications = () => {
  const styles = {
    typography: {
      fontSize: '16px',
      fontWeight: '700',
      lineHeight: '24px',
    },
    notificationsBox: {
      display: 'flex',
      flexDirection: 'row',
      margin: '10px 0',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    notificationIcon: {
      fontSize: '70px',
      color: '#F1CA2D',
      padding: 0,
    },
    notificationBadge: {
      left: '44px',
      top: '-22px',
    },
    flex: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    button: {
      width: '131px',
      height: '26px',
      backgroundColor: '#F1CA2D',
      textTransform: 'capitalize',
      color: '#354869',
      marginTop: '10px',
    },
  }
  return (
    <>
      <Box sx={{ backgroundColor: 'box.purple', display: 'flex', flexDirection: 'column', padding: '3px 17px' }}>
        <Box sx={{ marginBottom: '11px' }}>
          <Typography style={styles.typography}>Profiles</Typography>
        </Box>
        <Box sx={{ backgroundColor: 'custom.purple' }}>
          <Typography sx={{ textAlign: 'center', textTransform: 'uppercase' }} style={styles.typography}>
            New Applications
          </Typography>
        </Box>
        <Box style={styles.notificationsBox}>
          <IconButton sx={{ padding: '0' }}>
            <Badge badgeContent='24' overlap='circular' style={styles.notificationBadge} color='badge' />
            <NotificationsNone style={styles.notificationIcon} />
          </IconButton>
          <Box style={styles.flex}>
            <Typography sx={{ fontSize: '12px', fontWeight: '400', lineHeight: '18px' }}>
              Driver Applications
            </Typography>
            <Button style={styles.button}>View</Button>
          </Box>
        </Box>
        <Box style={styles.notificationsBox}>
          <IconButton sx={{ padding: '0' }}>
            <Badge badgeContent='24' overlap='circular' style={styles.notificationBadge} color='badge' />
            <NotificationsNone style={styles.notificationIcon} />
          </IconButton>
          <Box style={styles.flex}>
            <Typography sx={{ fontSize: '12px', fontWeight: '400', lineHeight: '18px' }}>
              BUKK Business Applications
            </Typography>
            <Button style={styles.button}>View</Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default NewApplications
