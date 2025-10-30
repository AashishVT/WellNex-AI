import React from 'react'

export default function PatientHeader({user={name:'Aashish', status:'Stable'}}){
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="text-lg font-semibold">Hi {user.name} 👋</div>
        <div className="text-sm text-slate-500">Your health looks {user.status} today ❤️</div>
      </div>
      <div>
        <img src="/branding/wellnex_logo_C.svg" alt="avatar" className="w-12 h-12 rounded-lg" />
      </div>
    </div>
  )
}
