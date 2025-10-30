import React from 'react'
import { Bell, Zap, Settings } from 'lucide-react'

export default function DoctorHeader({doctor={name:'Dr. Patel', specialty:'General Physician', status:'Online'}}){
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src="/branding/wellnex_logo_C.svg" alt="avatar" className="h-12 w-12 rounded-lg" />
        <div>
          <div className="text-lg font-semibold">Welcome, {doctor.name} <span className="text-sm font-normal text-slate-500">• {doctor.specialty}</span></div>
          <div className="text-sm text-slate-500">Status: <span className={`ml-1 font-medium ${doctor.status==='Online'?'text-green-600':'text-orange-500'}`}>{doctor.status}</span></div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 rounded-lg hover:bg-slate-100"><Bell size={18} /></button>
        <button className="p-2 rounded-lg hover:bg-slate-100"><Zap size={18} /></button>
        <button className="p-2 rounded-lg hover:bg-slate-100"><Settings size={18} /></button>
      </div>
    </div>
  )
}
