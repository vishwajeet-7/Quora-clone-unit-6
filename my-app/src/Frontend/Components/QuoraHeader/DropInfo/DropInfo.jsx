import React from 'react'
import './DropInfo.css'


const DropInfo = () => {
  return (
    <div className='drop-info'>
      <div className='drop-info wrap'>
        <div>
            <span className='text'>Dark Mode</span>
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
