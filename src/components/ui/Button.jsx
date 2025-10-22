import React from 'react'

export default function Button({children, className='', ...props}){
  return (
    <button {...props} className={`px-4 py-2 rounded-2xl font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`} style={{background:'linear-gradient(90deg,var(--teal),var(--aqua))', color:'#fff'}}>
      {children}
    </button>
  )
}
