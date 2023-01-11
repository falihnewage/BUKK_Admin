import { Box } from '@mui/material'
import Header from '@Components/Header'
import SideNav from '@Components/SideNav'

const Layout = ({ children }) => (
  <Box sx={{ display: 'flex' }}>
    <Box>
      <SideNav />
    </Box>
    <Box sx={{ width: '100%' }}>
      <Header />
      <Box sx={{ m: 3 }}>{children}</Box>
    </Box>
  </Box>
)

export default Layout
