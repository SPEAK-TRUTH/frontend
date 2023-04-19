import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import "./accordionMenu.css"
import faqs from './faqData.json'


const AccordionMenu = () => {
    return (
        <Accordion>
            {
                faqs.map( (faq) => (
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {faq.question}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                {faq.answer}
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))
            }
        </Accordion>
    );
}

export default AccordionMenu