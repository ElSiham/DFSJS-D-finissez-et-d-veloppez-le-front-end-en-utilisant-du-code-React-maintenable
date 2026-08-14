import type { Participation } from "../models/OlympicsData"

const alphabeticalSort = <T extends { name: string }>(items: T[]) => {
  return [...items].sort((a, b) =>
    a.name.localeCompare(b.name)
  )
}

const totalMedals = (participations: Participation[]) => participations.reduce(
  (sum, p) => sum + p.medalsCount,
  0,
)

const totalAthletes = (participations: Participation[]) => participations.reduce(
  (sum, p) => sum + p.athleteCount,
  0,
)

export { alphabeticalSort, totalMedals, totalAthletes }
