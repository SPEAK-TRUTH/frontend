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
      {/* <Link to='/' className="menu-item">
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
      </Link> */}

          <a href="#" className="menu">
            <span className='topHeaderAbout_link'>About</span>
          </a>
          <a href="#" className="menu">
          <span className='topHeaderFaq_link'>FAQ</span>
          </a>
          <a href="#" className="menu">
          <span className='topHeaderPrivacy_link'>Privacy </span>
          </a>
          <a href="#" className="menu">
          <span className='topHeaderReport_link'>Report</span>
          </a>
    </Menu>
  )
}

export default Sidebar