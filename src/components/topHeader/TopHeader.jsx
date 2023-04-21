// library
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'

// components


// css and images
import "./topHeader.css";
import SpeakTruthFullLogo from "../../assets/topHeaderImages/speaktruthLogo.png";
import SpeakTruthLogo from "../../assets/speaktruth-website-favicon-color.png";
import Sidebar from "../sidebar/Sidebar";




const TopHeader = () => {
  //it is just temp
  const user = true;

  const showSettings = (event) => {
    event.preventDefault();
  }
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


  return (
    <div className='topHeaderWrapper'>
      {/* {windowSize < largeScreen ? (<Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />) : <></>} */}
      {/* box1 */}
      <div className="topHeaderSpeakTruthLogoWrapper">
        {windowSize < largeScreen ? <img className='topHeaderSpeakTruthLogo' src={SpeakTruthLogo} /> : <img className='topHeaderSpeakTruthFullLogo' src={SpeakTruthFullLogo} />}
        
      </div>
      
      {/* box2 */}
      
        <div className='topHeaderlinks'  >
          {user ? <>
                      <a href="#" className="topHeader_link">
                        <span className='topHeaderReport_link'>Check a Report</span>
                      </a>
                      <a href="#" className="topHeader_link">
                        <span className='topHeaderReport_link'>Create a Report</span>
                      </a>
                  </>
                : <>
                    <a href="#" className="topHeader_link">
                      <span className='topHeaderAbout_link'>About</span>
                    </a>
                    <a href="#" className="topHeader_link">
                      <span className='topHeaderFaq_link'>FAQ</span>
                    </a>
                    <a href="#" className="topHeader_link">
                      <span className='topHeaderPrivacy_link'>Privacy </span>
                    </a>
                    <a href="#" className="topHeader_link">
                      <span className='topHeaderReport_link'>Report</span>
                    </a>
                  </>
          }
        </div>
        {windowSize > largeScreen ? (<></>) : (
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          )}
    </div>
  )
}

export default TopHeader