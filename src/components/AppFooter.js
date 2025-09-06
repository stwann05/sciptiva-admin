import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="app-footer px-4">
      <div className="footer-left">
        <span className="brand-text">Scriptiva &copy; 2025</span>
      </div>
      <div className="footer-right">
        <span className="powered">Powered by </span>
        <a
          href="https://scriptiva.officialnusaagency.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Scriptiva Admin Dashboard
        </a>
        <br />
        <span className="coreui-copyright">
          Based on CoreUI &copy; 2025 creativeLabs Łukasz Holeczek
        </span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
