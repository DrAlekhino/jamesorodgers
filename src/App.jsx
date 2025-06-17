import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import {Check,ClipboardList,SquareCheck} from 'lucide-react'
// import { Card, CardContent, CardHeader } from "@/components/ui/card"
// import { Card, CardHeader, CardContent} from "./components/ui/card"; 
import TestimonialsSection from './components/TestimonialsSection';
import FlipCard from './components/FlipCards';
import Test from './components/test';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Accordion from './components/ui/Accordion';
import About from './pages/About';
import Footer from './components/Footer';

import { motion } from "framer-motion"

// function Contact() {
//   return(

//     <main className='flex gap-5 justify-center items-center mt-25 mx-auto w-screen px-50'>
//       <div className='w-full'>
//         <Card className='rounded-4xl'>
//           <CardHeader><h4 className='text-2xl font-bold mb-10'>Write to James</h4></CardHeader>
//           <CardContent className='flex flex-col space-y-5'>
//             <input className='border p-3' type="text" placeholder='Name & Surname'/>
//             <input  className='border p-3'type="email" name="Email" id="email" placeholder='email'/>
//             <input className='border p-3' type="number" name="Phone Number" id="phone" placeholder='Phone Number' />
//             <textarea className="border p-2" name="message" id="" cols="30" rows="4" placeholder='Type your message here...'></textarea>
//             <button type="submit" className='bg-teal-400!'>SUBMIT</button>
//           </CardContent>
//         </Card>
//       </div>
//       <div className='flex flex-col gap-5 w-full'>
//         <Card>
//           <CardHeader><h4 className='text-2xl font-bold'>Get In Touch</h4></CardHeader>
//           <CardContent>
//             <p className='font-bold'>Phone:</p>
//             <p>+1 (415) 555-1234</p>
//             <p className='font-bold'>Email:</p>
//             <p>contact@jamesrodgers.com</p>
//           </CardContent>
//           <br className='text-teal-400 w-1/2 text-center border-2!'/>
//            <CardHeader><h4 className='text-2xl font-bold'>Connect With Us</h4></CardHeader>
//            <div>
//             {/* <FacebookIcon/>
//             <Twitter/>
//             <Linkedin/> */}
//            </div>
//           <CardContent>
            
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader><h4 className='text-2xl font-bold'>Business Hours</h4></CardHeader>
//           <CardContent>
//             <div className='flex justify-between!'>
//               <p>Monday - Friday</p>
//               <p>09:00 - 17:00</p>
//             </div>
//             <div className='flex justify-between!'>
//               <p>Saturdays</p>
//               <p>By Appointment Only</p>
//             </div>
//             <div className='flex justify-between!'>
//               <p>Sundays & Holidays</p>
//               <p>Closed</p>
//             </div>
            
//           </CardContent>
//         </Card>
//       </div>
//     </main>
//   )
  
// }


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
    
    
    
  )
}

export default App
