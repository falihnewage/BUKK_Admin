import React from 'react'
import { Box, Divider, Typography } from '@mui/material'

const TICKETS = [
  {
    id: 0,
    label: 'OTP not working',
    description: 'Change the OTP length to 4 characcters and allow it to work when it starts with a zero',
    status: 'completed',
    date: 'Today',
  },
  {
    id: 1,
    label: 'Could not sign up',
    description: 'Change the OTP length to 4 characcters and allow it to work when it starts with a zero',
    status: 'pending',
    date: 'Yesterday',
  },
  {
    id: 2,
    label: 'Password not working',
    description: 'Change the OTP length to 4 characcters and allow it to work when it starts with a zero',
    status: 'inprogress',
    date: 'Yesterday',
  },
  {
    id: 3,
    label: 'OTP Not Working',
    description: 'Change the OTP length to 4 characcters and allow it to work when it starts with a zero',
    status: 'completed',
    date: '3 days ago',
  },
  {
    id: 4,
    label: 'OTP Not Working',
    description: 'Change the OTP length to 4 characcters and allow it to work when it starts with a zero',
    status: 'completed',
    date: '1 week ago',
  },
]

const STATUS = {
  completed: {
    label: 'COMPLETED',
    borderColor: '#3C854E',
    background: '#376651',
    fontColor: '#FFFFFF',
  },
  pending: {
    label: 'PENDING',
    borderColor: '#962B6C',
    background: '#4E295D',
    fontColor: '#F12D7F',
  },
  inprogress: {
    label: 'IN-PROGRESS',
    borderColor: '#A68C3D',
    background: '#6B5B4A',
    fontColor: '#F1CA2D',
  },
}

const Status = ({ status }) => {
  const { label, borderColor, background, fontColor } = STATUS[status]

  return (
    <Box
      sx={{
        minWidth: 150,
        backgroundColor: background,
        borderColor: borderColor,
        color: fontColor,
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 16,
        px: 1,
        py: 0.5,
      }}
    >
      <Typography variant='caption' sx={{ fontWeight: 600 }}>
        {label}
      </Typography>
    </Box>
  )
}

const TicketsList = () => (
  <>
    {TICKETS.map((ticket) => (
      <Box key={`tk-${ticket.id}`}>
        <Box>
          <Typography sx={{ fontWeight: 'bold' }}>{ticket.label}</Typography>
          <Typography variant='caption' sx={{ color: 'grey.400' }}>
            {ticket.description}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Status status={ticket.status} />
            <Typography variant='caption' sx={{ fontWeight: 600, color: 'grey.600' }}>
              {ticket.date}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
      </Box>
    ))}
  </>
)

export default TicketsList
