import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Drawer, Hidden, Typography } from '@mui/material'
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'
import { NAVS } from 'src/Constants/Nav'
import { NavItems } from './SideNav'

const Header = () => {
  const router = useRouter()
  const { pathname } = router
  const path = pathname.split('/')[1]
  const nav = NAVS.find((e) => e.value === path)

  const [opened, setOpened] = useState(false)

  return (
    <>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          backgroundColor: 'background.main',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 3,
          py: 2,
          zIndex: 1100,
        }}
      >
        <Hidden mdDown>
          <Typography sx={{ fontWeight: 700 }}>{nav?.label}</Typography>
        </Hidden>
        <Hidden mdUp>
          <MenuIcon onClick={() => setOpened(true)} />
        </Hidden>
        <Box
          sx={{
            backgroundColor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            borderRadius: 25,
            px: 3,
            py: 1,
          }}
        >
          <img src='/images/contact.svg' width='18' />
          <Typography sx={{ fontWeight: 'bold', ml: 3, mr: 4 }}>Hello John</Typography>
          <PermContactCalendarOutlinedIcon sx={{ mr: 1 }} />
          <SearchIcon />
        </Box>
      </Box>
      <Drawer anchor='left' open={opened} onClose={() => setOpened(false)}>
        <Box sx={{ minHeight: '100vh', backgroundColor: 'background.dark' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
            <img src='/logo_bukk.svg' width='65' />
          </Box>
          <NavItems />
        </Box>
      </Drawer>
    </>
  )
}

export default Header
