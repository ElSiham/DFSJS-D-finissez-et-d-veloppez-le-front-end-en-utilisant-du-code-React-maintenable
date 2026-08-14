import { Outlet } from 'react-router-dom'

import useData from '../hooks/useData'
import PageLoader from '../components/PageLoader'

const AppLayout = () => {
  const { olympicsData, status } = useData()

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {status === 'success' ?
        <Outlet context={{ olympicsData }} /> :
        <PageLoader status={status} />
      }
    </div>
  )
}

export default AppLayout
