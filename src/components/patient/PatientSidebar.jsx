import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const items = [
  { to: '/patient', label: 'Home' },
  { to: '/patient/timeline', label: 'Medical Timeline' },
  { to: '/patient/prescriptions', label: 'My Prescriptions' },
  { to: '/upload', label: 'Upload Records' },
  { to: '/ai', label: 'AI Insights' }
]

export default function PatientSidebar(){
  const loc = useLocation()
  return (
    <nav className="p-4">
      <ul className="space-y-2 text-sm">
        {items.map(i=> (
          <li key={i.to}>
            <Link to={i.to} className={`block px-3 py-2 rounded ${loc.pathname.startsWith(i.to) ? 'bg-wellnex-DEFAULT text-white' : 'text-slate-700 hover:bg-slate-100'}`}>
              {i.label}
            </Link>
          </li>
        ))}
        <li className="mt-4"><Link to="/" className="text-xs text-red-600">Logout</Link></li>
      </ul>
    </nav>
  )
}
