import React from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions/SidebarOptions'
import SideFooter from './SideFooter/SideFooter'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarOptions/>
      <SideFooter/>
    </div>
  )
}

export default Sidebar
