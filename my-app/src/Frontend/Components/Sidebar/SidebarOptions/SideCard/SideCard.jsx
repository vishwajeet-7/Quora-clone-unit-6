import React from 'react'

const SideCard = ({img,title}) => {
  return (
    <div className='sidebarOption'>
      <img src={img} alt="" />
      <p>{title}</p>
    </div>
  )
}

export default SideCard
