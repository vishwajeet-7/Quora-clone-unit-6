import React from 'react'
import './DropInfo.css'
import Toggle from '../Toggle/Toggle'

const DropInfo = () => {
  return (
    <div className='drop-info'>
      <div className='drop-info wrap'>
        <div>
            <span className='text'>Dark Mode</span>
        </div>
        <div className='toggle-wrap'>
            <Toggle/>
        </div>
      </div>
      <div className='drop-info text'>Setting</div>
      <div className='drop-info text'>Languages</div>
      <div className='drop-info text'>Help</div>
      <div className='drop-info text'>Logout</div>
    </div>
  )
}

export default DropInfo
