import React from 'react'

const Dropdown = ({img,text}) => {
  return (
    <div>
      <li className='dropDown-item' >
        {img}
        <a>{text}</a>
      </li>
    </div>
  )
}

export default Dropdown
