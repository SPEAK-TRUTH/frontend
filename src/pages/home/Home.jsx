// library
import React from "react"
import { Link } from "react-router-dom";


// components
import TopHeader from "../../components/topHeader/TopHeader.jsx"

// css
import "./home.css"
import Meeting from "../../assets/homeImages/meeting.jpeg"
import FAQ from "../FAQ/FAQ.jsx";
import About from "../about/About.jsx";
import Footer from "../../components/footer/Footer.jsx";




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
            <Link to='/reportForm' className="homeHeader_link">
                <span className='homeHeaderlink'>Report</span>
            </Link>
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

      <About />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home