import React from 'react'
import QuoraHeader from '../QuoraHeader/QuoraHeader'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed'
import Widgets from '../Widgets/Widgets'
import './Quora.css'

const Quora = () => {
  return (
    <div className='quora'>
      <QuoraHeader/>
      <div className='quora__contents'>
        <div className='quora__content'>
            <Sidebar/>
            <Feed/>
            <Widgets/>
        </div>
      </div>
    </div>
  )
}

export default Quora
