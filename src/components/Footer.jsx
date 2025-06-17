// import React from "react";
import { Link } from "react-router-dom";
import {Mic} from 'lucide-react'
export default function Footer() {
    return(
        <footer className="w-full bg-teal-800 text-white pt-12 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto px-6">
                {/* Company Info */}
                <section className="space-y-4 pt-10 text-center" >
                    {/* <h3 className="text-2xl font-bold text-teal-300">Dr. James O. Rodgers</h3> */}
                    <img src="../images/RodgersLogo.png" alt="company logo for Dr. James O. Rodegrs" />
                    <p className="text-teal-100">Leadership solutions for tech executives</p>
                    <div className="flex justify-center w-1/ gap-5">
                        <a href="https://www.facebook.com/james.rodgers.14661261" className="text-teal-300 hover:text-white transition" aria-label="facebook Icon">
                            <svg className="w-8 h-10" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                            </svg>
                        </a>
                        <a href="https://x.com/jdiversitycoach" className="text-teal-300 hover:text-white transition" aria-label="X.com incon">
                            <svg className="w-8 h-10" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/coachandstrategist/" className="text-teal-300 hover:text-white transition " aria-label="LinkedIn Icon">
                            <svg className="w-8 h-10" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                    </div>
          
                </section>

                {/* Navigation Links */}
                <section>
                    <h4 className="text-lg font-semibold text-teal-300 mb-4">Navigation</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-teal-100 hover:text-white transition">Home</a></li>
                        <li><a href="#" className="text-teal-100 hover:text-white transition">About</a></li>
                        <li><a href="#" className="text-teal-100 hover:text-white transition">Services</a></li>
                        <li><a href="#" className="text-teal-100 hover:text-white transition">Blog</a></li>
                        <li><a href="#" className="text-teal-100 hover:text-white transition">Contact</a></li>
                    </ul>
                </section>

                {/* Services Links */}
                <section>
                    <h4 className="text-lg font-semibold text-teal-300 mb-4">Services</h4>
                    <ul className="space-y-2">
                        <li><Link to="/services" className="text-teal-100 hover:text-white transition">Executive Coaching</Link></li>
                        <li><Link to="/services" className="text-teal-100 hover:text-white transition">Team Leadership Programs</Link></li>
                        <li><Link to="/services" className="text-teal-100 hover:text-white transition">Keynote Speaking</Link></li>
                    </ul>
                </section>

                {/* Podcast & Newsletter */}
                <section className="space-y-6">
                    <section>
                        <h4 className="text-lg font-semibold text-teal-300 mb-4">Leadership Podcast</h4>
                        <div className="flex items-center space-x-3 mb-2">
                            <div className="bg-teal-600 p-2 rounded-lg">
                            <svg className="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                            </svg>
                            </div>
                            <div>
                            <p className="text-teal-100">Listen to Leadership Insights</p>
                            <div className="flex space-x-2 mt-1">
                                <a href="#" className="text-xs bg-teal-600 hover:bg-teal-700 text-white! px-2 py-1 rounded">Apple</a>
                                <a href="#" className="text-xs bg-teal-600 hover:bg-teal-700 text-white! px-2 py-1 rounded">Spotify</a>
                            </div>
                            </div>
                        </div>
                    </section>

                    <article>
                        <h4 className="text-lg font-semibold text-teal-300 mb-2">Newsletter</h4>
                        <div className="flex">
                            <input 
                            type="email" 
                            placeholder="Your email" 
                            className="bg-teal-700 text-white placeholder-teal-300 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
                            />
                            <button className="bg-teal-400! hover:bg-teal-600 text-white px-4 py-2 rounded-r-lg transition">
                            Subscribe
                            </button>
                        </div>
                    </article>
                </section>
                </div>

                {/* Copyright */}
                <div className="border-t border-teal-700 mt-8 pt-6 text-center text-teal-300">
                <p>&copy; {new Date().getFullYear()} Dr. James O. Rodgers. All rights reserved.</p>
            </div>
           
        </footer>
    )
    
}
