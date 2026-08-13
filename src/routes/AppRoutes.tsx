import { Routes, Route } from 'react-router-dom'

import AppLayout from '../layouts/AppLayout.tsx'

import CountryPage from '../pages/CountryPage.tsx'
import DashboardPage from '../pages/DashboardPage.tsx'

const AppRoutes = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/country/:id" element={<CountryPage />} />
    </Route>
  </Routes>
)

export default AppRoutes
