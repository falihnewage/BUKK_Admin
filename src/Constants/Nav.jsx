import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined'
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined'
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

export const NAVS = [
  {
    value: '',
    label: 'Dashboard',
    icon: <DashboardOutlinedIcon />,
    badge: false,
  },
  {
    value: 'administration',
    label: 'Administration',
    icon: <AdminPanelSettingsOutlinedIcon />,
    badge: false,
  },
  {
    value: 'management',
    label: 'Management',
    icon: <OtherHousesOutlinedIcon />,
    badge: false,
  },
  {
    value: 'fleet-management',
    label: 'Fleet Management',
    icon: <LocalShippingOutlinedIcon />,
    badge: false,
  },
  {
    value: 'ticketing',
    label: 'Ticketing',
    icon: <LocalActivityOutlinedIcon />,
    badge: true,
  },
  {
    value: 'tasking',
    label: 'Tasking',
    icon: <TaskAltOutlinedIcon />,
    badge: true,
  },
  {
    value: 'finance',
    label: 'Finance',
    icon: <AccountBalanceOutlinedIcon />,
    badge: false,
  },
  {
    value: 'profiles',
    label: 'Profiles',
    icon: <ManageAccountsOutlinedIcon />,
    badge: false,
  },
  {
    value: 'my-account',
    label: 'My Account',
    icon: <AccountCircleOutlinedIcon />,
    badge: false,
  },
]
