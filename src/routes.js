import React from 'react'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Tim = React.lazy(() => import('./views/tim/Tim'))
const Karyawan = React.lazy(() => import('./views/karyawan/Karyawan'))
const Klien = React.lazy(() => import('./views/klien/Klien'))
const RankTim = React.lazy(() => import('./views/rankTim/RankTim'))

const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/tim', name: 'Tim', element: Tim },
  { path: '/karyawan', name: 'Karyawan', element: Karyawan },
  { path: '/klien', name: 'Klien', element: Klien },
  { path: '/rank-tim', name: 'Rank Tim', element: RankTim },
]

export default routes
