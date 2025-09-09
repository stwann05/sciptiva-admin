import React, { useState } from 'react'
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormSelect,
  CButton,
} from '@coreui/react'

const Tim = () => {
  const [tim, setTim] = useState({
    'Kuantitatif 1': [],
    'Kuantitatif 2': [],
    Kualitatif: [],
    Pendidikan: [],
    Statistika: [],
  })

  const [nama, setNama] = useState('')
  const [timDipilih, setTimDipilih] = useState('Kuantitatif 1')

  // Tambah anggota
  const tambahAnggota = () => {
    if (nama.trim()) {
      setTim((prev) => ({
        ...prev,
        [timDipilih]: [...prev[timDipilih], nama],
      }))
      setNama('')
    }
  }

  // Hapus anggota
  const hapusAnggota = (namaTim, anggotaIndex) => {
    setTim((prev) => ({
      ...prev,
      [namaTim]: prev[namaTim].filter((_, index) => index !== anggotaIndex),
    }))
  }

  return (
    <CContainer className="my-4">
      <h1 className="text-center mb-4">Halaman Tim</h1>
      <p className="text-center text-muted mb-4">Kelola anggota tim sesuai kategori</p>

      {/* Form tambah anggota */}
      <CForm className="d-flex justify-content-center mb-4">
        <CFormSelect
          value={timDipilih}
          onChange={(e) => setTimDipilih(e.target.value)}
          style={{ maxWidth: '200px' }}
        >
          {Object.keys(tim).map((namaTim, idx) => (
            <option key={idx} value={namaTim}>
              {namaTim}
            </option>
          ))}
        </CFormSelect>
        <CFormInput
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Nama anggota"
          className="mx-2"
          style={{ maxWidth: '200px' }}
        />
        <CButton color="primary" onClick={tambahAnggota}>
          Tambah
        </CButton>
      </CForm>

      {/* Daftar tim */}
      <CRow xs={{ gutter: 4 }}>
        {Object.keys(tim).map((namaTim, idx) => (
          <CCol key={idx} md={6} lg={4}>
            <CCard>
              <CCardHeader>{namaTim}</CCardHeader>
              <CCardBody>
                {tim[namaTim].length === 0 ? (
                  <p className="text-muted">Belum ada anggota</p>
                ) : (
                  <ul className="mb-0 list-unstyled">
                    {tim[namaTim].map((anggota, i) => (
                      <li
                        key={i}
                        className="d-flex justify-content-between align-items-center mb-1"
                      >
                        {anggota}
                        <CButton color="danger" size="sm" onClick={() => hapusAnggota(namaTim, i)}>
                          Hapus
                        </CButton>
                      </li>
                    ))}
                  </ul>
                )}
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </CContainer>
  )
}

export default Tim
