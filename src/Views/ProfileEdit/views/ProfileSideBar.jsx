import { EditOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const ProfileSideBar = () => {
  const NAVLINKS = [
    {
      value: 'profile-edit',
      label: 'Edit Profile',
      icon: <EditOutlined />,
    },
    {
      value: 'profile-edit',
      label: 'Trips',
      icon: <EditOutlined />,
    },
    {
      value: 'profile-edit',
      label: 'Payment Method',
      icon: <EditOutlined />,
    },
    {
      value: 'profile-edit',
      label: 'Tickets',
      icon: <EditOutlined />,
    },
    {
      value: 'profile-edit',
      label: 'Transactions',
      icon: <EditOutlined />,
    },
  ]
  return (
    <>
      <Box sx={{ height: '100%', minHeight: '500px', paddingTop: '8px', borderRight: '3px solid #251a40' }}>
        {NAVLINKS.map((link) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              padding: '6px 30px 5px 20px',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <Box>{link.icon}</Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #FFFFFF70',
                width: '100%',
                marginLeft: '20px',
                padding: '0 12px 4px 0',
              }}
            >
              <Typography>{link.label}</Typography>
              <Box sx={{ fontSize: '22px' }}>
                <Link href={`${link.value}`}>{'>'}</Link>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default ProfileSideBar
