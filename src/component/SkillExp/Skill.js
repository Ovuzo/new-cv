import React from 'react'
import './style.css';

function Skill() {
  return (
    <div className='skill py-1'>
        <div className='skill-wrap'>
        <div className='heading'>
        <h3  className='py-2'>Skill Highlight</h3>
        </div>
        <hr></hr>
        <div className='ul-wrap py-top'>
        <div className='list-1 p-left'>
        <ul>
          <li>Outstanding communication</li>
          <li>Project Management</li>
          <li>Excellent team player</li>
        </ul>
        </div>

        <div className='list-2'>
        <ul>
          <li>Programming and design skills</li>
          <li>User experience design (UX)</li>
          <li>front-end web development (HTML, CSS, JAVASCRIPT)</li>
        </ul>
        </div>
        </div>
        </div>
         
    </div>
  )
}

export default Skill