import React from 'react'
import Avatar from '../../Avatar/Avatar'
import './QuoraBox.css'

const QuoraBox = () => {
  return (
    <div className='quoraBox'>
      <div className='quoraBox__info'>
          <Avatar/>
      </div>
      <div className='quoraBox__quora'>
        <h5>What do you want to ask or Share?</h5>
      </div>
    </div>
  )
}

export default QuoraBox
