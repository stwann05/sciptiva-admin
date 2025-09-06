// src/views/karyawan/Karyawan.js
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
  CBadge,
} from '@coreui/react'

const Karyawan = () => {
  const data = [
    { nama: 'Ivan Setiawan', target: 100, poin: 100 },
    { nama: 'Xaviera', target: 90, poin: 92 },
    { nama: 'Budi Santoso', target: 85, poin: 70 },
    { nama: 'Siti Aminah', target: 80, poin: 85 },
  ]

  // fungsi buat badge warna
  const getBadge = (poin, target) => {
    if (poin >= target) return 'success'
    if (poin >= target * 0.8) return 'warning'
    return 'danger'
  }

  return (
    <CCard className="mb-4 shadow-sm border-0">
      <CCardHeader className="fw-bold bg-primary text-white">Daftar Karyawan</CCardHeader>
      <CCardBody>
        <CTable hover responsive bordered align="middle">
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell>Nama Karyawan</CTableHeaderCell>
              <CTableHeaderCell>Target Poin</CTableHeaderCell>
              <CTableHeaderCell>Poin Didapat</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data.map((item, index) => (
              <CTableRow key={index}>
                <CTableDataCell className="fw-semibold">{item.nama}</CTableDataCell>
                <CTableDataCell>{item.target}</CTableDataCell>
                <CTableDataCell>
                  <CBadge color={getBadge(item.poin, item.target)}>{item.poin}</CBadge>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default Karyawan
