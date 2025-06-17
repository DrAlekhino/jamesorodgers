
import '../App.css';
import Accordion from '../components/ui/Accordion';
import { useState } from 'react';


export default function SubscriptionsOptions(){
     const [accordions, setAccordion] = useState([
        {
            key: 1,
            title: 'Annually',
            data:  (<ul className='list-disc pl-4 '>
                        <li>Comprehensive intake assessments</li>
                        <li>12 monthly sessions</li>
                        <li>6 spot coaching calls(10-min emergency support)</li>
                        <li>1 group mastermind session</li>
                    </ul>),
            isOpen: false
        },
        {
            key: 2,
            title: 'Bi-Annually',
            data: (
                <ul className='list-disc pl-4 '>
                    <li>Rigorous intake process(goals,behaviorial changes)</li>
                    <li>6 monthly sessions with pre/post-call planning</li>
                    <li>Renewal option</li>
                </ul>
            ),
            isOpen: false
        },
    
    ]);

    const toggleAccordion = (accordionkey) => {
        const updatedAccordions = accordions.map((accord) => {
            if (accord.key === accordionkey) {
                return { ...accord, isOpen: !accord.isOpen };
            } else {
                return { ...accord, isOpen: false };
            }
        });

        setAccordion(updatedAccordions);
    };
    
    return (
        <section>
          
            <article className="flex w-full gap-5">
                {accordions.map((accordion) => (
                    <Accordion 
                        className="w-full border-white bg-teal-400!"
                        key={accordion.key}
                        title={accordion.title}
                        data={accordion.data}
                        isOpen={accordion.isOpen}
                        toggleAccordion={() => toggleAccordion(accordion.key)}
                    />
                ))}
            </article>
        </section>
    );

}
   
