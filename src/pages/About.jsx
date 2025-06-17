import React from 'react';
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="w-screen align-middle bg-gradient-to-b from-white to-teal-50 pb-8">
      {/* Hero Section */}
      <section className="mb-20 pt-25">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-teal-800 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Dr. James O. Rodgers
        </motion.h1>

        <motion.article 
          className="flex flex-col lg:flex-row gap-12 items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.figure 
            className="w-full lg:w-1/2 max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              width={500}
              height={700}
              src="../images/James.jpg" 
              alt="Dr. James O. Rodgers" 
              className="rounded-lg shadow-xl object-cover mx-auto"
            />
          </motion.figure>

          <motion.article 
            className="w-full lg:w-1/2 max-w-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl! md:text-3xl font-semibold text-teal-700 mb-6 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Engineered Management Strategies: Where Precision Meets Leadership Excellence
            </motion.h2>

            <motion.p 
              className="text-lg text-teal-600 mb-6 text-center lg:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Dr. James O. Rodgers isn't just another leadership coach—he's a trained engineer with a Ph.D. in Management, 
              giving him a unique vantage point that few can match. With a foundation rooted in systems thinking, 
              quantitative analysis, and operational precision, he brings scientific rigor to the art of leadership. 
              His approach is not built on vague theories or buzzwords but on tested frameworks designed to yield measurable 
              results. Whether transforming technical professionals into visionary leaders or aligning C-suite teams around 
              strategic goals, Dr. Rodgers consistently blends intellectual discipline with real-world executive insight.
            </motion.p>

            <motion.ul 
              className="space-y-3 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                "Apply engineering-grade precision to leadership development — combining systems logic with people strategy.",
                "Bridge the gap between technical execution and strategic vision — empowering technical leaders to drive business outcomes.",
                "Develop measurable systems for executive growth — not just abstract theories, but trackable milestones and KPIs."
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <svg className="h-6 w-6 text-teal-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-teal-700">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.blockquote 
              className="bg-teal-50 border-l-4 border-teal-500 italic p-6 rounded-r-lg mb-4 mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <p className="text-teal-700 text-lg">
                "While most coaches focus on intuitive advice, I turn leadership into measurable results. Where others rely on gut feelings, I create step-by-step systems for success."
              </p>
              <footer className="font-semibold text-teal-800 mt-2 text-right">—Dr. James O. Rodgers</footer>
            </motion.blockquote>
          </motion.article>
        </motion.article>
      </section>

      {/* Second Part */}
      <motion.section 
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-6xl">
          {/* Education & Coaching Sections */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Education Section */}
            <motion.section 
              className="bg-white p-8 rounded-xl shadow-md border border-teal-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6 text-center">
                <motion.h2 
                  className="text-3xl font-bold text-teal-800 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Education
                </motion.h2>
                <motion.div 
                  className="h-1 w-20 bg-teal-500 rounded-full mx-auto"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>

              <motion.ul 
                className="space-y-8 pt-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    title: "Engineering Discipline",
                    description: "Electrical Engineering from Howard University"
                  },
                  {
                    title: "Business Acumen",
                    description: "University of Alabama MBA"
                  },
                  {
                    title: "Scholarly Background",
                    description: "Ph.D. in Management from Walden University"
                  }
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className={`pb-4 ${index < 2 ? 'border-b border-teal-100' : ''}`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold text-teal-600 text-center">{item.title}</h3>
                    <p className="text-teal-600 text-center">{item.description}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.section>

            {/* Coaching Section */}
            <motion.section 
              className="bg-white p-8 rounded-xl shadow-md border border-teal-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6 text-center">
                <motion.h2 
                  className="text-3xl font-bold text-teal-800 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Why Organizations Invest
                </motion.h2>
                <motion.div 
                  className="h-1 w-20 bg-teal-500 rounded-full mx-auto"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>

              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-teal-700 mb-2">Technical to Leadership</h3>
                  <ul className="list-disc pl-5 space-y-1 text-teal-600 text-left">
                    <li>"Engineering Mind to Executive Impact" Framework — a methodology for translating technical skills into executive presence.</li>
                    <li>Communication system for analytical minds — helps detail-oriented professionals influence and inspire.</li>
                    <li>Quality control delegation systems — ensures high standards without micromanagement.</li>
                  </ul>
                </motion.div>

                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold text-teal-700 mb-2">C-Suite Programs</h3>
                  <ul className="list-disc pl-5 space-y-1 text-teal-600 text-left">
                    <li>Executive Acceleration System — jumpstarts leadership effectiveness during high-stakes transitions.</li>
                    <li>"80-Day Positioning Plan" — a roadmap to align perception, power, and purpose within the first quarter.</li>
                    <li>Influence Mapping — identifies key relationships and decision paths to amplify strategic clout.</li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.section>
          </motion.div>

          {/* Experience Section */}
          <motion.section 
            className="bg-white p-8 rounded-xl shadow-md mb-8 w-full border border-teal-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-6 text-center">
              <motion.h2 
                className="text-3xl font-bold text-teal-800 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Corporate Leadership Experience
              </motion.h2>
              <motion.div 
                className="h-1 w-20 bg-teal-500 rounded-full mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>

            <motion.p 
              className="text-teal-600 mb-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Before coaching, Dr. Rodgers held senior roles where he:
            </motion.p>

            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Digital Transformation",
                  description: "Led enterprise-wide digital transformations — integrating tech, process, and talent strategy."
                },
                {
                  title: "Innovation",
                  description: "Delivered 3 patented technologies — combining creativity with commercial viability."
                },
                {
                  title: "Mergers & Acquisitions",
                  description: "Navigated complex regulated mergers — aligning operational systems and leadership teams."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-teal-50 p-4 rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <h3 className="text-lg font-semibold text-teal-600 mb-2">{item.title}</h3>
                  <p className="text-teal-600">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Impact Section */}
          <motion.section 
            className="bg-white p-8 rounded-xl shadow-md w-full border border-teal-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-6 text-center">
              <motion.h2 
                className="text-3xl font-bold text-teal-800 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Client Impact: By the Numbers
              </motion.h2>
              <motion.div 
                className="h-1 w-20 bg-teal-500 rounded-full mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Career Advancement",
                  stats: [
                    { value: "78%", label: "promotion rate within 24 months" },
                    { value: "40%", label: "faster path to C-suite" }
                  ]
                },
                {
                  title: "Organizational Influence",
                  stats: [
                    { value: "25%", label: "increase in executive endorsement" }
                  ]
                },
                {
                  title: "Business Results",
                  stats: [
                    { value: "18-39%", label: "productivity gains" },
                    { value: "25%", label: "reduction in attrition" }
                  ]
                }
              ].map((section, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-teal-700 mb-4">{section.title}</h3>
                  <div className={section.stats.length > 1 ? "space-y-3" : ""}>
                    {section.stats.map((stat, statIndex) => (
                      <motion.div 
                        key={statIndex}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 + (index * 0.1) + (statIndex * 0.1), duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <p className="text-3xl font-bold text-teal-600">{stat.value}</p>
                        <p className="text-teal-600">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </div>
      </motion.section>
    </main>
  );
}