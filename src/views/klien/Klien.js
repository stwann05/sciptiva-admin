import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'

const Klien = ({ teams = [] }) => {
  return (
    <div style={{ padding: 16 }}>
      <CRow className="g-4">
        {teams.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#6c757d', padding: 20, width: '100%' }}>
            Belum ada data tim
          </div>
        ) : (
          teams.map((team, idx) => (
            <CCol xs={12} key={idx}>
              <CCard className="shadow">
                <CCardHeader>{team.name}</CCardHeader>
                <CCardBody>
                  {team.projects.length === 0 ? (
                    <div style={{ textAlign: 'center', color: '#6c757d', padding: 20 }}>
                      Belum ada klien untuk tim ini
                    </div>
                  ) : (
                    <CTable bordered hover responsive>
                      <CTableHead color="light">
                        <CTableRow>
                          <CTableHeaderCell>#</CTableHeaderCell>
                          <CTableHeaderCell>Nama Klien</CTableHeaderCell>
                          <CTableHeaderCell>Judul Proyek</CTableHeaderCell>
                          <CTableHeaderCell>Status</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        {team.projects.map((project, i) => (
                          <CTableRow key={i}>
                            <CTableHeaderCell>{i + 1}</CTableHeaderCell>
                            <CTableDataCell>{project.client}</CTableDataCell>
                            <CTableDataCell>{project.title}</CTableDataCell>
                            <CTableDataCell>{project.status}</CTableDataCell>
                          </CTableRow>
                        ))}
                      </CTableBody>
                    </CTable>
                  )}
                </CCardBody>
              </CCard>
            </CCol>
          ))
        )}
      </CRow>
    </div>
  )
}

export default Klien
