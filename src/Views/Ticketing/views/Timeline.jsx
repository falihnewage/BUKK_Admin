import React from 'react'
import { Box, Typography, TextField } from '@mui/material'
import Card from '../components/Card'
import 'chartjs-adapter-date-fns'
import { differenceInDays } from 'date-fns'
import GanttChart from '../components/GanttChart'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'
const phases = [
  {
    name: 'OTP issues',
    startDate: '2020-10-7',
    endDate: '2021-01-15',
    taskprogress: 20,
  },
  {
    name: 'Login issues',
    startDate: '2021-02-15',
    endDate: '2021-12-7',
    taskprogress: 50,
  },
  {
    name: 'Sign up issues',
    startDate: '2021-04-23',
    endDate: '2021-09-01',
    taskprogress: 20,
  },
]

const phasesToDatesets = (phases, refDate) => [
  {
    backgroundColor: ['#41AD4A', '#F1CA2D', '#41449B'],
    borderRadius: 15,

    barPercentage: 0.4,
    data: phases.map((phase) => differenceInDays(new Date(phase.startDate), refDate)),
  },
  {
    backgroundColor: ['#41AD4A59', '#F1CA2D54', '#41449B4A'],
    barPercentage: 0.4,
    borderRadius: 15,
    data: phases.map((phase) => differenceInDays(new Date(phase.endDate), new Date(phase.startDate))),
  },
]

const phasesToLabels = (phases) => phases.map((phase) => phase.name)
const completedTask = (phases) => phases.map((phase) => phase.taskprogress)

const Timeline = () => {
  const refDate = new Date()

  const [value, setValue] = React.useState([null, null])

  return (
    <Card>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography>Tickets Timeline</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangePicker
            calendars={1}
            value={value}
            onChange={(newValue) => {
              setValue(newValue)
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField
                  {...startProps}
                  sx={{ width: 150 }}
                  id='standard-basic'
                  label='Start day'
                  variant='standard'
                />
                <Box sx={{ mx: 1 }}> to </Box>
                <TextField {...endProps} sx={{ width: 150 }} id='standard-basic' label='End day' variant='standard' />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
      </Box>

      <GanttChart
        data={{
          datasets: phasesToDatesets(phases, refDate),
          labels: phasesToLabels(phases),
          tasks: completedTask(phases),
        }}
        refDate={refDate}
      />
    </Card>
  )
}

export default Timeline
