import './index.css'

import React from 'react'

function Overlay({onClick, children}) {
  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClick()
    }
  }

  return (
    <div className="overlay" role="dialog" onClick={handleOverlayClick}>
      <div className="overlay-content" role="document">
        {children}
      </div>
    </div>
  )
}

export default Overlay
