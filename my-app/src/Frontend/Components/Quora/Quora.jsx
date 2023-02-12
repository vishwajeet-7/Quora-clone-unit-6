import React from 'react'
import QuoraHeader from '../QuoraHeader/QuoraHeader'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed'
import Widgets from '../Widgets/Widgets'
import './Quora.css'
import { useSelector } from 'react-redux'

const Quora = () => {
  const mode = useSelector((store)=>store.theme);
  const style = mode === 'dark'? {backgroundColor:'var(--darkMode)'} : {};
  return (
    <div className='quora' style={style}>
      <QuoraHeader/>
      <div className='quora__contents'>
        <div className='quora__content'>
          <div className='fixed'>
            <Sidebar/>
          </div>
          <Feed/>
          <Widgets/>
        </div>
      </div>
    </div>
  )
}

export default Quora
