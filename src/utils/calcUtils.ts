import type { Participation } from "../models/OlympicsData"

const totalMedals = (participations: Participation[]) => participations.reduce(
  (sum, p) => sum + p.medalsCount,
  0,
)

const totalAthletes = (participations: Participation[]) => participations.reduce(
  (sum, p) => sum + p.athleteCount,
  0,
)

export { totalMedals, totalAthletes }
