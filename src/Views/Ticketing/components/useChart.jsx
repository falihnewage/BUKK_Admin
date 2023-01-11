import { Chart } from 'chart.js'
import { useLayoutEffect, useRef } from 'react'

const useChart = ({ config, plugins }) => {
  const chartRef = useRef()
  const canvasRef = useRef()
  useLayoutEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      Chart.register(...plugins)
      chartRef.current = new Chart(ctx, typeof config === 'function' ? config(ctx) : config)
    }
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
        chartRef.current = undefined
      }
    }
  }, [config, plugins])
  return {
    Chart(props) {
      return <canvas ref={canvasRef} {...props} />
    },
  }
}
export default useChart
