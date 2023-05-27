// library
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Element } from 'react-scroll';
import SectionContext from "../../contexts/SectionContext.jsx";

// components
import TopHeader from "../../components/topHeader/TopHeader.jsx";
import FAQ from "../FAQ/FAQ.jsx";
import About from "../about/About.jsx";
import Footer from "../../components/footer/Footer.jsx";

// css
import "./home.css";
import Meeting from "../../assets/homeImages/meeting.jpeg";

const Home = () => {
  const { section } = useContext(SectionContext);

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [section]);

  return (
    <div className="home" id="page-wrap">
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

      <Element id="about">
        <About />
      </Element>
      <Element id="faq">
        <FAQ />
      </Element>
      <Footer />
    </div>
  );
};

export default Home;
