import { Line, Pie } from 'react-chartjs-2'
import type { ChartData, ChartOptions } from 'chart.js'

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
} from 'chart.js'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
)

type ChartManagerProps =
  | {
    type: 'line'
    data: ChartData<'line'>
    options: ChartOptions<'line'>
  }
  | {
    type: 'pie'
    data: ChartData<'pie'>
    options: ChartOptions<'pie'>
  }

const ChartManager = ({ type, data, options }: ChartManagerProps) => {
  const renderChart = () => {
    switch (type) {
      case 'line':
        return <Line data={data} options={options} />

      case 'pie':
        return <Pie data={data} options={options} />

      default:
        return null
    }
  }

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
      <div className="h-100">
        {renderChart()}
      </div>
    </div>
  )
}

export default ChartManager
