import '../App.css'
import { Card, CardHeader, CardContent } from "../components/ui/card"; 
import { motion } from "framer-motion"
import { Check } from 'lucide-react'

export default function Blog() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='flex mt-20 px-8 gap-8 bg-gradient-to-b from-white to-teal-50'
    >
      {/* Blog Posts Section */}
      <section className='flex flex-col w-2/3'>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-4xl font-bold mb-12 text-center text-teal-800 mt-5'
        >
          Blog
        </motion.h1>
        
        {/* Blog Article #1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
          className='mb-8'
        >
          <Card className='flex p-6 items-center rounded-xl shadow-md hover:shadow-lg transition-shadow border border-teal-200 bg-white'>
            <motion.figure 
              whileHover={{ scale: 1.05 }}
              className='min-w-[145px] h-[175px] overflow-hidden rounded-lg'
            >
              <img 
                src="../images/tech.png" 
                alt="blog image" 
                className='w-full h-full object-cover'
              />
            </motion.figure>
            <section className='w-full ml-6'>
              <CardHeader className='font-bold text-2xl text-teal-800'>
                <motion.h4 
                  whileHover={{ x: 5 }}
                  className='pb-2 border-b border-teal-200'
                >
                  Blog Article #1
                </motion.h4>
              </CardHeader>
              <CardContent className='text-teal-600 mt-3'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni alias voluptatibus facere similique ab vel ad iure, adipisci officiis, nulla corporis obcaecati nisi esse, beatae nam molestiae sequi at exercitationem?</p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='mt-4 bg-teal-500! hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors'
                >
                  Read More
                </motion.button>
              </CardContent>
            </section>
          </Card>
        </motion.div>

        {/* Blog Article #2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className='mb-8'
        >
          <Card className='flex p-6 items-center rounded-xl shadow-md hover:shadow-lg transition-shadow border border-teal-200 bg-white'>
            <motion.figure 
              whileHover={{ scale: 1.05 }}
              className='min-w-[145px] h-[175px] overflow-hidden rounded-lg'
            >
              <img 
                src="../images/tech.png" 
                alt="blog image" 
                className='w-full h-full object-cover'
              />
            </motion.figure>
            <section className='w-full ml-6'>
              <CardHeader className='font-bold text-2xl text-teal-800'>
                <motion.h4 
                  whileHover={{ x: 5 }}
                  className='pb-2 border-b border-teal-200'
                >
                  Blog Article #2
                </motion.h4>
              </CardHeader>
              <CardContent className='text-teal-600 mt-3'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni alias voluptatibus facere similique ab vel ad iure, adipisci officiis, nulla corporis obcaecati nisi esse, beatae nam molestiae sequi at exercitationem?</p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='mt-4 bg-teal-500! hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors'
                >
                  Read More
                </motion.button>
              </CardContent>
            </section>
          </Card>
        </motion.div>

        {/* Blog Article #3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          className='mb-8'
        >
          <Card className='flex p-6 items-center rounded-xl shadow-md hover:shadow-lg transition-shadow border border-teal-200 bg-white'>
            <motion.figure 
              whileHover={{ scale: 1.05 }}
              className='min-w-[145px] h-[175px] overflow-hidden rounded-lg'
            >
              <img 
                src="../images/tech.png" 
                alt="blog image" 
                className='w-full h-full object-cover'
              />
            </motion.figure>
            <section className='w-full ml-6'>
              <CardHeader className='font-bold text-2xl text-teal-800'>
                <motion.h4 
                  whileHover={{ x: 5 }}
                  className='pb-2 border-b border-teal-200'
                >
                  Blog Article #3
                </motion.h4>
              </CardHeader>
              <CardContent className='text-teal-600 mt-3'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni alias voluptatibus facere similique ab vel ad iure, adipisci officiis, nulla corporis obcaecati nisi esse, beatae nam molestiae sequi at exercitationem?</p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='mt-4 bg-teal-500! hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors'
                >
                  Read More
                </motion.button>
              </CardContent>
            </section>
          </Card>
        </motion.div>
      </section>

      {/* Sidebar Section */}
      <motion.aside
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className='w-1/3'
      >
        <Card className='bg-teal-50! rounded-2xl shadow-lg border border-teal-200 p-6 h-fit sticky top-35 mt-10'>
          <CardHeader>
            <motion.h2 
              whileHover={{ scale: 1.02 }}
              className='text-3xl font-bold text-center text-teal-800 mb-6'
            >
              More from Dr James O Rodgers
            </motion.h2>
          </CardHeader>
          
          <CardContent className='space-y-8'>
            {/* The Book */}
            <motion.div whileHover={{ y: -3 }}>
              <Card className='rounded-xl p-5 bg-white shadow-sm border-0'>
                <motion.figure 
                  whileHover={{ rotate: 1 }}
                  className='flex justify-center mb-4'
                >
                  <img 
                    src="../images/bookCover.jpg" 
                    alt="A Book on DEI by Dr. James O Rodgers" 
                    className='w-32 h-auto shadow-md'
                  />
                </motion.figure>
                <CardHeader>
                  <h3 className='text-xl font-bold text-teal-800 mb-2'>
                    DIVERSITY TRAINING THAT GENERATES REAL CHANGE
                  </h3>
                </CardHeader>
                <CardContent className='space-y-3'>
                  <p className='font-medium text-teal-600'>
                    Whatever you think you know about DEI, be prepared to...
                  </p>
                  <p className='text-teal-700'>
                    This book offers a proven template backed by real-world stories to help leaders drive meaningful DEI change.
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className='mt-4 w-full bg-teal-500! hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition-colors'
                  >
                    Get Your Copy Today
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>

            {/* The Podcast */}
            <motion.div whileHover={{ y: -3 }}>
              <Card className='rounded-xl p-5 bg-white shadow-sm border-0'>
                <motion.figure 
                  whileHover={{ rotate: 1 }}
                  className='flex justify-center mb-4'
                >
                  <img 
                    src="../images/podcast-cover.png" 
                    alt="Leadership Insights Podcast" 
                    className='w-32 h-auto shadow-md rounded-lg'
                  />
                </motion.figure>
                <CardHeader>
                  <h3 className='text-xl font-bold text-teal-800 mb-2'>
                    LEADERSHIP INSIGHTS PODCAST
                  </h3>
                </CardHeader>
                <CardContent className='space-y-3'>
                  <p className='font-medium text-teal-600'>
                    Weekly conversations with top tech executives
                  </p>
                  <p className='text-teal-700'>
                    Discover strategies and stories from the most innovative leaders in technology.
                  </p>
                  <div className='flex gap-2 mt-4'>
                    <motion.button 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className='flex-1 bg-teal-500! hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition-colors'
                    >
                      Apple Podcasts
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className='flex-1 bg-teal-500! hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition-colors'
                    >
                      Spotify
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div whileHover={{ y: -3 }} className='bg-white p-5 rounded-xl shadow-sm'>
              <motion.h3 
                whileHover={{ scale: 1.01 }}
                className='text-2xl font-bold text-teal-800 mb-4'
              >
                Upcoming Events
              </motion.h3>
              
              <div className='mb-6 pb-6 border-b border-teal-200'>
                <div className='flex items-center mb-2'>
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className='w-3 h-3 bg-teal-500 rounded-full mr-2'
                  ></motion.div>
                  <h6 className='font-bold text-teal-700'>June 15, 2025</h6>
                </div>
                <h6 className='font-bold text-lg text-teal-800 mb-2'>Virtual DEI Masterclass</h6>
                <p className='text-teal-600 mb-2'>Join Dr. James O. Rodgers for a 90-minute interactive session.</p>
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className='text-sm bg-teal-500! hover:bg-teal-600 text-white py-1 px-3 rounded-full transition-colors'
                >
                  Register Now
                </motion.button>
              </div>
              
              <div>
                <div className='flex items-center mb-2'>
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                    className='w-3 h-3 bg-teal-500 rounded-full mr-2'
                  ></motion.div>
                  <h6 className='font-bold text-teal-700'>August 3, 2025</h6>
                </div>
                <h6 className='font-bold text-lg text-teal-800 mb-2'>Book Signing</h6>
                <p className='text-teal-600 mb-2'>Meet the author and get your book signed.</p>
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className='text-sm bg-teal-500! hover:bg-teal-600 text-white py-1 px-3 rounded-full transition-colors'
                >
                  RSVP Free
                </motion.button>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.aside>
    </motion.main>
  )
}