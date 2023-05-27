// library
import React, { useState, useEffect, useContext } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate, useLocation } from "react-router-dom";
import SectionContext from '../../contexts/SectionContext';

// components
import Sidebar from "../sidebar/Sidebar";

// css and images
import "./topHeader.css";
import SpeakTruthFullLogo from "../../assets/topHeaderImages/speaktruthLogo.png";
import SpeakTruthLogo from "../../assets/speaktruth-website-favicon-color.png";

const TopHeader = () => {
  const { setSection } = useContext(SectionContext);
  const user = false;
  const navigate = useNavigate();
  const location = useLocation();
  
  const smallScreen = 576;
  const mediumScreen = 768;
  const largeScreen = 1024;

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const onClickAbout = () => {
    window.location.assign("/#about");
  };
  
  const onClickFAQ = () => {
    window.location.assign("/#faq");
  };

  const handleLinkClick = (section) => {
    if (location.pathname !== '/') {
      navigate('/').then(() => {
        setSection(section);
      });
    } else {
      setSection(section);
    }
  };
  
  return (
    <div className='topHeaderWrapper'>
      <div className="topHeaderSpeakTruthLogoWrapper">
        {windowSize < largeScreen ? (
          <Link to='/'> 
            <img className='topHeaderSpeakTruthLogo' src={SpeakTruthLogo} />
          </Link>
        ) : (
          <Link to='/'> 
            <img className='topHeaderSpeakTruthFullLogo' src={SpeakTruthFullLogo} />
          </Link>
        )}
      </div>
      
      <div className='topHeaderlinks'>
        {user ? (
          <>
            <Link to='#' className="topHeader_link">
              <span className='topHeaderReport_link'>Overview</span>
            </Link>
            <Link to='#' className="topHeader_link">
              <span className='topHeaderReport_link'>Dashboard</span>
            </Link>
          </>
        ) : (
          <>
            <a onClick={() => handleLinkClick("#about")} className="topHeader_link">
              <span className='topHeaderAbout_link'>About</span>
            </a>
            <a onClick={() => handleLinkClick("#faq")} className="topHeader_link">
              <span className='topHeaderFaq_link'>FAQ</span>
            </a>
            <Link to='/privacy' className="topHeader_link">
              <span className='topHeaderPrivacy_link'>Privacy </span>
            </Link>
            <Link to='/reportForm' className="topHeader_link">
              <span className='topHeaderReport_link'>Report</span>
            </Link>
          </>
        )}
      </div>
      
      {windowSize > largeScreen ? (
        <></>
      ) : (
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      )}
    </div>
  )
}

export default TopHeader;
