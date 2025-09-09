// src/views/karyawan/Karyawan.js
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
} from '@coreui/react'

const Karyawan = () => {
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
            <CTableRow>
              <CTableHeaderCell colSpan={3} className="text-center text-muted">
                Belum ada data karyawan
              </CTableHeaderCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default Karyawan
