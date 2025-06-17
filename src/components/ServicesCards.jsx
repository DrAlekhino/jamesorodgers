import { ClipboardList, MessageSquareText, BookOpen } from 'lucide-react'
import { useState } from 'react';
import { Card, CardContent, CardHeader } from "../components/ui/card"
import SubscriptionsOptions from '../components/SubscriptionsOptions';
import { delay, motion, scale } from "framer-motion"

export default function ServicesCards() {
  const [execFlipped, setExecFlipped] = useState(false);
  const [keynoteFlipped, setKeynoteFlipped] = useState(false);
  const [leaderFlipped, setLeaderFlipped] = useState(false);

  return (
    <section className='flex justify-center'>
      {/* Executive Coaching */}
      <div style={{ perspective: "1000px", width: "408px", height: "501px", margin: "2rem" }}>
        <motion.div
          onClick={() => setExecFlipped(!execFlipped)}
          animate={{ rotateY: execFlipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
          style={{ width: "100%", height: "100%", position: "relative", transformStyle: "preserve-3d", cursor: "pointer" }}
        >
          {/* Front Side */}
          <div style={{ position: "absolute", width: "100%", height: "100%", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
            <motion.Card 
              initial={{ scale: 0.65}}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              animate={{ rotateY: !execFlipped ? 0 : 180 }}
              className='flex flex-col items-center justify-center rounded-4xl! border-0 p-6 cursor-pointer h-[501px] shadow-xl shadow-teal-600/30 bg-gradient-to-b from-white to-teal-50' 
            >
              <ClipboardList className='h-15 w-15 mb-4 mt-15 text-teal-500'/>
              <CardHeader className="pt-">
                <h3 className='text-3xl font-bold text-center text-teal-800'>Executive Coaching</h3>
              </CardHeader>
              <CardContent className='flex flex-col items-center p-0 mt-4'>
                <p className="text-center text-teal-600">Leadership Coaching for executives bridging technical and business worlds</p>
                <button className='font-extrabold text-teal-500! mt-23 transition-colors border-[#000080]! border-2! hover:bg-teal-400! hover:text-[#000080]! ]'>Learn More</button>
              </CardContent>
            </motion.Card>
          </div>

          {/* Back Side */}
          <div style={{ position: "absolute", width: "100%", height: "100%", transform: "rotateY(180deg)", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
            <Card 
              className='rounded-4xl! border-0 px-6 cursor-pointer text-xs shadow-xl shadow-teal-600/20 bg-gradient-to-b from-teal-50 to-teal-100 text-teal-800 h-[501px]'
              onClick={() => setExecFlipped(!execFlipped)}
            >
              <CardHeader className="p-0">
                <h3 className='text-2xl font-bold text-center'>Executive Coaching</h3>
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
                  <SubscriptionsOptions/>
                </div>
                <button className='bg-teal-500! hover:bg-teal-600 text-white py-2 rounded-lg mt-3 absolute bottom-7 w-[80%] transition-colors'>Schedule Coaching Session</button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
      
      {/* Keynote Speaking */}
      <div style={{ perspective: "1000px", width: "408px", height: "501px", margin: "2rem" }}>
        <motion.div
          onClick={() => setKeynoteFlipped(!keynoteFlipped)}
          animate={{ rotateY: keynoteFlipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
          style={{ width: "100%", height: "100%", position: "relative", transformStyle: "preserve-3d", cursor: "pointer" }}
        >
          {/* Front Side */}
          <div style={{ position: "absolute", width: "100%", height: "100%", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
            <motion.Card 
              initial={{ scale: 0.65, opacity:0}}
              whileInView={{ scale: 1,opacity:1 }}
              transition={{ duration: 0.6,delay:0.5}}
              viewport={{ once: true }}
              onClick={() => setKeynoteFlipped(!keynoteFlipped)}
              animate={{ rotateY: keynoteFlipped ? 180 : 0 }}
              className='flex flex-col items-center justify-center rounded-4xl! border-0 p-6 cursor-pointer h-[501px] shadow-xl shadow-teal-600/30 bg-gradient-to-b from-white to-teal-50' 
            >
              <MessageSquareText className='h-15 w-15 mb-4 mt-15 text-teal-500'/>
              <CardHeader className="pt-">
                <h3 className='text-3xl font-bold text-center text-teal-800'>Keynote Speaking & Workshops</h3>
              </CardHeader>
              <CardContent className='flex flex-col items-center p-0 mt-4'>
                <p className="text-center text-teal-600">Impactful keynotes and workshops on diversity and leadership</p>
                <button className='font-extrabold text-teal-500 mt-20 transition-colors border-[#000080]! border-2! hover:bg-teal-400! hover:text-[#000080]!'>Learn More</button>
              </CardContent>
            </motion.Card>
          </div>

          {/* Back Side */}
          <div style={{ position: "absolute", width: "100%", height: "100%", transform: "rotateY(180deg)", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
            <Card 
              className='rounded-4xl! border-0 px-6 cursor-pointer text-xs shadow-xl shadow-teal-600/20 bg-gradient-to-b from-teal-50 to-teal-100 text-teal-800 h-[501px]'
              onClick={() => setKeynoteFlipped(!keynoteFlipped)}
            >
              <CardHeader className="p-0">
                <h3 className='text-2xl font-bold text-center '>Keynote Speaking & Workshops</h3>
              </CardHeader>
              <CardContent className="p-0 mt-4 ">
                <ul className="list-disc pl-5 ">
                  <div>
                    <li className='list-check font-bold'>Flagship Topics</li>
                    <ul className='pl-2'>
                      <li className='list-disc'>Deliberate Diversity™: The ROI of Inclusive Leadership</li>
                      <li className='list-disc'>From Engineer to Executive: Rewiring Your Leadership DNA</li>
                      <li className='list-disc'>The Lost Science of Diversity Management (TED-style)</li>
                    </ul>
                  </div>
                  <div>
                    <li className='list-check font-bold'>Formats</li>
                    <ul className='pl-2'>
                      <li className='list-disc'>Virtual or in-person executive leadership keynotes</li>
                      <li className='list-disc'>Half-day workshops for tech executives</li>
                    </ul>
                  </div>
                </ul>
                <button className='w-full bg-teal-500! hover:bg-teal-600 text-white py-2 rounded-lg mt-38 transition-colors'>Book A Leadership Keynote</button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
      
      {/* Leadership Programs */}
      <div style={{ perspective: "1000px", width: "408px", height: "501px", margin: "2rem" }}>
        <motion.div
          onClick={() => setLeaderFlipped(!leaderFlipped)}
          animate={{ rotateY: leaderFlipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
          style={{ width: "100%", height: "100%", position: "relative", transformStyle: "preserve-3d", cursor: "pointer" }}
        >
          {/* Front Side */}
          <div style={{ position: "absolute", width: "100%", height: "100%", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
            <motion.Card 
               initial={{ scale: 0.65,opacity:0}}
              whileInView={{ scale: 1,opacity:1 }}
              transition={{ duration: 0.6,delay:1}}
              viewport={{ once: true }}
              animate={{ rotateY: !leaderFlipped ? 0 : 180 }}
              className='flex flex-col items-center justify-center rounded-4xl! border-0 p-6 cursor-pointer h-[501px] shadow-xl shadow-teal-600/30 bg-gradient-to-b from-white to-teal-50' 
            >
              <BookOpen className='h-15 w-15 mb-4 mt-15 text-teal-500'/>
              <CardHeader className="pt-">
                <h3 className='text-3xl font-bold text-center text-teal-800'>Executive Leadership Programs</h3>
              </CardHeader>
              <CardContent className='flex flex-col items-center p-0 mt-4'>
                <p className="text-center text-teal-600">Scalable pipelines for tech executives with inclusive leadership strategies</p>
                <button className='font-extrabold text-teal-500! hover:text-[#000080]! border-2! border-[#000080]! mt-20 transition-colors hover:bg-teal-400!'>Learn More</button>
              </CardContent>
            </motion.Card>
          </div>

          {/* Back Side */}
          <div style={{ position: "absolute", width: "100%", height: "100%", transform: "rotateY(180deg)", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
            <Card 
              className='rounded-4xl! border-0 px-6 cursor-pointer text-xs shadow-xl shadow-teal-600/20 bg-gradient-to-b from-teal-50 to-teal-100 text-teal-800 h-[501px]'
              onClick={() => setLeaderFlipped(!leaderFlipped)}
            >
              <CardHeader className="p-0">
                <h3 className='text-2xl font-bold text-center'>Executive Leadership Programs</h3>
              </CardHeader>
              <CardContent className="p-0 mt-4 ">
                <ul className="list-disc pl-5 ">
                  <div>
                    <li className='list-disc font-bold'>For Companies needing</li>
                    <ul className='pl-2'>
                      <li className='list-disc'>Scalable pipelines for tech executives</li>
                      <li className='list-disc'>Inclusive leadership strategies with ROI tracking</li>
                    </ul>
                  </div>
                  <div>
                    <li className='list-disc font-bold'>Featured Program:</li>
                    <ul className='pl-2'>
                      <li className='list-disc'>Deliberate Diversity™ Certification</li>
                      <li className='list-disc'>ROI dashboards (Measure workforce dynamics impact)
                      <li className='list-disc'>Implementation playbook</li>
                      </li>
                    </ul>
                  </div>
                </ul>
                <button className='w-full bg-teal-500! hover:bg-teal-600 text-white py-2 rounded-lg mt-45 transition-colors'>Schedule Coaching Session</button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}