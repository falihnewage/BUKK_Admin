import { Chart, ChartConfiguration, ChartData, TimeScale } from 'chart.js'
import 'chartjs-adapter-date-fns'
import { format, addDays } from 'date-fns'
import BarChart from './BarChart'
import DrawChartPlugin from './DrawChartPlugin'

export default function GanttChart({ data, refDate }) {
  const config = {
    data,
    options: {
      plugins: {
        draw: {
          onAfterDraw: (chart) => {
            const { ctx, data } = chart
            ctx.fillStyle = '#fff'
            ctx.font = '700 14px Arial'
            ctx.textAlign = 'left'
            ctx.textBaseline = 'middle'
            chart.getDatasetMeta(0).data.forEach((bar, index) => {
              const label = data.labels[index]
              ctx.fillText(label, bar.x + 30, bar.y)
            })

            ctx.restore()
          },
        },
        legend: false,
        tooltip: false,
      },
      indexAxis: 'y',
      scales: {
        x: {
          position: 'top',
          stacked: true,
          grid: {
            color: '#fff',
            drawBorder: false,
            drawTicks: false,
          },
          ticks: {
            callback: (val) => format(addDays(refDate, val), 'PP'),
            color: '#fff',
            font: { weight: 'bold' },
            padding: 20,
          },
        },
        y: {
          stacked: true,
          grid: {
            color: 'transparent',
            drawBorder: false,
            drawTicks: true,
            display: false,
          },
          ticks: { display: false },
        },
      },
    },
  }
  return <BarChart height={45 * data.datasets[0].data.length} config={config} plugins={[DrawChartPlugin, TimeScale]} />
}
