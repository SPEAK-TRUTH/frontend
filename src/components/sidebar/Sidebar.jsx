// library
import React from 'react'
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';


// components

//css 
import "./sidebar.css"



const Sidebar = () => {
  return (
    <Menu right>
      <Link to='/' className="menu-item">
        <span className='topHeaderAbout_link'>About</span>
      </Link>

      <Link to='/' className="menu-item">
        <span className='topHeaderFaq_link'>FAQ</span>
      </Link>

      <Link to='/' className="menu-item">
        <span className='topHeaderPrivacy_link'>Privacy </span>
      </Link>

      <Link to='/' className="menu-item">
        <span className='topHeaderReport_link'>Report</span>
      </Link>
    </Menu>
  )
}

export default Sidebar