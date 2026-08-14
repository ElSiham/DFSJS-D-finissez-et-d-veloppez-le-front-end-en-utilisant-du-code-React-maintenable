import type { ChartOptions } from 'chart.js'

import { totalMedals } from './calcUtils'

import type { OlympicsData, Country, Participation } from '../models/OlympicsData'

const pieChartData = (data: OlympicsData) => {
  return {
    labels: data.map((country: Country) => country.name),
    datasets: [
      {
        label: 'Total des médailles',
        data: data.map((country: Country) => totalMedals(country.participations)),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
}

const pieChartOptions = (callback: Function): ChartOptions<'pie'> => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    onHover: (_event, _elements) => {
      const target = _event.native?.target as HTMLElement

      if (target) {
        target.style.cursor = 'pointer'
      }
    },
    onClick: (_event, elements) => {
      callback(elements[0].index)
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: 'white',
        },
      },
    },
  }
}

const lineChartData = (participations: Participation[]) => {
  return {
    labels: participations.map((p) => p.year.toString()),
    datasets: [
      {
        label: 'Nombre de médailles',
        data: participations.map((p) => p.medalsCount),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3,
      },
    ],
  }
}

const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: 'white',
      },
    },
  },
  scales: {
    y: {
      ticks: {
        color: 'white',
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
    },
    x: {
      ticks: {
        color: 'white',
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
}

export { pieChartData, pieChartOptions, lineChartData, lineChartOptions }
