import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
  <>
  <nav className='lg: bg-lime-950 grid grid-cols-2 text-lg text-white p-4 gap-10 w-screen'>
    <div>
        <p>HEALTH TRACKING APP</p>
    </div>
    <div>
        <ul className='lg: flex gap-5 flex-wrap'>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/new-Record">CREATE RECORD</Link></li>
            <li><Link to="/all-Record">ALL RECORDS</Link></li>
        </ul>
    </div>
  </nav>
  </>
  )
}
