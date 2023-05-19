import React from 'react'


import "./faq.css"
import AccordionMenu from "../../components/accordionMenu/AccordionMenu.jsx"
const FAQ = () => {
  return (
    <div className="faq" id="faq">
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