import { useParams, useOutletContext } from 'react-router-dom'

import { totalMedals, totalAthletes } from '../utils/calcUtils'
import { lineChartData, lineChartOptions } from '../utils/chartUtils'
import type { OlympicsData, Country } from '../models/OlympicsData'

import CardManager from '../components/CardManager'
import ChartManager from '../components/ChartManager'
import Header from '../components/Header'
import PageLoader from '../components/PageLoader'

const CountryPage = () => {
  const { id } = useParams()
  const { olympicsData } = useOutletContext<{ olympicsData: OlympicsData }>()

  const country: Country | undefined = olympicsData.find((c: Country) => c.id === Number(id))

  if (!country) {
    return <PageLoader status='error' />
  }

  const totalParticipations = country.participations.length
  const cards = [
    {
      title: 'Participations',
      text: totalParticipations.toString()
    },
    {
      title: 'Total médailles',
      text: totalMedals(country.participations).toString()
    },
    {
      title: 'Total athlètes',
      text: totalAthletes(country.participations).toString()
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <Header headTitle={country.name} />

      <CardManager cards={cards} />
      <ChartManager
        data={lineChartData(country.participations)}
        options={lineChartOptions}
        type="line"
      />

      <div className="text-sm text-gray-400">
        <p>Données des 5 dernières éditions des Jeux Olympiques</p>
      </div>
    </div>
  )
}

export default CountryPage
