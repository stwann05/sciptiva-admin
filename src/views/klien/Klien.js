// src/views/klien/Klien.js
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
} from '@coreui/react'

const Klien = () => {
  const data = [
    {
      nama: 'PT Nusantara',
      tim: 'Kuantitatif 1',
      analyst: 'Ivan',
      deadline: '2025-09-15',
      point: 85,
    },
    {
      nama: 'CV Maju Jaya',
      tim: 'Kualitatif',
      analyst: 'Xaviera',
      deadline: '2025-09-18',
      point: 90,
    },
    {
      nama: 'EduTech ID',
      tim: 'Pendidikan',
      analyst: 'Budi',
      deadline: '2025-09-20',
      point: 75,
    },
    {
      nama: 'Statistika Corp',
      tim: 'Statistika',
      analyst: 'Siti',
      deadline: '2025-09-22',
      point: 88,
    },
  ]

  return (
    <CCard className="mb-4 shadow-sm border-0">
      <CCardHeader className="fw-bold bg-primary text-white">Daftar Klien</CCardHeader>
      <CCardBody>
        <CTable hover responsive bordered align="middle">
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell>Nama Klien</CTableHeaderCell>
              <CTableHeaderCell>Tim</CTableHeaderCell>
              <CTableHeaderCell>Analyst</CTableHeaderCell>
              <CTableHeaderCell>Deadline</CTableHeaderCell>
              <CTableHeaderCell>Point</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data.map((item, index) => (
              <CTableRow key={index}>
                <CTableDataCell className="fw-semibold">{item.nama}</CTableDataCell>
                <CTableDataCell>{item.tim}</CTableDataCell>
                <CTableDataCell>{item.analyst}</CTableDataCell>
                <CTableDataCell>{item.deadline}</CTableDataCell>
                <CTableDataCell className="text-center fw-bold">{item.point}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default Klien
