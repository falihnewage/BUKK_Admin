import { BarController, BarElement, CategoryScale, LinearScale, Plugin } from 'chart.js'
import useChart from './useChart'

const BarChart = ({ config, plugins = [], ...props }) => {
  const { Chart } = useChart({
    config: (ctx) => ({
      ...(typeof config === 'function' ? config(ctx) : config),
      type: 'bar',
    }),
    plugins: [BarController, BarElement, CategoryScale, LinearScale, ...plugins],
  })
  return <Chart {...props} />
}

export default BarChart
