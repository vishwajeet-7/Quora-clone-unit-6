import React from 'react'
import './Toggle.css'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Toggle = () => {
    
  return (
    <div className='toggle' >
      <DarkModeIcon/>
      <LightModeIcon/>
      <div className='t-button'  
      >
    
      </div>
    </div>
  )
}

export default Toggle
