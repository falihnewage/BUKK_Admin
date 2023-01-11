const PLUGIN_ID = 'draw'
const getDrawOptions = (Chart) => {
  return Chart.options.plugins[PLUGIN_ID]
}
const DrawChartPlugin = {
  id: PLUGIN_ID,

  afterDatasetDraw: (Chart) => {
    const options = getDrawOptions(Chart)
    if (typeof options.onAfterDraw === 'function') {
      options.onAfterDraw(Chart)
    }
  },
}
export default DrawChartPlugin
