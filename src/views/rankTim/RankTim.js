// src/views/rankTim/RankTim.js
import React from 'react'
import { CCard, CCardBody, CCardHeader, CRow, CCol } from '@coreui/react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const teams = [
  { name: 'Tim Kuantitatif 1', value: 33.3, target: 290, color: '#f87171' },
  { name: 'Tim Kuantitatif 2', value: 13.3, target: 290, color: '#facc15' },
  { name: 'Tim Kualitatif', value: 10.6, target: 270, color: '#34d399' },
  { name: 'Tim Pendidikan', value: 10.3, target: 270, color: '#60a5fa' },
  { name: 'Tim Statistika', value: 1.4, target: 180, color: '#a78bfa' },
]

const RankTim = () => {
  return (
    <div style={{ padding: 16 }}>
      <CRow className="g-4">
        {teams.map((team, index) => {
          // safety: avoid negative remaining, avoid divide-by-zero
          const remaining = Math.max(0, team.target - team.value)
          const percent = team.target > 0 ? Math.min(100, (team.value / team.target) * 100) : 0
          const pieData = [
            { name: 'done', value: team.value },
            { name: 'rest', value: remaining },
          ]

          return (
            <CCol xs={12} md={6} lg={4} key={index}>
              <CCard
                className="shadow-lg rounded-3 border-0"
                style={{ borderTop: `6px solid ${team.color}` }}
              >
                <CCardHeader className="fw-bold" style={{ color: team.color, fontSize: '1.05rem' }}>
                  {team.name}
                </CCardHeader>
                <CCardBody>
                  {/* Wrapper with explicit height so ResponsiveContainer can size correctly */}
                  <div style={{ width: '100%', height: 150 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={60}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          <Cell key="cell-0" fill={team.color} />
                          <Cell key="cell-1" fill="#e5e7eb" />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div style={{ textAlign: 'center', marginTop: 8 }}>
                    <div style={{ color: 'var(--cui-body-color)', fontSize: 14 }}>
                      Jumlah Poin: <strong>{team.value}</strong>
                    </div>
                    <div style={{ color: 'var(--cui-body-color)', fontSize: 14 }}>
                      Target Poin: <strong>{team.target}</strong>
                    </div>
                    <div style={{ color: 'var(--cui-body-color)', fontSize: 14 }}>
                      Sisa Poin: <strong>{remaining}</strong>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div
                    style={{
                      background: 'var(--cui-secondary-bg)',
                      borderRadius: 9999,
                      height: 10,
                      marginTop: 12,
                    }}
                  >
                    <div
                      style={{
                        width: `${percent}%`,
                        height: '100%',
                        background: team.color,
                        borderRadius: 9999,
                        transition: 'width .5s ease',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      textAlign: 'right',
                      marginTop: 6,
                      color: 'var(--cui-secondary-color)',
                      fontSize: 12,
                    }}
                  >
                    {Math.round(percent)}%
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
          )
        })}
      </CRow>
    </div>
  )
}

export default RankTim
