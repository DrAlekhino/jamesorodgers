import { Check } from 'lucide-react'
import TestimonialsSection from '../components/TestimonialsSection';
import { motion } from "framer-motion";
import ServicesCards from '../components/ServicesCards';

export default function Home() {
  return (
    <main className="bg-white">

      {/* Hero section */}
      <section className='bg-[url("../images/tech.png")] bg-no-repeat bg-cover w-screen h-screen bg-teal-900 bg-blend-overlay'>
        <motion.div 
          className='w-1/3 start-15 absolute pt-45 space-y-7'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className='text-7xl! text-white! font-bold'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Elevate your career with <span className='text-teal-400'>Leadership Coaching</span> for tech executives
          </motion.h1>
          <motion.p 
            className='text-white text-2xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Get 1:1 leadership coaching for executives, keynote insights, or tailored programs to master workforce dynamics, influence stakeholders, and secure your next promotion.
          </motion.p>
          <motion.div 
            className='flex gap-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button 
              className='bg-teal-400! text-[#000080]'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Coaching Consultation
            </motion.button>
            <motion.button 
              className='bg-transparent! border-0 border-teal-300! text-teal-400 py-4!'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
     
      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-white to-teal-50">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center">
          <motion.figure 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src="../images/JamesInAction.jpg" 
              alt="James teaching a class" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </motion.figure>
          
          <motion.article 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-teal-800 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Meet Dr. James O. Rodgers
            </motion.h2>
            <motion.p 
              className="text-lg font-semibold text-teal-500 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Leadership Coach for Tech Executives
            </motion.p>
            
            <div className="space-y-6 text-teal-900 leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Dr. James O. Rodgers is an award-winning executive coach and strategist with unmatched credentials:
              </motion.p>
              
              <motion.ol 
                className="list-disc list-inside space-y-2 marker:text-teal-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <li>Fellow, IMC-USA – The highest honor in management consulting</li>
                <li>Corporate Advisor to Fortune 500 giants like IBM, Coca-Cola, and Johnson & Johnson</li>
                <li>Author of <em>Managing Differently</em>, adopted by Kellogg School of Management</li>
                <li>Pioneer of Deliberate Diversity™</li>
                <li>Educator at Cornell, Kellogg, and Georgia State</li>
              </motion.ol>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                With a rare blend of engineering precision (B.S.E.E), business acumen (MBA), and scholarly rigor (Ph.D), Dr. Rodgers equips leaders to:
              </motion.p>
              
              <ul className="space-y-2">
                {[
                  "Navigate difficult conversations with a proven facilitation framework",
                  "Turn diversity into tangible business outcomes",
                  "Break through blind spots holding back their growth"
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <Check className="h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.p 
                className="font-medium text-teal-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Trusted by executives who demand measurable impact.
              </motion.p>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='bg-gradient-to-b from-teal-50 to-teal-100 py-20'>
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-teal-800 text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Customer Reviews
          </motion.h2>
          <TestimonialsSection/>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-white'>
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-teal-800 text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Work with James
          </motion.h2>
          <ServicesCards />
        </div>
      </section>
    </main>
  )
}