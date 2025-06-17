import { useState } from 'react';
import { ClipboardList,MessageSquareText,BookOpen } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { motion } from "framer-motion"

export default function FlipCard() {
  const [showExecBack, setShowExecBack] = useState(false);
  const [showKeyBack, setShowKeyBack] = useState(false);
  const [showLeaderBack, setShowLeaderBack] = useState(false);

  return (
    <section className='flex gap-15 w-full pl-45 '>
        {/* // Eexcutive Coaching */}
        <div className="flex-1  min-w-[400px] max-w-[500px] basis-1/3">
        {/* Front Card - shown when showBack is false */}
        
            <motion.Card 
            transition={{ duration: 0.7 }}
            animate={{ rotateY: !showExecBack ? 0 : 180 }}
            className='flex flex-col items-center justify-center rounded-4xl! border-0 p-6 cursor-pointer min-h-[484px] shadow-xl shadow-teal-700' 
            
            >
            <ClipboardList className='h-15 w-15 mb-4'/>
            <CardHeader className="p-0">
                <h3 className='text-2xl font-bold'>Executive Coaching</h3>
            </CardHeader>
            <CardContent className='flex flex-col items-center p-0 mt-4'>
                <p className="text-center">Leadership Coaching for executives bridging technical and business worlds</p>
                <button className='font-extrabold text-teal-400! mt-30'>Learn More</button>
            </CardContent>
            </motion.Card>
        

        {/* Back Card - shown when showBack is true */}
        {showExecBack && (
            <Card 
            className='rounded-4xl! border-0 px-6 cursor-pointer text-xs shadow-xl shadow-teal-400'
            onClick={() => setExecBack((prevState) => !prevState)}
            >
            <CardHeader className="p-0">
                <h3 className='text-2xl font-bold'>Executive Coaching</h3>
            </CardHeader>
            <CardContent className="p-0 mt-4 ">
                <p><span className='font-bold'>For:</span> CTOs,CIOs, and senior tech leaders preparing for CEO roles</p>
                <p><span className='font-black'>Framework: </span>Engineered Management Strategies (Bridges technical and executive leadership)</p>
                <p><span className='font-black'>Includes:</span></p>
                <ul className="list-disc pl-5 ">
                <li>90-day CEO-readiness plan</li>
                <li>Data-driven leadership assessment</li>
                <li>Stakeholder influence mapping</li>
                </ul>
                <p className='font-bold mt-4'>Subscription Options</p>
                <div className='flex gap-4 justify-center mt-3 pl- pr-3'>
                <div className=' '>
                    <button className='bg-teal-400! text-white px-4 py-2 rounded-lg w-33'>Bi-Annually</button>
                    <ul className='list-disc pl-4 '>
                        <li>Comprehensive intake assessments</li>
                        <li>12 monthly sessions</li>
                        <li>6 spot coaching calls(10-min emergency support)</li>
                        <li>1 group mastermind session</li>
                    </ul>
                </div>
                <div>
                <button className='bg-teal-400! text-white px-4 py-2 rounded-lg w-38'>Annually</button>
                <ul className='list-disc pl-4 '>
                    <li>Rigorous intake process(goals,behaviorial changes)</li>
                    <li>6 monthly sessions with pre/post-call planning</li>
                    <li>Renewal option</li>
                </ul>
                </div>
                </div>
                <button className='w-full bg-teal-400! text-white py-2 rounded-lg mt-3'>Schedule Coaching Session</button>
            </CardContent>
            </Card>
        )}
        </div>
        {/* // Keynote Speaking */}
        <div className="flex-1 min-w-[400px] max-m-[500px] basis-1/3">
        {/* Front Card - shown when showBack is false */}
        {!showKeyBack && (
            <Card 
            className='flex flex-col items-center justify-center rounded-4xl! border-0 p-6 cursor-pointer min-h-[484px] shadow-xl shadow-teal-700' 
            onClick={() => setKeyBack((prevState) => !prevState)}
            >
            <MessageSquareText className='h-15 w-15 mb-4'/>
            <CardHeader className="p-0">
                <h3 className='text-2xl font-bold'>Keynote Speaking & Workshops</h3>
            </CardHeader>
            <CardContent className='flex flex-col items-center p-0 mt-4'>
                <p className="text-center">Impactful keynotes and workshops on diversity and leadership</p>
                <button className='font-extrabold text-teal-400! mt-25'>Learn More</button>
            </CardContent>
            </Card>
        )}

        {/* Back Card - shown when showBack is true */}
        {showKeyBack && (
            <Card 
            className='rounded-4xl! border-0 px-6 cursor-pointer text-xs min-h-[482px] shadow-xl shadow-teal-400'
            onClick={() => setKeyBack((prevState) => !prevState)}
            >
            <CardHeader className="p-0">
                <h3 className='text-2xl font-bold'>Keynote Speaking & Workshops</h3>
            </CardHeader>
            <CardContent className="p-0 mt-4 ">
                
                <ul className="list-disc pl-5 ">
                <div>
                <li className='list-disc font-bold'>Flagship Topics</li>
                <ul className='pl-2'>
                    <li  className='list-disc'>Deliberate Diversity™: The ROI of Inclusive Leadership</li>
                    <li  className='list-disc'>From Engineer to Executive: Rewiring Your Leadership DNA</li>
                    <li  className='list-disc'>The Lost Science of Diversity Management (TED-style)</li>
                </ul>
                </div>
                <div>
                <li className='list-disc font-bold'>Formats</li>
                <ul className='pl-2'>
                    <li className='list-disc' >Virtual or in-person executive leadership keynotes</li>
                    <li className='list-disc' >Half-day workshops for tech executives</li>
                </ul>
                </div>
                
                </ul>
        
                <button className='w-full bg-teal-400! text-white py-2 rounded-lg mt-38'>Book A Leadership Keynote</button>
            </CardContent>
            </Card>
        )}
        </div>
        {/* // Leadership Programs */}
        <div className="flex-1 min-w-[400px] max-m-[500px] basis-1/3 ">
        {/* Front Card - shown when showBack is false */}
        {!showLeaderBack && (
            <Card 
            className='flex flex-col items-center justify-center rounded-4xl! border-0 p-6 cursor-pointer min-h-[484px] shadow-xl shadow-teal-700' 
            onClick={() => setLeaderBack((prevState) => !prevState)}
            >
            <BookOpen className='h-15 w-15 mb-4'/>
            <CardHeader className="p-0">
                <h3 className='text-2xl font-bold'>Executive Leadership Programs</h3>
            </CardHeader>
            <CardContent className='flex flex-col items-center p-0 mt-4'>
                <p className="text-center">Scalable pipelines for tech executives with inclusive leadership strategies</p>
                <button className='font-extrabold text-teal-400! mt-25'>Learn More</button>
            </CardContent>
            </Card>
        )}

        {/* Back Card - shown when showBack is true */}
        {showLeaderBack && (
            <Card 
            className='rounded-4xl! border-0 px-6 cursor-pointer text-xs min-h-[482px] shadow-xl shadow-teal-400'
            onClick={() => setLeaderBack((prevState) => !prevState)}
            >
            <CardHeader className="p-0">
                <h3 className='text-2xl font-bold'>Executive Leadership Programs</h3>
            </CardHeader>
            <CardContent className="p-0 mt-4 ">
                
                <ul className="list-disc pl-5 ">
                <div>
                <li className='list-disc font-bold'>For Companies needing</li>
                <ul className='pl-2'>
                    <li  className='list-disc'>Scalable pipelines for tech executives</li>
                    <li  className='list-disc'>Inclusive leadership strategies with ROI tracking
    </li>
                </ul>
                </div>
                <div>
                <li className='list-disc font-bold'>Featured Program:</li>
                <ul className='pl-2'>
                    <li className='list-disc' >Deliberate Diversity™ Certification</li>
                    <li className='list-disc' >ROI dashboards (Measure workforce dynamics impact)
                    <li className='list-disc' >Implementation playbook
    </li>
    </li>
                </ul>
                </div>
                
                </ul>
        
                <button className='w-full bg-teal-400! text-white py-2 rounded-lg mt-45'>Schedule Coaching Session</button>
            </CardContent>
            </Card>
        )}
        </div>
    </section>
  
  );
}