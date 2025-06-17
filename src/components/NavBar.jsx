
import '../App.css'
import {Link } from 'react-router-dom'

export default function NavBar() {
  return(
    <nav className='flex justify-between bg-teal-400 w-screen py-5 absolute top-0 left-0 px-12 font-semibold'>
      <figure>
        <img src="../images/RodgersLogo.png" alt="Company logo" width={300} />
      </figure>
      <ul className='flex items-center text-gray gap-10'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About James</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
  
}
