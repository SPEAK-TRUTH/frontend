import React from 'react'
import privacyPolicyData from "./prirvacy.json"
import TopHeader from '../../components/topHeader/TopHeader'
import Footer from '../../components/footer/Footer'

import "./privacy.css"

const Privacy = () => {
  return (
    <div className='privacy'>
        <TopHeader />
        <div className="privacy-lists-wrapper">
            {privacyPolicyData.map((item, index) => (
                <div className='privacy-lists'>
                    <h2>{item.title}</h2>
                    <h3>{item.description}</h3>
                </div>
            ))}
        </div>
        <Footer />
    </div>
  )
}

export default Privacy