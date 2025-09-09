import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CProgress,
  CButton,
  CFormInput,
  CFormSelect,
} from '@coreui/react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

// Register Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// Status color map
const statusColor = (status) => {
  switch (status) {
    case 'Belum Mulai':
      return 'danger'
    case 'Sedang Dikerjakan':
      return 'warning'
    case 'Revisi':
      return 'info'
    case 'Selesai':
      return 'success'
    default:
      return 'secondary'
  }
}

// Status → Progress helper
const statusToProgress = (status) => {
  switch (status) {
    case 'Belum Mulai':
      return 0
    case 'Sedang Dikerjakan':
      return 50
    case 'Revisi':
      return 75
    case 'Selesai':
      return 100
    default:
      return 0
  }
}

// Initial teams
const initialTeams = [
  { name: 'Tim Kuantitatif 1', projects: [] },
  { name: 'Tim Kuantitatif 2', projects: [] },
  { name: 'Tim Kualitatif', projects: [] },
  { name: 'Tim Pendidikan', projects: [] },
  { name: 'Tim Statistika', projects: [] },
]

const AdminDashboardInteractive = () => {
  const [teams, setTeams] = useState(initialTeams)
  const [newProject, setNewProject] = useState({
    team: 'Tim Kuantitatif 1',
    client: '',
    title: '',
    status: 'Belum Mulai',
    progress: 0,
  })

  const addProject = () => {
    if (!newProject.title || !newProject.client) return
    setTeams((prev) =>
      prev.map((team) =>
        team.name === newProject.team
          ? { ...team, projects: [...team.projects, { ...newProject }] }
          : team,
      ),
    )
    setNewProject({ ...newProject, client: '', title: '', progress: 0 })
  }

  // KPI
  const totalProjects = teams.reduce((acc, t) => acc + t.projects.length, 0)
  const completedProjects = teams.reduce(
    (acc, t) => acc + t.projects.filter((p) => p.status === 'Selesai').length,
    0,
  )

  // Pie chart
  const statusCounts = ['Belum Mulai', 'Sedang Dikerjakan', 'Revisi', 'Selesai'].map((status) => ({
    name: status,
    value: teams.reduce((acc, t) => acc + t.projects.filter((p) => p.status === status).length, 0),
    color:
      status === 'Belum Mulai'
        ? '#f87171'
        : status === 'Sedang Dikerjakan'
          ? '#facc15'
          : status === 'Revisi'
            ? '#34d399'
            : '#60a5fa',
  }))

  // Bar chart
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
    datasets: [
      {
        label: 'Proyek Masuk',
        data: [0, 0, 0, 0, 0, totalProjects],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  }

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Proyek Masuk per Bulan' },
    },
  }

  return (
    <div style={{ padding: 16 }}>
      {/* KPI Cards */}
      <CRow className="mb-4">
        <CCol xs={12} md={3}>
          <CCard className="text-white bg-primary shadow">
            <CCardBody>
              <h6>Klien Aktif</h6>
              <h3>{totalProjects}</h3>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} md={3}>
          <CCard className="text-white bg-success shadow">
            <CCardBody>
              <h6>Proyek Selesai</h6>
              <h3>{completedProjects}</h3>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} md={3}>
          <CCard className="text-white bg-warning shadow">
            <CCardBody>
              <h6>Pendapatan Bulanan</h6>
              <h3>Rp 0</h3>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} md={3}>
          <CCard className="text-white bg-info shadow">
            <CCardBody>
              <h6>Penulis Aktif</h6>
              <h3>0</h3>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      {/* Bar chart & Pie chart */}
      <CRow className="mb-4">
        <CCol xs={12} md={6} className="mb-3">
          <CCard className="shadow">
            <CCardHeader>Proyek Masuk Bulanan</CCardHeader>
            <CCardBody>
              <Bar data={barData} options={barOptions} />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs={12} md={6} className="mb-3">
          <CCard className="shadow">
            <CCardHeader>Status Proyek</CCardHeader>
            <CCardBody style={{ height: 250 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusCounts}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                  >
                    {statusCounts.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      {/* Add Project Form */}
      <CCard className="mb-4 shadow">
        <CCardHeader>Tambah Proyek Baru</CCardHeader>
        <CCardBody>
          <CRow className="g-3 align-items-end">
            <CCol md={3}>
              <CFormSelect
                value={newProject.team}
                onChange={(e) => setNewProject({ ...newProject, team: e.target.value })}
              >
                {teams.map((team, idx) => (
                  <option key={idx}>{team.name}</option>
                ))}
              </CFormSelect>
            </CCol>
            <CCol md={3}>
              <CFormInput
                placeholder="Nama Klien"
                value={newProject.client}
                onChange={(e) => setNewProject({ ...newProject, client: e.target.value })}
              />
            </CCol>
            <CCol md={3}>
              <CFormInput
                placeholder="Judul Proyek"
                value={newProject.title}
                onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              />
            </CCol>
            <CCol md={2}>
              <CFormSelect
                size="sm"
                value={newProject.status}
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    status: e.target.value,
                    progress: statusToProgress(e.target.value),
                  })
                }
              >
                <option>Belum Mulai</option>
                <option>Sedang Dikerjakan</option>
                <option>Revisi</option>
                <option>Selesai</option>
              </CFormSelect>
            </CCol>
            <CCol md={1}>
              <CButton color="primary" onClick={addProject}>
                Tambah
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      {/* Timeline per Tim */}
      <CRow className="g-4">
        {teams.map((team, idx) => (
          <CCol xs={12} md={6} key={idx}>
            <CCard className="shadow">
              <CCardHeader>{team.name}</CCardHeader>
              <CCardBody>
                {team.projects.length === 0 ? (
                  <div style={{ textAlign: 'center', color: '#6c757d', padding: 20 }}>
                    Belum ada proyek. Silakan tambah proyek.
                  </div>
                ) : (
                  team.projects.map((project, index) => (
                    <div key={index} style={{ marginBottom: 16 }}>
                      <div style={{ fontWeight: 'bold' }}>
                        {project.title} ({project.client})
                      </div>

                      {/* Dropdown untuk ubah status */}
                      <div style={{ marginTop: 4 }}>
                        Status:{' '}
                        <CFormSelect
                          size="sm"
                          value={project.status}
                          onChange={(e) => {
                            const newStatus = e.target.value
                            const updatedTeams = teams.map((t) => {
                              if (t.name === team.name) {
                                const updatedProjects = t.projects.map((p, i) =>
                                  i === index
                                    ? {
                                        ...p,
                                        status: newStatus,
                                        progress: statusToProgress(newStatus),
                                      }
                                    : p,
                                )
                                return { ...t, projects: updatedProjects }
                              }
                              return t
                            })
                            setTeams(updatedTeams)
                          }}
                          style={{ width: '180px', display: 'inline-block' }}
                        >
                          <option>Belum Mulai</option>
                          <option>Sedang Dikerjakan</option>
                          <option>Revisi</option>
                          <option>Selesai</option>
                        </CFormSelect>
                      </div>

                      <div>Progress: {project.progress}%</div>
                      <CProgress
                        value={project.progress}
                        color={statusColor(project.status)}
                        className="mt-1"
                      />
                    </div>
                  ))
                )}
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </div>
  )
}

export default AdminDashboardInteractive
