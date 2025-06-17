import '../App.css'
import { Card, CardHeader, CardContent } from "../components/ui/card"; 
import { motion } from "framer-motion"

export default function Contact() {
  return(
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='pt-25 bg-gradient-to-b from-white to-teal-50'
    >
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-6xl font-bold text-center'
        >
          Contact
        </motion.h1>
        
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='flex gap-8 justify-center items-start rounded-2xl! mx-auto w-screen px-50 py-12 pb-20'
        >
            <div className='w-full max-w-xl h-full'>
                <motion.div
                  whileHover={{ y: -5 }}
                >
                  <Card className='shadow-lg border border-gray-200 h-full rounded-2xl!'>
                      <CardHeader className='bg-teal-300/50 rounded-t-2xl! p-6'>
                          <h4 className='text-2xl font-bold text-white'>Write to James</h4>
                      </CardHeader>
                      <CardContent className='flex flex-col space-y-5 p-6 mt-19'>
                          <motion.input 
                            whileFocus={{ scale: 1.02 }}
                            className='border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent' 
                            type="text" 
                            placeholder='Name & Surname'
                          />
                          <motion.input 
                            whileFocus={{ scale: 1.02 }}
                            className='border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent' 
                            type="email" 
                            name="Email" 
                            id="email" 
                            placeholder='Email'
                          />
                          <motion.input 
                            whileFocus={{ scale: 1.02 }}
                            className='border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent' 
                            type="number" 
                            name="Phone Number" 
                            id="phone" 
                            placeholder='Phone Number' 
                          />
                          <motion.textarea 
                            whileFocus={{ scale: 1.02 }}
                            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent" 
                            name="message" 
                            cols="30" 
                            rows="4" 
                            placeholder='Type your message here...'
                          ></motion.textarea>
                          <motion.button 
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            type="submit" 
                            className='bg-teal-500! hover:bg-teal-600 text-[#000080] font-bold py-3 px-4 rounded-lg transition duration-200'
                          >
                            SUBMIT
                          </motion.button>
                      </CardContent>
                  </Card>
                </motion.div>
            </div>
            
            <div className='flex flex-col gap-6 w-full max-w-md'>
                <motion.div
                  initial={{ x: 20 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className='rounded-2xl! shadow-lg border border-gray-200'>
                      <CardHeader className='bg-teal-300/50 rounded-t-2xl p-6'>
                          <h4 className='text-2xl font-bold text-white'>Get In Touch</h4>
                      </CardHeader>
                      <CardContent className='p-6 space-y-3'>
                          <p className='font-bold text-teal-600'>Phone:</p>
                          <p className='text-gray-700'>+1 (415) 555-1234</p>
                          <p className='font-bold text-teal-600'>Email:</p>
                          <p className='text-gray-700'>contact@jamesrodgers.com</p>
                      </CardContent>
                      <div className='border-t border-gray-200 mx-6'></div>
                      <CardHeader className='p-6'>
                          <h4 className='text-2xl font-bold text-teal-600'>Connect With Us</h4>
                      </CardHeader>
                      <CardContent className='p-6 pt-0'>
                          <div className='flex gap-4'>
                          <motion.a 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            href="#" 
                            className='w-10 h-10 rounded-full bg-teal-500 hover:bg-teal-600 flex items-center justify-center transition duration-200'
                          >
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                              </svg>
                          </motion.a>
                          <motion.a 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            href="#" 
                            className='w-10 h-10 rounded-full bg-teal-500 hover:bg-teal-600 flex items-center justify-center transition duration-200'
                          >
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                              </svg>
                          </motion.a>
                          <motion.a 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            href="#" 
                            className='w-10 h-10 rounded-full bg-teal-500 hover:bg-teal-600 flex items-center justify-center transition duration-200'
                          >
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                              </svg>
                          </motion.a>
                          </div>
                      </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ x: 20 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className='rounded-2xl! shadow-lg border border-gray-200'>
                      <CardHeader className='bg-teal-300/50 rounded-t-2xl p-6'>
                          <h4 className='text-2xl font-bold text-white'>Business Hours</h4>
                      </CardHeader>
                      <CardContent className='p-6 space-y-4'>
                          <motion.div 
                            whileHover={{ x: 5 }}
                            className='flex justify-between'
                          >
                              <p className='text-gray-700'>Monday - Friday</p>
                              <p className='font-medium text-teal-600'>09:00 - 17:00</p>
                          </motion.div>
                          <motion.div 
                            whileHover={{ x: 5 }}
                            className='flex justify-between'
                          >
                              <p className='text-gray-700'>Saturdays</p>
                              <p className='font-medium text-teal-600'>By Appointment Only</p>
                          </motion.div>
                          <motion.div 
                            whileHover={{ x: 5 }}
                            className='flex justify-between'
                          >
                              <p className='text-gray-700'>Sundays & Holidays</p>
                              <p className='font-medium text-teal-600'>Closed</p>
                          </motion.div>
                      </CardContent>
                  </Card>
                </motion.div>
            </div>
        </motion.section>
    </motion.main>
  )
}