import { useOutletContext } from 'react-router-dom'

import { pieChartData, pieChartOptions } from '../utils/chartUtils'
import type { OlympicsData } from '../models/OlympicsData'

import CardManager from '../components/CardManager'
import ChartManager from '../components/ChartManager'
import Header from '../components/Header'

const Dashboard = () => {
  const { olympicsData } = useOutletContext<{ olympicsData: OlympicsData }>()

  const totalParticipatingCountries = olympicsData ? olympicsData.length : 0
  const totalGamesEditions = 5
  const cards = [
    {
      title: 'Pays participants',
      text: totalParticipatingCountries.toString()
    },
    {
      title: 'Éditions des JO',
      text: totalGamesEditions.toString()
    }
  ]
  const headSubtitles = [
    'Bienvenue sur la page dédiée à l\'historique des Jeux Olympiques.',
    'Explorez les performances des pays au fil des années.'
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <Header
        headTitle="Historique des Jeux Olympiques - TéléSport"
        headSubtitle={headSubtitles}
      />

      <CardManager cards={cards} />
      <ChartManager
        data={pieChartData(olympicsData)}
        options={pieChartOptions}
        type="pie"
      />

      <div className="text-sm text-gray-400">
        <p>Cliquez sur un pays pour voir ses détails</p>
      </div>
    </div>
  )
}

export default Dashboard
