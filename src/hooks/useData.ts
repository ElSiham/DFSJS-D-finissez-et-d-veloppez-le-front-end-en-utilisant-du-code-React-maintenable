import { useState, useEffect } from 'react'

import type { OlympicsData } from '../models/OlympicsData'
import type { Status } from '../models/Status'
import data from '../data/olympicsData'

const useData = () => {
  const [olympicsData, setData] = useState<OlympicsData>(data)
  const [status, setStatus] = useState<Status>('loading')

  useEffect(() => {
    setTimeout(() => {
      setData(olympicsData)
      if (!olympicsData.length) setStatus('empty')
      else setStatus('success')
    }, 1000)
  }, [])

  return { olympicsData, status }
}

export default useData
