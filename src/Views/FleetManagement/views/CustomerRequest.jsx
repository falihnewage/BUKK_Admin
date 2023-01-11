import React from 'react'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const CustomerRequest = () => {
  const styles = {
    tableRow: {
      border: 0,
    },
    tableCell: {
      border: '1px solid #2E2957',
      padding: '3px 9px',
      fontSize: 12,
    },
  }
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'primary.light',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: '7px 8px',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'custom.purple',
            padding: '5px 8px',
            fontSize: '16px',
          }}
        >
          <Typography sx={{ fontSize: '16px', fontWeight: '700', lineHeight: '24px' }}>Customer Request</Typography>
        </Box>
        <Box>
          <TableContainer style={styles.Table}>
            <Table size='small'>
              <TableHead>
                <TableRow style={styles.tableRow}>
                  <TableCell style={styles.tableCell}>Customer</TableCell>
                  <TableCell style={styles.tableCell}>Pickup</TableCell>
                  <TableCell style={styles.tableCell}>Destination</TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ backgroundColor: 'primary.main', border: 'none' }}>
                <TableRow style={styles.tableRow}>
                  <TableCell style={styles.tableCell}>James P</TableCell>
                  <TableCell style={styles.tableCell}>Joh`burg</TableCell>
                  <TableCell style={styles.tableCell}>Durban</TableCell>
                </TableRow>
                <TableRow sx={{ border: 'primary.main' }}>
                  <TableCell style={styles.tableCell}>James P</TableCell>
                  <TableCell style={styles.tableCell}>Joh`burg</TableCell>
                  <TableCell style={styles.tableCell}>Durban</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  )
}

export default CustomerRequest
