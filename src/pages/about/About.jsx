import React from 'react'

import "./about.css"

import Listening from "../../assets/aboutImages/listen.jpeg"
import People from "../../assets/aboutImages/people.jpeg"

const About = () => {
  return (
    <div className="about">
        <div className="aboutSpeaktruthSection">
            <h1>About <span>SPEAKTRUTH</span></h1>
            <h3>At SPEAKTRUTH, our mission is to create a more equitable, safe, and inclusive workplace. We empower individuals and organizations to speak up against misconduct and harassment. Join us in creating positive change for the future.</h3>
        </div>

        <div className="aboutEmployeesVoiceSection">
            <h1>SpeakTruth values every employee's voice.</h1>
            <div className="aboutEmployeesVoice">

                {/* box1 */}
                <div className="aboutVoice">

                    {/* box1 */}
                    <div className="aboutVoiceImageWrapper">
                        <img src={Listening} alt="" className="aboutVoiceImage" />
                    </div>
                    
                    {/* box2 */}
                    <div className="aboutVoiceParaWrapper">
                        <h2>Where everyone is heard.</h2>
                        <h3>We believe that every employee has the right to be heard and valued in the workplace. We're passionate about creating a culture of openness and trust that prioritizes psychological safety and employee happiness. Our platform is designed to make it easy for employees to share feedback and report workplace issues in a safe and sustainable way, while also helping companies to listen, respond, and grow. We're committed to promoting healthy workplace relationships and empowering individuals and organizations to take action against misconduct, discrimination, and harassment. Join us in building a better workplace culture where everyone is heard and valued.</h3>
                    </div>
                </div>

                {/* box2 */}
                <div className="aboutVoice">
                    <div className="aboutVoiceParaWrapper">
                        <h2>Building trust through action.</h2>
                        <h3>We're committed to promoting trust in the workplace through action. We believe that trust is built through a combination of transparency, accountability, and responsiveness. Our platform is designed to facilitate open and honest communication between employees and employers, while also providing tools and resources to help companies take meaningful action to address workplace issues. Join us in building a better workplace culture where trust is the foundation of healthy and productive relationships.</h3>
                    </div>
                    <div className="aboutVoiceImageWrapper">
                        <img src={People} alt="" className='aboutVoiceImage'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About