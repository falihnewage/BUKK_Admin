import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Badge, Box, Hidden, Typography } from '@mui/material'
import { NAVS } from 'src/Constants/Nav'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import SideNavContext from 'src/Contexts/SideNavContext'

export const NavItems = ({ opened = true, isAuthenticated }) => {
  const router = useRouter()
  const { pathname } = router
  const path = pathname.split('/')[1]

  // if (!isAuthenticated) {
  //   router.push('/login')
  // }

  return (
    <>
      {NAVS.map((nav) => {
        const active = nav.value === path
        return (
          <Link href={`/${nav.value}`} key={`nv-${nav.value}`}>
            <Box
              sx={{
                backgroundColor: active ? 'primary.light' : 'inherit',
                display: 'flex',
                alignItems: 'center',
                px: 2,
                py: 1.5,
                cursor: 'pointer',
              }}
            >
              {nav.icon}
              {opened && (
                <Box sx={{ minWidth: 180, display: 'flex', alignItems: 'center' }}>
                  <Badge color='error' variant='dot' invisible={!nav.badge}>
                    <Typography sx={{ fontWeight: active ? 700 : 400, mx: 1 }}>{nav.label}</Typography>
                  </Badge>
                  {nav.value !== 'my-account' && <ArrowForwardIosIcon sx={{ fontSize: 12, ml: 'auto' }} />}
                </Box>
              )}
            </Box>
          </Link>
        )
      })}
    </>
  )
}

const SideNav = () => {
  const { opened, setOpened, isAuthenticated } = useContext(SideNavContext)

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.dark',
        position: 'sticky',
        top: 0,
      }}
    >
      <Hidden mdDown>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2,
          }}
        >
          {opened && (
            <>
              <img src='/logo_bukk.svg' width='65' />
              <Typography sx={{ fontWeight: 700 }}>eBUKK</Typography>
            </>
          )}
          <Box sx={{ cursor: 'pointer' }} onClick={() => setOpened(!opened)}>
            {opened ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
          </Box>
        </Box>
        <NavItems opened={opened} isAuthenticated={isAuthenticated} />
      </Hidden>
    </Box>
  )
}

export default SideNav
