import React from 'react'
import { Home, Users, Bell, BarChart2, User } from 'lucide-react'

export default function BottomNav(){
  const items = [
    { icon: <Home size={18} />, label: 'Home' },
    { icon: <Users size={18} />, label: 'Patients' },
    { icon: <Bell size={18} />, label: 'Alerts' },
    { icon: <BarChart2 size={18} />, label: 'Analytics' },
    { icon: <User size={18} />, label: 'Profile' }
  ]
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-lg px-4 py-2 flex gap-4">
      {items.map((it,idx)=> (
        <button key={idx} className="flex flex-col items-center text-sm text-slate-600 px-3 py-1 hover:bg-slate-50 rounded-lg">{it.icon}<div className="mt-1 text-xs">{it.label}</div></button>
      ))}
    </div>
  )
}
