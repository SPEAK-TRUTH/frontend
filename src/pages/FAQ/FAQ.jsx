import React from 'react'


import "./FAQ.css"
import AccordionMenu from '../../components/accordionMenu/accordionMenu'
const FAQ = () => {
  return (
    <div className="faq">
        <div className="faqHeader">
            <h1>FAQs About <span>SPEAKTRUTH</span></h1>
        </div>

        <div className="faqSection">
            <AccordionMenu />
        </div>
    </div>
  )
}

export default FAQ