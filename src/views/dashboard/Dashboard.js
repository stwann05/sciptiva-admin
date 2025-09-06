import React from 'react'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'

const Dashboard = () => {
  return (
    <div>
      <CCard className="mb-4">
        <CCardHeader>
          <h5>Dashboard</h5>
        </CCardHeader>
        <CCardBody>
          <p>Selamat datang di Dashboard 🚀</p>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default Dashboard
