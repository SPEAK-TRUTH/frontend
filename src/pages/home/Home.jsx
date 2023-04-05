// library
import React from "react"
import { Link } from "react-router-dom";


// components
import TopHeader from "../../components/topHeader/TopHeader.jsx"
import About from "../../pages/about/About.jsx"

// css
import "./home.css"
import Meeting from "../../assets/homeImages/meeting.jpeg"




const Home = () => {

  


  return (
    <div className="home" id="page-wrap" >
      
      <TopHeader />

      <div className="homeSectionWrapper">

        {/* box1 */}
        <div className="homeLeftSection">
          <div className="homeIntroduction">
            <span>WHISTLE BLOWER SECURITY PLATFORM</span>
            <h2>SPEAKTRUTH: The Forefront of Secure and Anonymous Reporting.</h2>
            <h3>Leading whistleblowing software with expert implementation support.</h3>
          </div>
          <div className="homeHeaderLinkWrapper">
            {/* <Link to='/' className="homeHeader_link">
                <span className='homeHeaderlink'>Report</span>
            </Link> */}
            <a href="#" className="homeHeader_link">
              <span className='homeHeaderlink'>Report</span>
            </a>
          </div>
          
        </div>

        {/* box2 */}
        <div className="homeRightSection">
          <div className="homeRightImageWrapper">
            <img src={Meeting} alt="meeting" />
          </div>
        </div>
      </div>

      <div className="homeShortIntroduction">
        <h3>SPEAKTRUTH provides support for a variety of workplace, educational, and cultural settings.</h3>
      </div>
    </div>
  )
}

export default Home