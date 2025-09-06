import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Simple 404 page (langsung definisikan di sini biar gak perlu folder)
const Page404 = () => <h2 className="text-center mt-5">404 - Page Not Found</h2>

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    if (!isColorModeSet()) {
      setColorMode(storedTheme)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          {/* Semua route diarahkan ke DefaultLayout */}
          <Route path="/*" element={<DefaultLayout />} />

          {/* Fallback 404 */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
