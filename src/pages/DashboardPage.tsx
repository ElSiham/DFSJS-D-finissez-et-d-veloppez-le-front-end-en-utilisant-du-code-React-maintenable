import { useOutletContext } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { pieChartData, pieChartOptions } from '../utils/chartUtils'
import { alphabeticalSort } from '../utils/calcUtils'
import type { OlympicsData } from '../models/OlympicsData'

import CardManager from '../components/CardManager'
import ChartManager from '../components/ChartManager'
import Header from '../components/Header'

const Dashboard = () => {
  const navigate = useNavigate()
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
  const sortedOlympicsData = alphabeticalSort(olympicsData)
  const toCountry = (index: number) => {
    const countryId = sortedOlympicsData[index].id
    navigate(`/country/${countryId}`)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Header
        headTitle="Historique des Jeux Olympiques - TéléSport"
        headSubtitle={headSubtitles}
      />

      <div className="flex flex-col lg:flex-row gap-2">
        <div className='flex-1'>
          <CardManager cards={cards} />
        </div>
        <div className='flex-1'>
          <ChartManager
            data={pieChartData(sortedOlympicsData)}
            options={pieChartOptions(toCountry)}
            type="pie"
          />
        </div>
      </div>

      <div className="text-sm text-gray-400 mt-2">
        <p>Cliquez sur un pays pour voir ses détails</p>
      </div>
    </div>
  )
}

export default Dashboard
